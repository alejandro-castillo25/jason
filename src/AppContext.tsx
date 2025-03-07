import { createContext, useEffect, useState } from 'react';

import example from './hud_screen.json';

import type { Lang } from './ui/lang';

type AppContextProp<T> = [T, React.Dispatch<React.SetStateAction<T>>];

type AppContextProps = {
  lang: AppContextProp<Lang>;
  jason: AppContextProp<Record<string, any> | Array<any>>;
  jasonBracketGuides: AppContextProp<boolean>;
  jasonItemsOffset: AppContextProp<number>;
  jasonPaths: AppContextProp<boolean>;
  jasonPathsNearPathOnly: AppContextProp<boolean>;
  jasonRoot: AppContextProp<boolean>;
  jasonObjectSize: AppContextProp<boolean>;
  jasonWordWrap: AppContextProp<boolean>;
};

export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  const [lang, setLang] = useState<Lang>('en');
  const [jasonBracketGuides, setJasonBracketGuides] = useState<boolean>(true);
  const [jasonPaths, setJasonPaths] = useState<boolean>(false);
  const [jasonPathsNearPathOnly, setjasonPathsNearPathOnly] =
    useState<boolean>(false);
  const [jasonRoot, setJasonRoot] = useState<boolean>(true);
  const [jasonWordWrap, setJasonWordWrap] = useState<boolean>(true);
  const [jasonObjectSize, setJasonObjectSize] = useState<boolean>(true);
  const [jasonItemsOffset, setJasonItemsOffset] = useState<number>(5);

  const [jason, setJason] = useState(example);

  useEffect(() => {
    function handleKeys(e: KeyboardEvent) {
      const { key } = e;

      if (e.ctrlKey && key === 'p') {
        e.preventDefault();
        setJasonPaths((paths) => !paths);
      } else if (e.ctrlKey && key === 'g') {
        e.preventDefault();
        setJasonBracketGuides((guides) => !guides);
      } else if (e.ctrlKey && key === 't') {
        e.preventDefault();
        document.documentElement.classList.toggle('dark');
        document.documentElement.classList.toggle('light');
      } else if (e.ctrlKey && key === 'w') {
        e.preventDefault();
        setJasonWordWrap((wrap) => !wrap);
      }
    }

    window.addEventListener('keydown', handleKeys);

    return () => {
      window.removeEventListener('keydown', handleKeys);
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
        jasonPathsNearPathOnly: [
          jasonPathsNearPathOnly,
          setjasonPathsNearPathOnly,
        ],
        jasonRoot: [jasonRoot, setJasonRoot],
        jasonObjectSize: [jasonObjectSize, setJasonObjectSize],
        jasonWordWrap: [jasonWordWrap, setJasonWordWrap],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
