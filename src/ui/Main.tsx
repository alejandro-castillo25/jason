import { invoke } from "@tauri-apps/api/core";
import { AppContext, useAppContext } from "@/AppContext";
import { memo, useContext, useEffect, useRef, useState } from "react";

import { GetIcon } from "./Icons";
import { Button } from "@/components/ui/button";

import {
  isValidPointNotation,
  evalFormat,
  getPathChild,
  unwrapIndex,
  isValidURL,
  itemSizeFormatter,
  editObjectValue,
} from "./util";

import type { Item } from "./util";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";

import { HandleJason2 } from "./HandleJason";
import { Lang, translateTo } from "./lang";

import { AddItemDialog } from "./AddItemDialog";
import { Settings } from "./Settings";

const Jason = memo(
  ({
    jason,
    lang,
    jasonScreen,
  }: {
    jason: any;
    lang: Lang;
    jasonScreen: "main" | "settings";
  }) => {
    return (
      <>
        <Settings show={jasonScreen === "settings"} />
        {jason !== null ? (
          <HandleJason2 data={jason} />
        ) : (
          jasonScreen === "main" && (
            <section className="h-full w-full bg-(--background) grid place-items-center p-2">
              <div>
                <h2 className="text-[1.3rem] text-center opacity-45 text-pretty">
                  {translateTo(
                    lang,
                    "Please create a workflow or load a file to begin editing its contents"
                  )}
                </h2>
              </div>
            </section>
          )
        )}
      </>
    );
  }
);

export type EditItemType = "object" | "array" | "value";

export type ItemValueType =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "object"
  | "array";

export interface JasonItem {
  key?: string;
  value: any;
  path: string;
  array?: boolean;
}

