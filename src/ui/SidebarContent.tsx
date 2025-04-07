import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

import { GetIcon } from "./Icons";
import { translateTo } from "./lang";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useAppContext } from "../AppContext";

import { getFilenameNoExtension, getFileType, SupportedFiles } from "./util";

import { open, save } from "@tauri-apps/plugin-dialog";
import {
  readTextFile,
  writeTextFile,
  BaseDirectory,
} from "@tauri-apps/plugin-fs";
import { useMemo, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import JSON5 from "json5";
import TOML from "smol-toml";
import CSV from "papaparse";
import YAML from "yaml";
import { XMLBuilder, XMLParser } from "fast-xml-parser";

// import {
//   getCsvMsgs,
//   getJsonMsgs,
//   getTomlMsgs,
//   getXmlMsgs,
//   getYamlMsgs,
// } from "./fileTypeMgs";

export function SidebarContent() {
  const [lang] = useAppContext()?.lang!;
  const OS = useAppContext()?.OS;
  const jasonMemoObjects = useAppContext()?.jasonMemoObjects!;
  const [isFullscreen] = useAppContext()?.isFullscreen!;
  const jasonMemoValues = useAppContext()?.jasonMemoValues!;
  const [jasonFilePath, setJasonFilePath] = useAppContext()?.jasonFilePath!;

  const [jasonIsNone, setJasonIsNone] = useAppContext()?.jasonIsNone!;

  const [jason, setJason] = useAppContext()?.jason!;

  const [jasonScreen, setJasonScreen] = useAppContext()?.jasonScreen!;
  const [jasonFormatFile] = useAppContext()?.jasonFormatFile!;

  type FileType = "json" | "toml" | "xml" | "csv" | "yaml";
  const [fileType, setFileType] = useState<FileType>("json");

  const [filename, setFileName] = useState<string | null>(null);

  const getJsonFromFileContents = (
    result: string,
    type: SupportedFiles
  ): any => {
    try {
      let json: any;

      if (type === "json") {
        json = JSON5.parse(result as string);
      } else if (type === "toml") json = TOML.parse(result as string);
      else if (type === "csv")
        json = CSV.parse(result as string, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
        }).data;
      else if (type === "xml") {
        function replaceNullStr(obj: any) {
          if (typeof obj === "object" && obj !== null) {
            if (Array.isArray(obj))
              for (let i = 0; i < obj.length; i++) {
                const value = obj[i];
                if (value === "__NULL__") obj[i] = null as any;
                else replaceNullStr(value);
              }
            else
              for (const key in obj) {
                const value = obj[key];
                if (value === "__NULL__") obj[key] = null as any;
                else replaceNullStr(value);
              }
          }
        }

        const newResult = (result as string).replace(
          /\<(\w+)\s*?\/\>/g,
          "<$1>__NULL__</$1>"
        );

        //?Yes, this AMAZING parser does't support null handling (it would if it could allow me to set null or work with <tag/>'s)
        const xmlParser: XMLParser = new XMLParser({
          ignoreAttributes: false,
          allowBooleanAttributes: true,
          ignoreDeclaration: true,
          attributeNamePrefix: "-",

          htmlEntities: false,
        });

        json = xmlParser.parse(newResult);
        replaceNullStr(json);

        if (json?.root !== undefined && Object.keys(json).length === 1) {
          json = json.root;
        }
      } else if (type === "yaml") {
        //! Multiple keys will be overridden
        json = YAML.parse(result, {
          uniqueKeys: false,
        });
      }

      return json;
    } catch (error: any) {
      throw new Error(error);
    }
  };

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

  const EXTENSIONS: Record<FileType, Array<string>> = useMemo(
    () =>
      ({
        json: ["json", "jsonc", "json5"],
        toml: ["toml"],
        xml: ["xml", "svg", "html", "htm", "xhtml"],
        csv: ["csv"],
        yaml: ["yaml", "yml"],
      } as const),
    []
  );

  const getFileContents = (): string => {
    let fileContents: string = "";

    if (fileType === "json")
      fileContents = JSON.stringify(
        jason,
        null,
        jasonFormatFile ? 2 : 0
      ).concat(jasonFormatFile ? "\n" : "");
    else if (fileType === "toml") {
      let isArray = Array.isArray(jason);

      fileContents = TOML.stringify(!isArray ? jason : { jason }).concat("\n");
    } else if (fileType === "csv")
      fileContents = CSV.unparse(Array.isArray(jason) ? jason : [jason], {
        header: true,
        skipEmptyLines: true,
      }).concat(jasonFormatFile ? "\n" : "");
    else if (fileType === "yaml") fileContents = YAML.stringify(jason);
    else if (fileType === "xml") {
      const builder: XMLBuilder = new XMLBuilder({
        attributeNamePrefix: "-",
        suppressBooleanAttributes: false,
        ignoreAttributes: false,
        format: jasonFormatFile,
      });

      fileContents = builder.build(jason);

      //? Wrap it between a root tag if it's more than one item
      const multipleNodes: boolean = Object.keys(jason!).length > 1;

      if (multipleNodes) {
        const newLine = jasonFormatFile ? "\n" : "";
        fileContents = `<root>${jasonFormatFile ? "\n  " : ""}${fileContents
          .trimEnd()
          .replace(/\n/g, "\n  ")}${newLine}</root>${newLine}`;
      }

      fileContents =
        `<?xml version="1.0" encoding="UTF-8"?>${jasonFormatFile ? "\n" : ""}` +
        fileContents;
    }
    return fileContents;
  };

  const buttonsTexts = [
    "Create new",
    "Load file",
    "Save",
    "Save as",
    "Settings",
    "Close",
  ] as const;

  const executeAction = (action: (typeof buttonsTexts)[number]) => {
    const actions: Record<typeof action, () => void> = {
      //TODO Implement actions
      "Create new": () => {
        const $jasonDialogCreateNew = document.getElementById(
          "jasonDialogCreateNew"
        )!;

        $jasonDialogCreateNew.click();

        const $openSidebarBtn = document.getElementById("openSidebarBtn")!;
        $openSidebarBtn.click();
      },
      "Load file": async () => {
        // const $jasonFileInput = document.getElementById(
        //   "jasonFileInput"
        // ) as HTMLInputElement;
        // $jasonFileInput.click();

        try {
          const path = await open({
            filters: [
              {
                name: translateTo(lang, "Allowed files"),
                extensions: [
                  ...EXTENSIONS.json,
                  ...EXTENSIONS.toml,
                  ...EXTENSIONS.xml,
                  ...EXTENSIONS.yaml,
                  ...EXTENSIONS.csv,
                ],
              },
            ],

            multiple: false,
            directory: false,
          });

          //! const path: string | null = await invoke("open_file", {});

          // console.log(path);

          if (path === null) return;

          const fileContents = await readTextFile(path, {
            baseDir: BaseDirectory.AppConfig,
          });

          const file = path.split(/[\\/]/g).pop() ?? "";

          if (getFileType(file) === null) {
            alert("That file is not supported!");
            return;
          }

          const contents = getJsonFromFileContents(
            fileContents,
            getFileType(file)!
          );

          jasonMemoObjects.current = new Map();
          jasonMemoValues.current = new Map();

          setJason(contents);
          setFileType(getFileType(file)!);
          setJasonFilePath(path);

          setJasonIsNone(false);

          setFileName(getFilenameNoExtension(file));

          setTimeout(refreshTree, 20);
        } catch (e: any) {
          alert(`There was an error openning the file!\n${e}`);
        }
      },
      "Save as": async () => {
        try {
          const path = await save({
            defaultPath: `${filename ?? translateTo(lang, "file")}.${fileType}`,

            filters: [
              {
                name: fileType,
                extensions: EXTENSIONS[fileType],
              },
            ],
          });

          if (path === null) return;

          const fileContents: string = getFileContents();

          await writeTextFile(path, fileContents, {
            baseDir: BaseDirectory.AppData,
          });

          setJasonFilePath(path);
        } catch (e: any) {
          alert(e);
        }
      },
      Settings() {
        setJasonScreen("settings");
      },
      Close() {
        setJason(null);
        jasonMemoObjects.current = new Map();
        jasonMemoValues.current = new Map();

        setFileType("json");
        setJasonFilePath(null);
        setFileName(null);

        setJasonIsNone(true);
      },
      Save: async () => {
        const $saveBtn = document.getElementById(
          "saveBtn"
        ) as HTMLButtonElement;

        $saveBtn.disabled = true;

        setTimeout(() => {
          $saveBtn.disabled = false;
        }, 800);

        //? jasonFilePath will never be null here

        console.log("Saving to...", jasonFilePath);
        const fileContents = getFileContents();

        try {
          await writeTextFile(jasonFilePath!, fileContents, {
            baseDir: BaseDirectory.AppData,
            create: true,
          });
        } catch (e: any) {
          alert(e);
        }
      },
    };

    actions[action]();
  };

  return (
    <Sheet>
      {jasonScreen === "main" && (
        <SheetTrigger
          data-tauri-drag-region-exclude
          className={`ml-auto aspect-square h-[100%] m-0 box-border! p-0`}
          id="openSidebarBtn"
        >
          <GetIcon
            data-tauri-drag-region-exclude
            name="Burger"
            className="h-[1.2rem] w-[1.2rem] text-(--title-color)"
          />
        </SheetTrigger>
      )}
      <SheetContent
        key="sheet-content"
        className={`overflow-auto ${
          OS?.current !== "android" && !isFullscreen
            ? "h-[calc(100%_-25px)] top-[25px]"
            : ""
        } `}
        style={{
          scrollbarWidth: "none",
        }}
      >
        <SheetHeader key="sheet-header">
          <SheetTitle className="text-2xl" key={"sheet-title"}>
            {translateTo(lang, "Options")}
          </SheetTitle>
          <SheetDescription key="sheetDesc" className="sidebar-content">
            <Button
              variant="default"
              className="h-[3rem] w-[100%] flex mt-3 mb-3"
              onClick={() => executeAction("Create new")}
            >
              <GetIcon name="Plus" className="w-[1rem]! h-[1rem]!" />
              <span className="mr-auto">{translateTo(lang, "Create new")}</span>
            </Button>

            <Button
              variant="default"
              className="h-[3rem] w-[100%] flex mt-3 mb-3"
              onClick={() => executeAction("Load file")}
            >
              <GetIcon name="LoadFile" className="w-[1rem]! h-[1rem]!" />
              <span className="mr-auto">{translateTo(lang, "Load file")}</span>
            </Button>

            <Button
              id="saveBtn"
              disabled={jasonFilePath === null}
              variant="secondary"
              className={`h-[3rem] w-[100%] flex mt-3 mb-3 ${
                (jasonFilePath === null || OS?.current === "android") &&
                "hidden"
              }`}
              onClick={() => executeAction("Save")}
            >
              <GetIcon name="Save" className="w-[1rem]! h-[1rem]!" />
              <span className="mr-auto">{translateTo(lang, "Save")}</span>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  disabled={jasonIsNone}
                  variant="secondary"
                  className={`h-[3rem] w-[100%] flex mt-3 mb-3 ${
                    jasonIsNone && "hidden"
                  }`}
                >
                  <GetIcon name="Save" className="w-[1rem]! h-[1rem]!" />
                  <span className="mr-auto">
                    {translateTo(lang, "Save as")}
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="min-h-[20rem] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="text-2xl self-start">
                    {" "}
                    {translateTo(lang, "File Type")} :
                  </DialogTitle>
                  <DialogDescription className="self-start">
                    {translateTo(lang, "Choose the file format")}
                  </DialogDescription>
                </DialogHeader>

                <Tabs
                  defaultValue={fileType}
                  className="flex-[1] flex items-center flex-col"
                >
                  <TabsList className="bg-transparent flex-[1] flex gap-1 sm:gap-3 w-full">
                    <TabsTrigger value="toml" asChild>
                      <Button
                        variant={fileType !== "toml" ? "outline" : "secondary"}
                        size="icon"
                        className={`group relative w-[4rem] h-[4rem] min-h-[3rem] sm:w-[5rem] sm:h-[5rem] ${
                          fileType === "toml"
                            ? "border-red-400 border-2 bg-(--secondary)!"
                            : ""
                        }`}
                        onFocus={() => {
                          if (fileType !== "toml") setFileType("toml");
                        }}
                      >
                        <GetIcon
                          name="File"
                          className="h-full! w-full! text-red-400"
                        />
                        <h3
                          className={`text-red-400 absolute bottom-0 ${
                            fileType === "toml"
                              ? "bg-(--secondary)"
                              : "bg-(--background)"
                          } group-hover:bg-(--secondary) w-[90%]`}
                        >
                          TOML
                        </h3>
                      </Button>
                    </TabsTrigger>
                    <TabsTrigger value="xml" asChild>
                      <Button
                        variant={fileType !== "xml" ? "outline" : "secondary"}
                        size="icon"
                        className={`group relative w-[4rem] h-[4rem] min-h-[3rem] sm:w-[5rem] sm:h-[5rem] ${
                          fileType === "xml"
                            ? "border-green-400 border-2 bg-(--secondary)!"
                            : ""
                        }`}
                        onFocus={() => {
                          if (fileType !== "xml") setFileType("xml");
                        }}
                      >
                        <GetIcon
                          name="File"
                          className="h-full! w-full! text-green-400"
                        />

                        <h3
                          className={`text-green-400 absolute bottom-0 ${
                            fileType === "xml"
                              ? "bg-(--secondary)"
                              : "bg-(--background)"
                          } group-hover:bg-(--secondary) w-[90%]`}
                        >
                          XML
                        </h3>
                      </Button>
                    </TabsTrigger>
                    <TabsTrigger value="json" asChild>
                      <Button
                        variant={fileType !== "json" ? "outline" : "secondary"}
                        size="icon"
                        className={`group relative w-[4rem] h-[4rem] min-h-[3rem] sm:w-[5rem] sm:h-[5rem] ${
                          fileType === "json"
                            ? "border-orange-400 border-2 bg-(--secondary)!"
                            : ""
                        }`}
                        onFocus={() => {
                          if (fileType !== "json") setFileType("json");
                        }}
                      >
                        <GetIcon
                          name="File"
                          className="h-full! w-full! text-orange-400"
                        />
                        <h3
                          className={`text-orange-400 absolute bottom-0 ${
                            fileType === "json"
                              ? "bg-(--secondary)"
                              : "bg-(--background)"
                          } group-hover:bg-(--secondary) w-[90%]`}
                        >
                          JSON
                        </h3>
                      </Button>
                    </TabsTrigger>
                    <TabsTrigger value="csv" asChild>
                      <Button
                        variant={fileType !== "csv" ? "outline" : "secondary"}
                        size="icon"
                        className={`group relative w-[4rem] h-[4rem]  min-h-[3rem] sm:w-[5rem] sm:h-[5rem] ${
                          fileType === "csv"
                            ? "border-green-500 border-2 bg-(--secondary)!"
                            : ""
                        }`}
                        onFocus={() => {
                          if (fileType !== "csv") setFileType("csv");
                        }}
                      >
                        <GetIcon
                          name="File"
                          className="h-full! w-full! text-green-500"
                        />
                        <h3
                          className={`text-green-500 absolute bottom-0 ${
                            fileType === "csv"
                              ? "bg-(--secondary)"
                              : "bg-(--background)"
                          } group-hover:bg-(--secondary) w-[90%]`}
                        >
                          CSV
                        </h3>
                      </Button>
                    </TabsTrigger>

                    <TabsTrigger value="yaml" asChild>
                      <Button
                        variant={fileType !== "yaml" ? "outline" : "secondary"}
                        size="icon"
                        className={`group relative w-[4rem] h-[4rem]  min-h-[3rem] sm:w-[5rem] sm:h-[5rem] ${
                          fileType === "yaml"
                            ? "border-yellow-500 border-2 bg-(--secondary)!"
                            : ""
                        }`}
                        onFocus={() => {
                          if (fileType !== "yaml") setFileType("yaml");
                        }}
                      >
                        <GetIcon
                          name="File"
                          className="h-full! w-full! text-yellow-500"
                        />
                        <h3
                          className={`text-yellow-500 absolute bottom-0 ${
                            fileType === "yaml"
                              ? "bg-(--secondary)"
                              : "bg-(--background)"
                          } group-hover:bg-(--secondary) w-[90%]`}
                        >
                          YAML
                        </h3>
                      </Button>
                    </TabsTrigger>
                  </TabsList>

                  {/* <TabsContent
                    value="json"
                    className="file-type-msg flex-[1]"
                    tabIndex={-1}
                  >
                    <GetIcon
                      name="Info"
                      className="h-[1rem]! w-[1rem]! absolute top-0.5 right-0.5 opacity-35"
                    />

                    {translateTo(lang, getJsonMsgs())}
                  </TabsContent>
                  <TabsContent
                    value="toml"
                    className="file-type-msg flex-[1]"
                    tabIndex={-1}
                  >
                    <GetIcon
                      name="Info"
                      className="h-[1rem]! w-[1rem]! absolute top-0.5 right-0.5 opacity-35"
                    />

                    {translateTo(lang, getTomlMsgs())}
                  </TabsContent>
                  <TabsContent
                    value="xml"
                    className="file-type-msg flex-[1]"
                    tabIndex={-1}
                  >
                    <GetIcon
                      name="Info"
                      className="h-[1rem]! w-[1rem]! absolute top-0.5 right-0.5 opacity-35"
                    />

                    {translateTo(lang, getXmlMsgs())}
                  </TabsContent>
                  <TabsContent
                    value="csv"
                    className="file-type-msg flex-[1]"
                    tabIndex={-1}
                  >
                    <GetIcon
                      name="Info"
                      className="h-[1rem]! w-[1rem]! absolute top-0.5 right-0.5 opacity-35"
                    />

                    {translateTo(lang, getCsvMsgs())}
                  </TabsContent>
                  <TabsContent
                    value="yaml"
                    className="file-type-msg flex-[1]"
                    tabIndex={-1}
                  >
                    <GetIcon
                      name="Info"
                      className="h-[1rem]! w-[1rem]! absolute top-0.5 right-0.5 opacity-35"
                    />
                    {translateTo(lang, getYamlMsgs())}
                  </TabsContent> */}
                </Tabs>

                <DialogFooter className="flex flex-col items-center">
                  <DialogClose asChild>
                    <Button
                      className="w-[80vw] max-w-[82rem]"
                      onClick={() => {
                        executeAction("Save as");
                      }}
                    >
                      {translateTo(lang, "Save as")}{" "}
                      {fileType !== null && fileType!.toUpperCase()}
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      variant="outline"
                      className="w-[80vw] max-w-[82rem]"
                    >
                      {translateTo(lang, "Cancel")}
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button
              disabled={jasonIsNone}
              // {...{ "aria-hidden": String(jasonIsNone) }} //? Sucks

              variant={"destructive"}
              className={`h-[3rem] w-full flex mt-3 mb-3 ${
                jasonIsNone && "hidden"
              }`}
              onClick={() => executeAction("Close")}
            >
              <GetIcon
                name={jasonFilePath !== null ? "CloseFile" : "Close"}
                className="w-[1rem]! h-[1rem]!"
              />
              <span className="mr-auto">
                {translateTo(
                  lang,
                  jasonFilePath !== null ? "Close file" : "Delete"
                )}
              </span>
            </Button>

            <SheetClose asChild>
              <Button
                variant="outline"
                className="h-[3rem] w-full flex mt-3 mb-3"
                onClick={() => executeAction("Settings")}
              >
                <GetIcon name="Settings" className="w-[1rem]! h-[1rem]!" />
                <span className="mr-auto">{translateTo(lang, "Settings")}</span>
              </Button>
            </SheetClose>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
