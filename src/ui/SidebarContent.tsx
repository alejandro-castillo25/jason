import { Button } from "@/components/ui/button";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { GetIcon } from "./Icons";
import { toES } from "./Language";

import type { IconName } from "./Icons";

export function SidebarContent() {
  type Lang = "en" | "es";

  const [lang, _setLang] = useState<Lang>("en");

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
      Settings: () => {}
    }

    actions[action]();
  }




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
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-2xl">
          {lang === "en" ? "Options" : toES("Options")}
        </SheetTitle>
        <SheetDescription>
          {buttonsTexts.map((text) => {
            return (
              <>
                <Separator orientation="horizontal" className="mt-3 mb-3" />
                <Button
                  variant={
                    text !== "Clear"
                      ? text !== "Settings"
                        ? "secondary"
                        : "outline"
                      : "destructive"
                  }
                  className="w-[100%] flex"
                  onClick={() => executeAction(text)}
                >
                  <GetIcon name={getIconName(text)} />
                  <span className="mr-auto">
                    {lang === "es" ? toES(text) : text}
                  </span>
                </Button>
              </>
            );
          })}
          <Separator orientation="horizontal" className="mt-3 mb-3" />
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
}
