import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
// import { Separator } from "@/components/ui/separator";
import { useContext } from "react";
import { GetIcon } from "./Icons";
import { toES, translateTo } from "./lang";

import type { IconName } from "./Icons";

import { AppContext, useAppContext } from "../AppContext";
import { invoke } from "@tauri-apps/api/core";

export function SidebarContent() {
  const [lang] = useAppContext()?.lang!;
  const [, setJason] = useAppContext()?.jason!;
  const [, setJasonMemoObjects] = useAppContext()?.jasonMemoObjects!;
  const [, setJasonMemoValues] = useAppContext()?.jasonMemoValues!;


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

  const buttonsTexts = [
    "Create New",
    "Load File",
    "Paste Text",
    "Download",
    "Clear",
    "Settings",
  ] as const;

  const executeAction = (action: (typeof buttonsTexts)[number]) => {
    const actions: Record<typeof action, () => void> = {
      //TODO Implement actions
      "Create New": () => {},
      "Load File": async () => {
        try {
          const path = await invoke("pick_file", {});
          console.log(path);

          alert(path);
          const fileContent: string = await invoke("read_file_content", {
            path,
          });
          alert("On it!");
          console.log(fileContent);
          setJason(JSON.parse(fileContent));
          setJasonMemoObjects(new Map());
          setJasonMemoValues(new Map());
          setTimeout(refreshTree, 20);
        } catch (e) {
          console.error(e);
          alert(e);
        }
      },
      "Paste Text": () => {},
      Clear: () => {},
      Download: () => {},
      Settings: () => {},
    };

    actions[action]();
  };

  function getIconName(name: (typeof buttonsTexts)[number]): IconName {
    const dict = {
      "Create New": "Plus",
      "Load File": "LoadFile",
      "Paste Text": "Paste",
      Download: "Download",
      Settings: "Settings",
      Clear: "Trash",
    } as const;

    return dict[name] ?? null;
  }

  return (
    <Sheet>
      <SheetTrigger
        className="ml-auto aspect-square h-[100%]"
        id="open-sidebar-btn"
      >
        <GetIcon name="Burger" className="h-[1.5rem] w-[1.5rem] text-white" />
      </SheetTrigger>
      <SheetContent key={"sheet-content"}>
        <SheetHeader key={"sheet-header"}>
          <SheetTitle className="text-2xl" key={"sheet-title"}>
            {lang === "en" ? "Options" : toES("Options")}
          </SheetTitle>
          <SheetDescription key={"sheetDesc"}>
            {buttonsTexts.map((text, i) => {
              return (
                <Button
                  key={`sidebar-btn-${i}`}
                  variant={
                    text !== "Clear"
                      ? text !== "Settings"
                        ? "secondary"
                        : "outline"
                      : "destructive"
                  }
                  className="h-[3rem] w-[100%] flex mt-3.5 mb-3.5"
                  onClick={() => executeAction(text)}
                >
                  <GetIcon name={getIconName(text)} />
                  <span className="mr-auto">{translateTo(lang, text)}</span>
                </Button>
              );
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
