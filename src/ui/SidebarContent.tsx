import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useContext } from "react";
import { GetIcon } from "./Icons";
import { toES } from "./Language";

import type { IconName } from "./Icons";

import { AppContext } from "../AppContext";

export function SidebarContent() {
  const [lang, _setLang] = useContext(AppContext)?.lang!;

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
      "Load File": () => {},
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

  /*

  <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

   
   */
  return (
    <Sheet>
      <SheetTrigger
        className="ml-auto aspect-square h-[100%]"
        id="open-sidebar-btn"
      >
        <GetIcon name="Burger" className="h-[1.5rem] w-[1.5rem]" />
      </SheetTrigger>
      <SheetContent key={"sheet-content"}>
        <SheetHeader key={"sheet-header"}>
          <SheetTitle className="text-2xl" key={"sheet-title"}>
            {lang === "en" ? "Options" : toES("Options")}
          </SheetTitle>
          <SheetDescription key={"sheetDesc"} >
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
                  className="w-[100%] flex mt-4 mb-4"
                  onClick={() => executeAction(text)}
                >
                  <GetIcon name={getIconName(text)} />
                  <span className="mr-auto">
                    {lang === "es" ? toES(text) : text}
                  </span>
                </Button>
              );
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
