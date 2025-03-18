import { createContext, useContext, useEffect, useState } from "react";

import type { Lang } from "./ui/lang";
import example from "./huge.json"

type AppContextProp<T> = [T, React.Dispatch<React.SetStateAction<T>>];

type AppContextProps = {
  lang: AppContextProp<Lang>;
  jason: AppContextProp<Record<string, any> | Array<any>>;
  jasonBracketGuides: AppContextProp<boolean>;
  jasonColorizedBracketsGuides: AppContextProp<boolean>;
  jasonItemsOffset: AppContextProp<number>;
  jasonPaths: AppContextProp<boolean>;
  jasonPathsNearParentOnly: AppContextProp<boolean>; //TODO Fix the typo! (Path -> Parent)
  jasonObjectSize: AppContextProp<boolean>;
  jasonWordWrap: AppContextProp<boolean>;
  jasonMemoObjects: AppContextProp<Map<string, number>>;
  jasonMemoValues: AppContextProp<Map<string, [any, number]>>; //? [value, height, wrapHeight]
};

export const AppContext = createContext<AppContextProps | null>(null);

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  const [lang, setLang] = useState<Lang>("en");
  const [jasonBracketGuides, setJasonBracketGuides] = useState<boolean>(true);
  const [jasonBracketColorizedGuides, setJasonBracketColorizedGuides] = useState<boolean>(true);
  const [jasonPaths, setJasonPaths] = useState<boolean>(false);
  const [jasonPathsNearParentOnly, setjasonPathsNearParentOnly] =
    useState<boolean>(false);
  const [jasonWordWrap, setJasonWordWrap] = useState<boolean>(true);
  const [jasonObjectSize, setJasonObjectSize] = useState<boolean>(true);
  const [jasonItemsOffset, setJasonItemsOffset] = useState<number>(20);

  const [jasonMemoObjects, setJasonMemoObjects] = useState<Map<string, number>>(
    new Map()
  );
  const [jasonMemoValues, setJasonMemoValues] = useState<
    Map<string, [any, number]>
  >(new Map());

  const [jason, setJason] = useState(example);

  const refreshTree = () => {
    const refreshTreeEvent = new CustomEvent("refreshTree", {
      detail: {
        message: "Refreshing Tree",
      },
      cancelable: false,
      bubbles: true,
      composed: true,
    });

    document.dispatchEvent(refreshTreeEvent);
  };

  useEffect(() => {
    return () => {
      setJasonMemoObjects(new Map());
      setJasonMemoValues(new Map());
    };
  }, []);

  useEffect(() => {
    function handleKeys(e: KeyboardEvent) {
      const { key } = e;

      if (e.ctrlKey && key == "b") {
        const $openSidebarBtn = document.getElementById("openSidebarBtn");
        $openSidebarBtn!.click();
      } else if (e.ctrlKey && key === "p") {
        e.preventDefault();
        setJasonPaths((paths) => !paths);

        setJasonMemoObjects(new Map());

        setJasonMemoValues(new Map());

        setTimeout(refreshTree, 20);
      } else if (e.ctrlKey && key === "g") {
        e.preventDefault();
        setJasonBracketGuides((guides) => !guides);
      } else if (e.ctrlKey && key === "t") {
        e.preventDefault();
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");
      } else if (e.ctrlKey && key === "w") {
        e.preventDefault();
        setJasonWordWrap((wrap) => !wrap);

        setJasonMemoObjects(new Map());

        setJasonMemoValues(new Map());

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
          const previousItem = jasonItems[currentIndex - 1] as HTMLButtonElement;
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
        jason: [jason, setJason] as any,
        jasonItemsOffset: [jasonItemsOffset, setJasonItemsOffset],
        jasonBracketGuides: [jasonBracketGuides, setJasonBracketGuides],
        jasonColorizedBracketsGuides: [jasonBracketColorizedGuides, setJasonBracketColorizedGuides],
        jasonPaths: [jasonPaths, setJasonPaths],
        jasonPathsNearParentOnly: [
          jasonPathsNearParentOnly,
          setjasonPathsNearParentOnly,
        ],
        jasonObjectSize: [jasonObjectSize, setJasonObjectSize],
        jasonWordWrap: [jasonWordWrap, setJasonWordWrap],

        jasonMemoObjects: [jasonMemoObjects, setJasonMemoObjects],
        jasonMemoValues: [jasonMemoValues, setJasonMemoValues],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
