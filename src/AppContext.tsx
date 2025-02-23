import { createContext, useEffect, useState } from "react";
import egg2 from "./hud_screen.json";

type Lang = "en" | "es";

type AppContextProp<T> = [T, React.Dispatch<React.SetStateAction<T>>];

type AppContextProps = {
  lang: AppContextProp<Lang>;
  jason: AppContextProp<Record<string, any> | Array<any>>;
  jasonBracketGuides: AppContextProp<boolean>;
  jasonItemsOffset: AppContextProp<number>;
  jasonPaths: AppContextProp<boolean>;
  jasonPathsOnlyParent: AppContextProp<boolean>; //TODO Replace name with "jasonPathsShowNearParentOnly"
  jasonRoot: AppContextProp<boolean>;
  jasonWordWrap: AppContextProp<boolean>;
};

export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  const [lang, setLang] = useState<Lang>("en");
  const [jasonBracketGuides, setJasonBracketGuides] = useState<boolean>(true);
  const [jasonPaths, setJasonPaths] = useState<boolean>(true);
  const [jasonPathsOnlyParent, setJasonPathsOnlyParent] = useState<boolean>(false);
  const [jasonRoot, setJasonRoot] = useState<boolean>(true);
  const [jasonWordWrap, setJasonWordWrap] = useState<boolean>(true);
  const [jasonItemsOffset, setJasonItemsOffset] = useState<number>(4);


  const [jason, setJason] = useState(egg2);

  useEffect(() => {
    function handleKeys(e: KeyboardEvent) {
      const { key } = e;

      if (e.ctrlKey && key === "p") {
        e.preventDefault();
        setJasonPaths((paths) => !paths);
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
      } else if (e.ctrlKey && key === "n") {
        e.preventDefault();
        setJason((json: any) => {
          return {...json, a: {
            lol: 34
          }}
        });
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
        jasonPaths: [jasonPaths, setJasonPaths],
        jasonPathsOnlyParent: [jasonPathsOnlyParent, setJasonPathsOnlyParent],
        jasonRoot: [jasonRoot, setJasonRoot],
        jasonWordWrap: [jasonWordWrap, setJasonWordWrap],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
