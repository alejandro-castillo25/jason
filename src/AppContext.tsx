import { createContext, useEffect, useState } from "react";

type Lang = "en" | "es";

type AppContextProp<T> = [T, React.Dispatch<React.SetStateAction<T>>];

type AppContextProps = {
  lang: AppContextProp<Lang>;
  jason: AppContextProp<Record<string, any> | Array<any>>;
  jasonBracketGuides: AppContextProp<boolean>;
  jasonItemsOffset: AppContextProp<number>;
  jasonPaths: AppContextProp<boolean>;
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
  const [jasonItemsOffset, setJasonItemsOffset] = useState<number>(4);
  const [jason, setJason] = useState({
    users: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        address: {
          street: "123 Main St",
          city: "Springfield",
          state: "IL",
          zip: "62704",
        },
        orders: [
          {
            orderId: 101,
            date: "2024-02-22",
            total: 250.75,
            items: [
              {
                productId: 201,
                name: "Laptop",
                quantity: 1,
                price: 999.99,
              },
              {
                productId: 202,
                name: "Wireless Mouse",
                quantity: 2,
                price: 29.99,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        address: {
          street: "456 Elm St",
          city: "Metropolis",
          state: "NY",
          zip: "10001",
        },
        orders: [],
      },
    ],
    products: [
      {
        id: 201,
        name: "Laptop",
        description: "A powerful laptop with 16GB RAM and 512GB SSD.",
        price: 999.99,
        stock: 10,
        reviews: [
          {
            userId: 1,
            rating: 5,
            comment: "Excellent performance!",
          },
        ],
      },
      {
        id: 202,
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with long battery life.",
        price: 29.99,
        stock: 50,
        reviews: [],
      },
    ],
    categories: [
      {
        id: 1,
        name: "Electronics",
        products: [201, 202],
      },
    ],
  });


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
      }
      
    }
    
    
    window.addEventListener("keydown", handleKeys);

    
    return () => {
      window.removeEventListener("keydown", handleKeys);
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        lang: [lang, setLang],
        jason: [jason, setJason] as any,
        jasonItemsOffset: [jasonItemsOffset, setJasonItemsOffset],
        jasonBracketGuides: [jasonBracketGuides, setJasonBracketGuides],
        jasonPaths: [jasonPaths, setJasonPaths],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
