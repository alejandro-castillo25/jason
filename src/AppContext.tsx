import { createContext, useContext, useEffect, useRef, useState } from "react";

import { load, Store } from "@tauri-apps/plugin-store";

import type { Lang } from "./ui/lang";
import { platform } from "@tauri-apps/plugin-os";
import { invoke } from "@tauri-apps/api/core";
import { hslToHex, isValidHex } from "./ui/util";
// import example from "./huge_theme.json";

export type JasonColor =
  | "blue"
  | "red"
  | "yellow"
  | "rose"
  | "orange"
  | "zinc"
  | "magenta"
  | "olive"
  | "emerald"
  | "purple"
  | "green"
  | "brown"
  | "coral"
  | "violet"
  | "sapphire"
  | "turquoise";

export type JasonTheme = "dark" | "light" | "system";

type AppContextProp<T> = [T, React.Dispatch<React.SetStateAction<T>>];

interface AppContextProps {
  lang: AppContextProp<Lang>;
  jason: AppContextProp<Record<string, any> | Array<any> | null>;
  jasonBracketGuides: AppContextProp<boolean>;
  jasonBracketGuidesOpacity: AppContextProp<number>;
  jasonColorizedBracketsGuides: AppContextProp<boolean>;
  jasonItemsOffset: AppContextProp<number | string>;
  jasonPaths: AppContextProp<boolean>;
  jasonPathsNearParentOnly: AppContextProp<boolean>;
  jasonObjectSize: AppContextProp<boolean>;
  jasonWordWrap: AppContextProp<boolean>;
  jasonMemoObjects: React.MutableRefObject<Map<string, number>>;
  jasonMemoValues: React.MutableRefObject<Map<string, [any, number]>>; //? [value, height, wrapHeight]
  jasonTheme: AppContextProp<JasonTheme>;
  jasonColor: AppContextProp<JasonColor>;

  OS: React.MutableRefObject<string>;

  jasonDynamicHeader: AppContextProp<boolean>;

  jasonIsNone: AppContextProp<boolean>;
  jasonFormatFile: AppContextProp<boolean>;
  isFullscreen: AppContextProp<boolean>;

  jasonFilePath: AppContextProp<string | null>;
  jasonScreen: AppContextProp<"main" | "settings">;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  const storeRef = useRef<Store | null>(null);
  const OS = useRef<string>(platform());

  const [lang, setLang] = useState<Lang>("system");

  const [jasonBracketGuides, setJasonBracketGuides] = useState<boolean>(true);
  const [jasonBracketGuidesOpacity, setJasonBracketGuidesOpacity] =
    useState<number>(75);
  const [jasonBracketColorizedGuides, setJasonBracketColorizedGuides] =
    useState<boolean>(false);
  const [jasonPaths, setJasonPaths] = useState<boolean>(false);
  const [jasonPathsNearParentOnly, setjasonPathsNearParentOnly] =
    useState<boolean>(false);
  const [jasonWordWrap, setJasonWordWrap] = useState<boolean>(true);
  const [jasonObjectSize, setJasonObjectSize] = useState<boolean>(false);
  const [jasonItemsOffset, setJasonItemsOffset] = useState<number | string>(16);

  const [jasonTheme, setJasonTheme] = useState<JasonTheme>("system");
  const [jasonColor, setJasonColor] = useState<JasonColor>("blue");

  const [jasonFilePath, setJasonFilePath] = useState<string | null>(null);
  const [jasonIsNone, setJasonIsnone] = useState<boolean>(true);

  const [jasonDynamicHeader, setJasonDynamicHeader] = useState<boolean>(true);

  const [jasonFormatFile, setJasonFormatFile] = useState<boolean>(true);

  const jasonMemoObjects = useRef<Map<string, number>>(new Map());
  const jasonMemoValues = useRef<Map<string, [any, number]>>(new Map());

  const [jasonScreen, setJasonScreen] = useState<"main" | "settings">("main");

  const [jason, setJason] = useState<any>(null);

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const refreshTree = () => {
    const refreshTreeEvent = new CustomEvent("refreshTree", {
      detail: {
        message: "Refreshing Tree",
      },
      cancelable: true,
      bubbles: true,
      composed: true,
    });

    document.dispatchEvent(refreshTreeEvent);
  };

