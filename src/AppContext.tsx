import { createContext, useContext, useEffect, useRef, useState } from "react";

import { load, Store } from "@tauri-apps/plugin-store";

import type { Lang } from "./ui/lang";
import { platform } from "@tauri-apps/plugin-os";
// import example from "./huge_theme.json";

export type JasonColor =
  | "blue"
  | "red"
  | "yellow"
  | "rose"
  | "orange"
  | "zinc"
  | "green"
  | "violet";

export type JasonTheme = "dark" | "light" | "system";

type AppContextProp<T> = [T, React.Dispatch<React.SetStateAction<T>>];

interface AppContextProps {
  lang: AppContextProp<Lang>;
  jason: AppContextProp<Record<string, any> | Array<any> | null>;
  jasonBracketGuides: AppContextProp<boolean>;
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

  jasonIsNone: AppContextProp<boolean>;

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

  const [lang, setLang] = useState<Lang>("en");


  const [jasonBracketGuides, setJasonBracketGuides] = useState<boolean>(true);
  const [jasonBracketColorizedGuides, setJasonBracketColorizedGuides] =
    useState<boolean>(false);
  const [jasonPaths, setJasonPaths] = useState<boolean>(false);
  const [jasonPathsNearParentOnly, setjasonPathsNearParentOnly] =
    useState<boolean>(false);
  const [jasonWordWrap, setJasonWordWrap] = useState<boolean>(true);
  const [jasonObjectSize, setJasonObjectSize] = useState<boolean>(true);
  const [jasonItemsOffset, setJasonItemsOffset] = useState<number | string>(14);

  const [jasonTheme, setJasonTheme] = useState<JasonTheme>("dark");
  const [jasonColor, setJasonColor] = useState<JasonColor>("blue");

  const [jasonFilePath, setJasonFilePath] = useState<string | null>(null);
  const [jasonIsNone, setJasonIsnone] = useState<boolean>(true);

  const jasonMemoObjects = useRef<Map<string, number>>(new Map());
  const jasonMemoValues = useRef<Map<string, [any, number]>>(new Map());

  const [jasonScreen, setJasonScreen] = useState<"main" | "settings">("main");

  const [jason, setJason] = useState<any>(null);

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

  useEffect(() => {
    async function saveThemeAndColor() {
      if (!storeRef.current) return;

      await storeRef.current.set("theme", jasonTheme);
      await storeRef.current.set("color", jasonColor);
      await storeRef.current.save();
    }

    document.documentElement.className = "";
    document.documentElement.classList.add(`${jasonColor}-${jasonTheme}`);

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
      await storeRef.current.save();
    }

    saveBrackets();
  }, [jasonBracketGuides, jasonBracketColorizedGuides]);

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

    if(typeof jasonItemsOffset === "number") saveIndentation();
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
    async function loadStore() {
      storeRef.current = await load("store.json", { autoSave: true });

      const color = await storeRef.current.get<JasonColor>("color");
      const theme = await storeRef.current.get<JasonTheme>("theme");
      const language = await storeRef.current.get<Lang>("lang");
      const wordWrap = await storeRef.current.get<boolean>("wordWrap");
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

      const paths = await storeRef.current.get<boolean>("paths");
      const pathsParentOnly = await storeRef.current.get<boolean>(
        "pathsParentOnly"
      );

      await storeRef.current.save();

      setLang(language ?? "en");
      setJasonColor(color ?? "blue");
      setJasonTheme(theme ?? "dark");

      setJasonWordWrap(wordWrap ?? true);
      setJasonObjectSize(objectSize ?? false);
      setJasonItemsOffset(indentationSize ?? 14);

      setJasonBracketGuides(bracketGuides ?? false);
      setJasonBracketColorizedGuides(colorizedBracketGuides ?? false);

      setJasonPaths(paths ?? false);
      setJasonPaths(pathsParentOnly ?? false);
    }

    loadStore();

    return () => {
      jasonMemoObjects.current = new Map();
      jasonMemoValues.current = new Map();
    };
  }, []);

  useEffect(() => {
    (window as any).androidBackCallback = () => {
      let canLeave = false;

      setJasonScreen((currentScreen) => {
        canLeave = currentScreen !== "settings";
        return currentScreen === "settings" ? "main" : currentScreen;
      });

      return canLeave;
    };

    function handleKeys(e: KeyboardEvent) {
      const { key } = e;

      if (e.ctrlKey && key === "b") {
        const $jasonHeader = document.getElementById("jasonHeader")!;
        $jasonHeader.style.height = "4.2rem";

        $jasonHeader.style.borderBottomWidth = "4px";

        const $openSidebarBtn = document.getElementById("openSidebarBtn");
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
        setJasonScreen((current) =>
          current === "settings" ? "main" : current
        );
      } else if (e.ctrlKey && key === "t") {
        e.preventDefault();
        setJasonTheme((theme) => (theme === "dark" ? "light" : "dark"));
      } else if (e.ctrlKey && key === "C" && e.shiftKey) {
        storeRef.current!.clear();
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

        jasonIsNone: [jasonIsNone, setJasonIsnone]
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
