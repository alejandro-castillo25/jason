import { createContext, useState } from "react";

type Lang = "en" | "es";

type AppContextProp<T> = [T, React.Dispatch<React.SetStateAction<T>>];

type AppContextProps = {
  lang: AppContextProp<Lang>;
};

export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <AppContext.Provider
      value={{
        lang: [lang, setLang],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