  const hasStateOpen = (el: HTMLElement) =>
    el?.getAttribute("data-state") === "open";

  async function setStatusBarColor() {
    try {
      const colorProp = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim(); //? This could return a hsl or a HEX value, so better be careful!
      if (isValidHex(colorProp)) {
        await invoke("plugin:status-bar-color|set_color", {
          payload: { hex: colorProp },
        });
        return;
      }
      const component: RegExp = /(?:\d|\.)+/g;

      const [h, s, l] = colorProp
        .match(component)!
        .map((e) => Number.parseFloat(e));

      const hexValue = hslToHex(h, s, l).toUpperCase();

      // await invoke("set_statusbar_color", { color });
      await invoke("plugin:status-bar-color|set_color", {
        payload: { hex: hexValue },
      });
    } catch (e: any) {
      alert(`StatusBar color Error:\n${e}`);
    }
  }

  useEffect(() => {
    async function saveThemeAndColor() {
      if (!storeRef.current) return;

      await storeRef.current.set("theme", jasonTheme);
      await storeRef.current.set("color", jasonColor);
      await storeRef.current.save();
    }

    const theme: Exclude<JasonTheme, "system"> =
      jasonTheme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : jasonTheme;

    document.documentElement.className = "";
    document.documentElement.classList.add(`${jasonColor}-${theme}`);
    document.documentElement.classList.add(`${theme}`);
    setStatusBarColor();

    saveThemeAndColor();
  }, [jasonTheme, jasonColor]);

  useEffect(() => {
    async function saveBrackets() {
      if (!storeRef.current) return;

      await storeRef.current.set("bracketGuides", jasonBracketGuides);
      await storeRef.current.set(
        "colorizedBracketGuides",
        jasonBracketColorizedGuides
      );
      await storeRef.current.set("bracketGuidesOpacity", jasonBracketGuidesOpacity);

      await storeRef.current.save();
    }

    saveBrackets();
  }, [
    jasonBracketGuides,
    jasonBracketColorizedGuides,
    jasonBracketGuidesOpacity,
  ]);

  useEffect(() => {
    async function savePaths() {
      if (!storeRef.current) return;

      await storeRef.current.set("paths", jasonPaths);
      await storeRef.current.set("pathsParentOnly", jasonPathsNearParentOnly);
      await storeRef.current.save();
    }

    savePaths();
  }, [jasonPaths, jasonPathsNearParentOnly]);

  useEffect(() => {
    async function saveLang() {
      if (!storeRef.current) return;

      await storeRef.current.set("lang", lang);
      await storeRef.current.save();
    }

    saveLang();
  }, [lang]);

  useEffect(() => {
    async function saveWordWrap() {
      if (!storeRef.current) return;

      await storeRef.current.set("wordWrap", jasonWordWrap);
      await storeRef.current.save();
    }

    saveWordWrap();
  }, [jasonWordWrap]);

  useEffect(() => {
    async function saveIndentation() {
      if (!storeRef.current) return;

      await storeRef.current.set("indentationSize", jasonItemsOffset);
      await storeRef.current.save();
    }

    if (typeof jasonItemsOffset === "number") saveIndentation();
  }, [jasonItemsOffset]);

  useEffect(() => {
    async function saveObjectSize() {
      if (!storeRef.current) return;

      await storeRef.current.set("objectSize", jasonObjectSize);
      await storeRef.current.save();
    }

    saveObjectSize();
  }, [jasonObjectSize]);

  useEffect(() => {
    async function saveDynamicHeader() {
      if (!storeRef.current) return;

      await storeRef.current.set("dynamicHeader", jasonDynamicHeader);
      await storeRef.current.save();
    }

    saveDynamicHeader();
  }, [jasonDynamicHeader]);

  useEffect(() => {
    async function saveFormatFile() {
      if (!storeRef.current) return;

      await storeRef.current.set("formatFile", jasonFormatFile);
      await storeRef.current.save();
    }

    saveFormatFile();
  }, [jasonFormatFile]);