export function Main() {
  const [dialogType, setDialogType] = useState<EditItemType>("object");
  const [isRoot, setIsRoot] = useState<boolean>(false);

  const [dialogTitle, setDialogTitle] = useState<string>("Edit Object");

  const [dialogAddItemType, setDialogAddItemType] =
    useState<EditItemType>("object");

  const [dialogAddItemEdit, setDialogAddItemEdit] = useState<boolean>(false);
  const [dialogAddItemOldKey, setDialogAddItemOldKey] = useState<string>("");
  const [dialogAddItemValueType, setDialogAddItemValueType] =
    useState<ItemValueType>("string");

  const [dialogAddItemParentType, setDialogAddItemParentType] = useState<
    "object" | "array"
  >("object");

  const [dialogAddItemValue, setDialogAddItemValue] = useState<string>("");
  const [dialogObjectSize, setDialogObjectSize] = useState<number>(0);

  const [jason0, setJason] = useContext(AppContext)?.jason!;
  const [jasonScreen] = useAppContext()?.jasonScreen!;

  const [lang] = useContext(AppContext)?.lang!;

  const optionsDialogRef = useRef<HTMLElement | null>(null);
  const addItemDialogRef = useRef<HTMLElement | null>(null);

  const { jasonMemoObjects, jasonMemoValues } = useAppContext()!;

  const enableRefreshTree = () => {
    const enableRefreshTreeEvent = new CustomEvent("enableRefreshTree", {
      detail: {
        message: "Enable Refresh Tree",
      },
      cancelable: true,
      bubbles: true,
      composed: true,
    });

    document.dispatchEvent(enableRefreshTreeEvent);
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

  function addJasonItem({ key, value, path, array = false }: JasonItem) {
    const oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    if (!array) {
      eval(
        `oldJason${path.substring(1)}.${
          isValidPointNotation(key!) ? `.${key}` : `["${key}"]`
        } = ${evalFormat(value)}`
      );
    } else {
      eval(`oldJason${path.substring(1)}.push(${evalFormat(value)})`);
    }
    setJason(
      !Array.isArray(jason0) ? { ...oldJason } : [...(oldJason as any[])]
    );
  }

  interface JasonItemRemove {
    path: string;
    arrayElement?: boolean;
  }

  function removeJasonItem({ path, arrayElement = false }: JasonItemRemove) {
    let oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    const deletePath = (path: string) => {
      if (!jasonMemoObjects.current.delete(path))
        jasonMemoValues.current.delete(path);
    };

    if (!arrayElement) {
      eval(`delete oldJason${path.substring(1)};`);
      deletePath(path);
    } else {
      eval(`delete oldJason${path.substring(1)};`);

      eval(
        `oldJason${path.substring(
          1,
          path.length - getPathChild(path).length
        )} = oldJason${path.substring(
          1,
          path.length - getPathChild(path).length
        )}.filter(el => el !== undefined);`
      );

      deletePath(path);
    }

    setJason(
      !Array.isArray(jason0) ? { ...oldJason } : [...(oldJason as any[])]
    );
  }

  function clearJasonItem({
    path,
    isArray = false,
  }: {
    path: string;
    isArray: boolean;
  }) {
    try {
      let oldJason = !Array.isArray(jason0)
        ? { ...jason0 }
        : [...(jason0 as Array<any>)];

      eval(`oldJason${path.substring(1)} = ${!isArray ? "{}" : "[]"}`);

      setJason(
        !Array.isArray(jason0) ? { ...oldJason } : [...(oldJason as any[])]
      );
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    optionsDialogRef.current = document.getElementById("itemOptionsDialog");
    addItemDialogRef.current = document.getElementById("addItemDialog");
  }, []);

  return (
    <>
      <main className="min-w-[100vw] flex-grow box-border m-0 overflow-auto">
        <Button
          className="hidden"
          id="optionDialogEditBtn"
          onClick={() => {
            const parentType = optionsDialogRef.current!.getAttribute(
              "data-parent-type"
            ) as "object" | "array";

            setDialogAddItemParentType(parentType);

            const dataType = optionsDialogRef.current!.getAttribute(
              "data-type"
            )! as EditItemType;
            setDialogAddItemType(dataType);

            const dataExactType = optionsDialogRef.current!.getAttribute(
              "data-exact-type"
            )! as ItemValueType;
            setDialogAddItemValueType(dataExactType);

            const dataValue =
              optionsDialogRef.current!.getAttribute("data-value")!;

            setDialogAddItemValue(dataValue);

            setDialogAddItemEdit(true);

            const path = optionsDialogRef.current!.getAttribute("data-path")!;
            setDialogAddItemOldKey(getPathChild(path));

            addItemDialogRef.current!.click();
          }}
        ></Button>
        <AddItemDialog
          jason0={jason0}
          setJason0={setJason}
          dialogAddItemTypeProp={dialogAddItemType}
          dialogOptionsType={dialogType}
          dialogAddItemEdit={dialogAddItemEdit}
          dialogAddItemOldKey={
            isValidPointNotation(dialogAddItemOldKey)
              ? dialogAddItemOldKey
              : unwrapIndex(dialogAddItemOldKey as Item)
          }
          dialogAddItemValueType={dialogAddItemValueType}
          dialogAddItemValue={dialogAddItemValue}
          dialogAddItemParentType={dialogAddItemParentType}
        />

        <Dialog
          onOpenChange={(open) => {
            if (!open) {
              //TODO fix this!
              // const path = optionsDialogRef.current!.getAttribute("data-path")!;
              // const previousItem = document.getElementById(path)!;
              // document
              //   .getElementById("root")!
              //   .setAttribute("aria-hidden", "false");
              // previousItem.focus();
            }
          }}
        >
          <DialogTrigger
            aria-hidden="true"
            tabIndex={-1}
            id="itemOptionsDialog"
            className="hidden"
            data-path={""}
            data-type={""}
            data-value={""}
            data-exact-type={""}
            data-object-size={0}
            autoFocus={false}
            onClick={() => {
              const objType = optionsDialogRef.current!.getAttribute(
                "data-type"
              ) as EditItemType;
              const isRootData =
                optionsDialogRef.current!.getAttribute("data-root")!;
              const parentType = optionsDialogRef.current!.getAttribute(
                "data-parent-type"
              ) as "object" | "array";

              const objectSize = optionsDialogRef.current!.getAttribute(
                "data-object-size"
              ) as EditItemType;
              setDialogObjectSize(Number.parseInt(objectSize));

              setIsRoot(isRootData === "true");

              const dataExactType = optionsDialogRef.current!.getAttribute(
                "data-exact-type"
              )! as ItemValueType;

              setDialogAddItemValueType(dataExactType);

              setDialogAddItemParentType(parentType);
              setDialogType(objType);

              const dataValue =
                optionsDialogRef.current!.getAttribute("data-value")!;

              setDialogAddItemValue(dataValue);

              setDialogTitle(
                isRootData === "true"
                  ? "Root"
                  : objType === "object"
                  ? "Object"
                  : objType === "array"
                  ? "Array"
                  : "Value"
              );
            }}
          ></DialogTrigger>
          <DialogContent aria-describedby={undefined}>
            <DialogHeader className="relative">
              {(dialogType === "object" ||
                dialogType === "array" ||
                dialogAddItemValueType === "string") && (
                <Badge
                  variant="outline"
                  className={`absolute top-[-0.55rem] left-[-0.55rem]
                  ${
                    dialogAddItemValueType === "string" ? "text-green-400" : ""
                  } `}
                >
                  <GetIcon name="Length" className="w-[1.1rem]! h-[1.1rem]!" />

                  {itemSizeFormatter(lang).format(dialogObjectSize)}
                </Badge>
              )}

              <DialogTitle className="text-2xl flex items-center justify-center mb-3">
                {translateTo(lang, dialogTitle)}
                {dialogType === "object" ? (
                  <GetIcon
                    name="ObjectIcon"
                    className="inline ml-2 w-[2rem] h-[2rem]"
                  />
                ) : dialogType === "array" ? (
                  <GetIcon
                    name="ArrayIcon"
                    className="inline ml-2 w-[2rem] h-[2rem]"
                  />
                ) : (
                  <GetIcon
                    name="Value"
                    className="inline ml-2 w-[2rem] h-[2rem]"
                  />
                )}
              </DialogTitle>
              <section className="flex flex-col gap-3.5 my-1.5">
                {!isRoot &&
                  !(
                    dialogAddItemParentType === "array" &&
                    (dialogType === "object" || dialogType === "array")
                  ) && (
                    <Button
                      onClick={() => {
                        const dataType = optionsDialogRef.current!.getAttribute(
                          "data-type"
                        )! as EditItemType;
                        setDialogAddItemType(dataType);

                        const dataExactType =
                          optionsDialogRef.current!.getAttribute(
                            "data-exact-type"
                          )! as ItemValueType;
                        setDialogAddItemValueType(dataExactType);

                        const dataValue =
                          optionsDialogRef.current!.getAttribute("data-value")!;

                        setDialogAddItemValue(dataValue);

                        setDialogAddItemEdit(true);

                        const path =
                          optionsDialogRef.current!.getAttribute("data-path")!;
                        setDialogAddItemOldKey(getPathChild(path));

                        optionsDialogRef.current!.click();
                        addItemDialogRef.current!.click();
                      }}
                    >
                      <GetIcon name="Edit" className="w-[1rem]! h-[1rem]!" />
                      {translateTo(lang, "Edit")}
                    </Button>
                  )}

                {dialogType !== "value" && (
                  <>
                    <section className="flex flex-row gap-3.5 flex-wrap">
                      <Button
                        className="flex-[1]"
                        variant="default"
                        onClick={() => {
                          setDialogAddItemEdit(false);

                          if (dialogType === "array") {
                            const path =
                              optionsDialogRef.current!.getAttribute(
                                "data-path"
                              )!;

                            enableRefreshTree();

                            addJasonItem({
                              path,
                              array: true,
                              value: {},
                              key: "",
                            });

                            setTimeout(refreshTree, 20);

                            optionsDialogRef.current!.click();
                            return;
                          }
                          setDialogAddItemType("object");

                          addItemDialogRef.current!.click();
                          optionsDialogRef.current!.click();
                        }}
                      >
                        <GetIcon
                          name="ObjectIcon"
                          className="w-[1rem]! h-[1rem]!"
                        />
                        {translateTo(lang, "Add Object")}
                      </Button>
                      <Button
                        className="flex-[1]"
                        variant="default"
                        onClick={() => {
                          setDialogAddItemEdit(false);

                          if (dialogType === "array") {
                            const path =
                              optionsDialogRef.current!.getAttribute(
                                "data-path"
                              )!;

                            enableRefreshTree();

                            addJasonItem({
                              path,
                              array: true,
                              value: [],
                              key: "",
                            });

                            setTimeout(refreshTree, 20);

                            optionsDialogRef.current!.click();
                            return;
                          }
                          setDialogAddItemType("array");

                          addItemDialogRef.current!.click();
                          optionsDialogRef.current!.click();
                        }}
                      >
                        <GetIcon
                          name="ArrayIcon"
                          className="w-[1rem]! h-[1rem]!"
                        />
                        {translateTo(lang, "Add Array")}
                      </Button>
                    </section>

                    <Button
                      variant="default"
                      onClick={() => {
                        setDialogAddItemEdit(false);

                        setDialogAddItemType("value");

                        const dataExactType =
                          optionsDialogRef.current!.getAttribute(
                            "data-exact-type"
                          )! as ItemValueType;
                        setDialogAddItemValueType(dataExactType);

                        optionsDialogRef.current!.click();
                        addItemDialogRef.current!.click();
                      }}
                    >
                      <GetIcon name="Value" className="w-[1rem]! h-[1rem]!" />
                      {translateTo(lang, "Add Value")}
                    </Button>
                    {/* <Button
                      variant="secondary"
                      onClick={() => {
                        setDialogAddItemEdit(false);
                      }}
                    >
                      <GetIcon name="FromText" className="w-[1rem]! h-[1rem]!" />
                      {translateTo(lang, "Add from Text")}
                    </Button> */}
                  </>
                )}

                {dialogType === "value" && isValidURL(dialogAddItemValue) && (
                  <Button
                    variant="secondary"
                    onClick={async () => {
                      await invoke("open_url", {
                        url: dialogAddItemValue.trim(),
                      });
                      optionsDialogRef.current!.click();
                    }}
                  >
                    <GetIcon name="Link" className="w-[1rem]! h-[1rem]!" />
                    {translateTo(lang, "Open URL")}
                  </Button>
                )}

                <section className="flex flex-row gap-3.5 flex-wrap empty:hidden">
                  {!isRoot && (
                    <Button
                      className="flex-[1]"
                      variant="secondary"
                      onClick={async () => {
                        const path =
                          optionsDialogRef.current!.getAttribute("data-path")!;

                        await invoke("copy_to_clipboard", {
                          text: path.substring(1),
                        });
                        optionsDialogRef.current!.click();
                      }}
                    >
                      <GetIcon name="Copy" className="w-[1rem]! h-[1rem]!" />
                      {translateTo(lang, "Copy Path")}
                    </Button>
                  )}
                  {dialogType === "value" && (
                    <Button
                      className="flex-[1]"
                      variant="secondary"
                      onClick={async () => {
                        const value =
                          optionsDialogRef.current!.getAttribute("data-value")!;

                        await invoke("copy_to_clipboard", {
                          text: value,
                        });
                        optionsDialogRef.current!.click();
                      }}
                    >
                      <GetIcon name="Copy" className="w-[1rem]! h-[1rem]!" />
                      {translateTo(lang, "Copy Value")}
                    </Button>
                  )}
                </section>

                <section className="flex flex-row gap-3.5 flex-wrap empty:hidden">
                  {dialogType !== "value" && dialogObjectSize > 0 && (
                    <Button
                      className="flex-[1]"
                      variant="destructive"
                      onClick={() => {
                        optionsDialogRef.current!.click();
                        const path =
                          optionsDialogRef.current!.getAttribute("data-path")!;
                        const dataType =
                          optionsDialogRef.current!.getAttribute(
                            "data-exact-type"
                          )!;

                        clearJasonItem({
                          path,
                          isArray: dataType === "array",
                        });

                        setTimeout(refreshTree, 15);
                      }}
                    >
                      <GetIcon name="Erase" className="w-[1rem]! h-[1rem]!" />
                      {translateTo(lang, "Clear")}
                    </Button>
                  )}
                  {!isRoot && (
                    <Button
                      className="flex-[1]"
                      variant="destructive"
                      onClick={() => {
                        optionsDialogRef.current!.click();

                        const path =
                          optionsDialogRef.current!.getAttribute("data-path")!;
                        const arrayElement = /^\[\d+\]$/g.test(
                          getPathChild(path)
                        );

                        removeJasonItem({
                          path,
                          arrayElement,
                        });

                        jasonMemoObjects.current.delete(path);
                        jasonMemoValues.current.delete(path);

                        //TODO take a look at performance
                        setTimeout(refreshTree, 15);
                      }}
                    >
                      <GetIcon name="Trash" className="w-[1rem]! h-[1rem]!" />
                      {translateTo(lang, "Remove")}
                    </Button>
                  )}
                </section>
              </section>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Jason jason={jason0} lang={lang} jasonScreen={jasonScreen} />
      </main>
    </>
  );
}
