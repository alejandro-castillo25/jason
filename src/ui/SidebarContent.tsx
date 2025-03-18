import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { GetIcon } from "./Icons";
import { translateTo } from "./lang";

import type { IconName } from "./Icons";

import { useAppContext } from "../AppContext";
import { Input } from "@/components/ui/input";




import { getWorkerType } from "./util";

import { save } from "@tauri-apps/plugin-dialog";
import { writeTextFile, BaseDirectory } from "@tauri-apps/plugin-fs";

export function SidebarContent() {
  const [lang] = useAppContext()?.lang!;
  const [, setJasonMemoObjects] = useAppContext()?.jasonMemoObjects!;
  const [, setJasonMemoValues] = useAppContext()?.jasonMemoValues!;

  const [jason, setJason] = useAppContext()?.jason!;

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
    "Save As",
    "Clear",
    "Settings",
  ] as const;

  const executeAction = (action: (typeof buttonsTexts)[number]) => {
    const actions: Record<typeof action, () => void> = {
      //TODO Implement actions
      "Create New": () => {
        const $jasonDialogCreateNew = document.getElementById(
          "jasonDialogCreateNew"
        )!;

        $jasonDialogCreateNew.click();

        const $openSidebarBtn = document.getElementById("openSidebarBtn")!;
        $openSidebarBtn.click();
      },
      "Load File": async () => {
        const $jasonFileInput = document.getElementById(
          "jasonFileInput"
        ) as HTMLInputElement;
        $jasonFileInput.click();
      },
      "Paste Text": () => {},
      "Save As": async () => {
        const path = await save({
          defaultPath: `${translateTo(lang, "file")}.json`,

          filters: [
            {
              name: "json",
              extensions: ["json", "jsonc", "json5"],
            },
          ],
        });

        // console.log(path);
        if (path !== null)
          await writeTextFile(
            path,
            JSON.stringify(jason, null, 2).concat("\n"),
            {
              baseDir: BaseDirectory.AppConfig,
            }
          );
      },
      Clear: () => {
         const $openSidebarBtn = document.getElementById("openSidebarBtn")!;
         $openSidebarBtn.click();
         
        const $jasonAlertDialog = document.getElementById("jasonAlertDialog")!;
        $jasonAlertDialog.click();
      },
      Settings: () => {},
    };

    actions[action]();
  };

  function getIconName(name: (typeof buttonsTexts)[number]): IconName {
    const dict = {
      "Create New": "Plus",
      "Load File": "LoadFile",
      "Paste Text": "Paste",
      "Save As": "Download",
      Settings: "Settings",
      Clear: "Trash",
    } as const;

    return dict[name] ?? null;
  }

  const handleJasonFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return;
    const files = e.target.files;
    if (!files) return;

    const file = files[0];

    if (getWorkerType(file.name) === null) {
      alert("That's not a valid file!");
      return;
    }

    const worker = new Worker(
      new URL("../workers/fileWorker.ts", import.meta.url),
      {
        type: "module",
        name: "file-parser",
      }
    );

    worker.postMessage({ file, type: getWorkerType(file.name) });

    worker.onmessage = (e) => {
      if (e.data.error) {
        alert(e.data.error);
        worker.terminate();
        return;
      }
      setJasonMemoObjects(new Map());
      setJasonMemoValues(new Map());

      setJason(e.data.json);

      setTimeout(refreshTree, 20);

      worker.terminate();
    };

    worker.onerror = (error) => {
      alert(`Worker error: ${error.message}`);
      worker.terminate();
    };
  };

  return (
    <Sheet>
      <SheetTrigger
        className="ml-auto aspect-square h-[100%] m-0 box-border! p-0"
        id="openSidebarBtn"
      >
        <GetIcon name="Burger" className="h-[1.2rem] w-[1.2rem] text-white" />
      </SheetTrigger>
      <SheetContent key={"sheet-content"}>
        <SheetHeader key={"sheet-header"}>
          <SheetTitle className="text-2xl" key={"sheet-title"}>
            {translateTo(lang, "Options")}
          </SheetTitle>
          <SheetDescription key={"sheetDesc"}>
            <Input
              aria-hidden="true"
              type="file"
              // accept="application/json, text/xml, text/html, text/csv, .toml, application/x-toml"
              id="jasonFileInput"
              className="hidden"
              onChange={handleJasonFileInput}
            />

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
                  className="h-[3rem] w-[100%] flex mt-3 mb-3"
                  onClick={() => executeAction(text)}
                >
                  <GetIcon
                    name={getIconName(text)}
                    className="w-[1rem]! h-[1rem]!"
                  />
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