  useEffect(() => {
    async function loadStore() {
      storeRef.current = await load("store.json");

      const color = await storeRef.current.get<JasonColor>("color");
      const theme = await storeRef.current.get<JasonTheme>("theme");
      const language = await storeRef.current.get<Lang>("lang");
      const wordWrap = await storeRef.current.get<boolean>("wordWrap");
      const dynamicHeader = await storeRef.current.get<boolean>(
        "dynamicHeader"
      );
      const objectSize = await storeRef.current.get<boolean>("objectSize");
      const indentationSize = await storeRef.current.get<number>(
        "indentationSize"
      );

      const bracketGuides = await storeRef.current.get<boolean>(
        "bracketGuides"
      );
      const colorizedBracketGuides = await storeRef.current.get<boolean>(
        "colorizedBracketGuides"
      );

      const bracketGuidesOpacity = await storeRef.current.get<number>(
        "bracketGuidesOpacity"
      );

      const formatFile = await storeRef.current.get<boolean>("formatFile");

      const paths = await storeRef.current.get<boolean>("paths");
      const pathsParentOnly = await storeRef.current.get<boolean>(
        "pathsParentOnly"
      );

      await storeRef.current.save();

      setLang(language ?? "system");
      setJasonColor(color ?? "blue");
      setJasonTheme(theme ?? "system");

      setJasonWordWrap(wordWrap ?? true);
      setJasonObjectSize(objectSize ?? false);
      setJasonItemsOffset(indentationSize ?? 16);

      setJasonBracketGuides(bracketGuides ?? false);
      setJasonBracketGuidesOpacity(bracketGuidesOpacity ?? 75);
      setJasonBracketColorizedGuides(colorizedBracketGuides ?? false);

      setJasonFormatFile(formatFile ?? true);

      setJasonPaths(paths ?? false);
      setjasonPathsNearParentOnly(pathsParentOnly ?? false);
      setJasonDynamicHeader(dynamicHeader ?? true);
    }

    loadStore();

    const watchMediaChange = (e: MediaQueryListEvent) => {
      setJasonColor((currentColor) => {
        setJasonTheme((currentTheme) => {
          if (currentTheme !== "system") return currentTheme;
          const newTheme = e.matches ? "dark" : "light";

          document.documentElement.className = "";
          document.documentElement.classList.add(`${currentColor}-${newTheme}`);
          document.documentElement.classList.add(`${newTheme}`);

          setStatusBarColor();

          return currentTheme;
        });

        return currentColor;
      });
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", watchMediaChange);
      

    return () => {
      jasonMemoObjects.current = new Map();
      jasonMemoValues.current = new Map();
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", watchMediaChange);
    };
  }, []);

  useEffect(() => {
    (window as any).androidBackCallback = () => {
      let canLeave = false;

      setJasonScreen((currentScreen) => {
        canLeave = currentScreen !== "settings";
        return currentScreen === "settings" ? "main" : currentScreen;
      });

      const $openSidebarBtn = document.getElementById("openSidebarBtn")!;
      const $jasonDialogCreateNew = document.getElementById(
        "jasonDialogCreateNew"
      )!;
      const $addItemDialog = document.getElementById("addItemDialog")!;
      const $itemOptionsDialog = document.getElementById("itemOptionsDialog")!;

      if (hasStateOpen($openSidebarBtn)) {
        $openSidebarBtn?.click();
        canLeave = false;
      } else if (hasStateOpen($jasonDialogCreateNew)) {
        $jasonDialogCreateNew?.click();
        canLeave = false;
      } else if (hasStateOpen($addItemDialog)) {
        $addItemDialog?.click();
        canLeave = false;
      } else if (hasStateOpen($itemOptionsDialog)) {
        $itemOptionsDialog?.click();
        canLeave = false;
      }

      return canLeave;
    };

    function handleKeys(e: KeyboardEvent) {
      const { key } = e;

      if (e.ctrlKey && key === "b") {
        const $jasonHeader = document.getElementById("jasonHeader")!;
        $jasonHeader.style.height = "4.2rem";

        $jasonHeader.style.borderBottomWidth = "4px";

        const $openSidebarBtn = document.getElementById("openSidebarBtn")!;
        const $jasonDialogCreateNew = document.getElementById(
          "jasonDialogCreateNew"
        )!;
        const $addItemDialog = document.getElementById("addItemDialog")!;
        const $itemOptionsDialog =
          document.getElementById("itemOptionsDialog")!;

        if (hasStateOpen($jasonDialogCreateNew)) {
          $jasonDialogCreateNew?.click();
        } else if (hasStateOpen($addItemDialog)) {
          $addItemDialog?.click();
        } else if (hasStateOpen($itemOptionsDialog)) {
          $itemOptionsDialog?.click();
        }

        $openSidebarBtn?.click();
      } else if (e.ctrlKey && key === "p") {
        e.preventDefault();
        setJasonPaths((paths) => !paths);

        jasonMemoObjects.current = new Map();

        jasonMemoValues.current = new Map();

        setTimeout(refreshTree, 20);
      } else if (e.ctrlKey && key === "g") {
        e.preventDefault();
        setJasonBracketGuides((guides) => !guides);
      } else if (key === "Escape") {
        // setJasonScreen((current) =>
        //   current === "settings" ? "main" : current
        // );
      } else if (e.ctrlKey && key === "t") {
        e.preventDefault();
        setJasonTheme((theme) => (theme === "dark" ? "light" : "dark"));
      } else if (e.ctrlKey && key === "C" && e.shiftKey) {
        // storeRef.current!.clear();
      } else if (e.ctrlKey && key === "w") {
        e.preventDefault();
        setJasonWordWrap((wrap) => !wrap);

        jasonMemoObjects.current = new Map();

        jasonMemoValues.current = new Map();

        setTimeout(refreshTree, 20);
      } else if (
        document.activeElement!.tagName === "BUTTON" &&
        key !== "Tab"
      ) {
        const jasonItems = Array.from(document.querySelectorAll(".jason-item"));
        const currentIndex = jasonItems.indexOf(
          document.activeElement as HTMLButtonElement
        );

        if (currentIndex === -1) return;

        if (key === "ArrowUp") {
          e.preventDefault();
          const previousItem = jasonItems[
            currentIndex - 1
          ] as HTMLButtonElement;
          if (previousItem) {
            previousItem.focus();
          }
        } else if (key === "ArrowDown") {
          e.preventDefault();

          const nextItem = jasonItems[currentIndex + 1] as HTMLButtonElement;
          if (nextItem) {
            nextItem.focus();
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeys);

    return () => {
      window.removeEventListener("keydown", handleKeys);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang: [lang, setLang],
        OS,
        jason: [jason, setJason],
        jasonScreen: [jasonScreen, setJasonScreen],
        jasonItemsOffset: [jasonItemsOffset, setJasonItemsOffset],
        jasonBracketGuides: [jasonBracketGuides, setJasonBracketGuides],
        jasonBracketGuidesOpacity: [
          jasonBracketGuidesOpacity,
          setJasonBracketGuidesOpacity,
        ],
        jasonColorizedBracketsGuides: [
          jasonBracketColorizedGuides,
          setJasonBracketColorizedGuides,
        ],
        jasonPaths: [jasonPaths, setJasonPaths],
        jasonPathsNearParentOnly: [
          jasonPathsNearParentOnly,
          setjasonPathsNearParentOnly,
        ],
        jasonObjectSize: [jasonObjectSize, setJasonObjectSize],
        jasonWordWrap: [jasonWordWrap, setJasonWordWrap],

        jasonMemoObjects,
        jasonMemoValues,
        jasonColor: [jasonColor, setJasonColor],
        jasonTheme: [jasonTheme, setJasonTheme],

        jasonFilePath: [jasonFilePath, setJasonFilePath],

        jasonDynamicHeader: [jasonDynamicHeader, setJasonDynamicHeader],
        jasonFormatFile: [jasonFormatFile, setJasonFormatFile],
        isFullscreen: [isFullscreen, setIsFullscreen],

        jasonIsNone: [jasonIsNone, setJasonIsnone],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
