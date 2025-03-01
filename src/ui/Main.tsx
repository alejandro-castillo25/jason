import { AppContext } from "@/AppContext";
import { useContext, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GetIcon } from "./Icons";
import { Button } from "@/components/ui/button";

import {
  getPathCurrentParentOnly,
  getObjectLength,
  getMarginLeft,
  isValidPointNotation,
  evalFormat,
} from "./util";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function GetFomattedValue({
  children,
}: {
  children: string | number | boolean | null | undefined;
}) {
  function Format(value: typeof children) {
    // if (typeof value === "string" && value.includes("@"))
    //   return (
    //     <span className="text-purple-400">
    //       {`"`}
    //       {value}
    //       {`"`}
    //     </span>
    //   );

    // if (typeof value === "string" && value.startsWith("$"))
    //   return (
    //     <span className="text-yellow-400">
    //       {`"`}
    //       {value}
    //       {`"`}
    //     </span>
    //   )
    if (typeof value === "string")
      return (
        <span className="text-green-400">
          {`"`}
          {value}
          {`"`}
        </span>
      );

    if (typeof value === "boolean")
      return <span className="text-red-400">{value.toString()}</span>;
    if (typeof value === "number" || typeof value === "bigint")
      return <span className="text-orange-400">{value.toString()}</span>;
    if (value === null) return <span className="text-red-600">{"null"}</span>;
    if (value === undefined)
      return <span className="text-gray-400">{"undefined"}</span>;

    return value;
  }

  return <>{Format(children)}</>;
}

interface HandleJasonProps {
  jason: Record<string, unknown>;
  root?: boolean;
  path?: string;
}

function HandleJason({ jason, root = false, path = " " }: HandleJasonProps) {
  const res: Array<JSX.Element> = [];

  const [jasonBracketGuides, _setJasonBracketGuides] =
    useContext(AppContext)?.jasonBracketGuides!;
  const [jasonItemsOffset, _setJasonItemsOffset] =
    useContext(AppContext)?.jasonItemsOffset!;
  const [jasonPaths, _setJasonPaths] = useContext(AppContext)?.jasonPaths!;

  const [jasonWordWrap, _setJasonWordWrap] =
    useContext(AppContext)?.jasonWordWrap!;

  const [jasonPathsOnlyParent, _setjasonPathsOnlyParent] =
    useContext(AppContext)?.jasonPathsNearPathOnly!;

  type ObjectType = "array" | "object";

  if (root) {
    const objType: ObjectType = Array.isArray(jason) ? "array" : "object";

    return (
      <>
        <AccordionItem
          value={path}
          className="border-b-0 relative"
          key={"root"}
        >
          <AccordionTrigger
            className="jason-item bg-(--secondary) p-1 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80"
            onContextMenu={(e) => {
              e.preventDefault();
              const $optionsDialog: HTMLButtonElement =
                document.querySelector("#itemOptionsDialog")!;

              $optionsDialog.setAttribute("data-type", objType);

              $optionsDialog.setAttribute("data-path", path);

              $optionsDialog.click();
            }}
          >
            <span
              className="m-0 mr-3.5 h-[2.5rem] w-[2.5rem]  aspect-square bg-black/15 hover:bg-black/25 flex items-center justify-center rounded-(--radius)"
              onClick={(e) => {
                e.preventDefault();
                const $dialog: HTMLButtonElement =
                  document.querySelector("#itemOptionsDialog")!;

                $dialog.setAttribute("data-type", objType);
                $dialog.setAttribute("data-path", path);

                $dialog.click();
                // insertJasonItem({
                //   name: "MHM",
                //   path,
                //   array: objType === "array",
                //   value: "Hii",
                // });
              }}
            >
              <GetIcon
                name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                className="scale-75 w-full h-full"
              />
            </span>
          </AccordionTrigger>

          <AccordionContent
            className={`${getMarginLeft(jasonItemsOffset)} w-max p-0 ${
              jasonBracketGuides && "border-l-1"
            } border-l-primary/45 flex flex-col`}
          >
            <HandleJason jason={jason} path={path} />
          </AccordionContent>
        </AccordionItem>
      </>
    );
  }

  for (const [k, v] of Object.entries(jason)) {
    let itemPath = `${path}.${k}`;
    if (Array.isArray(jason)) itemPath = `${path}[${k}]`;
    if (!isValidPointNotation(k)) itemPath = `${path}["${k}"]`;

    if (v === null || typeof v !== "object") {
      res.push(
        <Button
          className={`jason-item ${
            jasonWordWrap ? "max-w-[92vw]" : ""
          } bg-[var(--secondary)] p-2 rounded-(--radius) w-max text-[1rem] mt-0.5 h-auto text-w`}
          variant="secondary"
          key={itemPath}
        >
          <div className="w-full h-full text-left text-wrap">
            <span className="font-semibold">{k}</span>
            <span className="text-gray-300">{" :  "}</span>

            {jasonPaths && (
              <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                {jasonPathsOnlyParent
                  ? getPathCurrentParentOnly(itemPath)
                  : itemPath}{" "}
                <br />
              </i>
            )}

            <span>{<GetFomattedValue>{v as any}</GetFomattedValue>}</span>
          </div>
        </Button>
      );
    } else {
      const objType: ObjectType = Array.isArray(v) ? "array" : "object";
      const isEmpty: boolean = getObjectLength(v) === 0;
      res.push(
        <AccordionItem
          value={itemPath}
          className={`border-b-0 mt-0.5`}
          key={itemPath}
        >
          <AccordionTrigger
            className={`jason-item break-all ${
              jasonWordWrap ? "max-w-[92vw]" : ""
            } flex gap-0 bg-(--secondary) p-1 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80 ${
              isEmpty ? "text-foreground/50" : ""
            } w-max`}
            onContextMenu={(e) => {
              e.preventDefault();
              const $optionsDialog: HTMLButtonElement =
                document.querySelector("#itemOptionsDialog")!;

              $optionsDialog.setAttribute("data-type", objType);

              $optionsDialog.setAttribute("data-path", itemPath);

              $optionsDialog.click();
            }}
          >
            <span
              className="m-0 mr-3.5 h-[2rem] aspect-square bg-black/15 hover:bg-black/25 w-[2rem] flex items-center justify-center rounded-(--radius)"
              onClick={(e) => {
                e.preventDefault();
                const $optionsDialog: HTMLButtonElement =
                  document.querySelector("#itemOptionsDialog")!;

                $optionsDialog.setAttribute("data-type", objType);

                $optionsDialog.setAttribute("data-path", itemPath);

                $optionsDialog.click();
                // insertJasonItem({
                //   name: "MHM",
                //   path: itemPath,
                //   array: objType === "array",
                //   value: "Hii",
                // });
              }}
            >
              <GetIcon
                name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                className="scale-75 w-[1.5rem] h-[1.5rem]"
              />
            </span>
            <span className="mr-auto h-full flex items-center flex-wrap">
              <span>
                {k}
                <span className="text-gray-300">{" :"}</span>
              </span>

              {jasonPaths && (
                <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                  {jasonPathsOnlyParent
                    ? getPathCurrentParentOnly(itemPath)
                    : itemPath}
                </i>
              )}
            </span>
          </AccordionTrigger>
          {!isEmpty && (
            <AccordionContent
              className={` flex flex-col ${getMarginLeft(
                jasonItemsOffset
              )} w-max p-0 ${
                jasonBracketGuides && "border-l-1"
              } border-l-primary/45 group-hover:border-amber-300`}
            >
              <HandleJason jason={v as typeof jason} path={itemPath} />
            </AccordionContent>
          )}
        </AccordionItem>
      );
    }
  }

  return res;
}

function Jason() {
  const [jason, _setJason] = useContext(AppContext)?.jason!;
  const [jasonRoot, _setJasonRoot] = useContext(AppContext)?.jasonRoot!;

  return (
    <>
      <Accordion type="multiple" className="w-max">
        <HandleJason
          jason={jason as Record<string, unknown>}
          root={jasonRoot}
        />
      </Accordion>
    </>
  );
}

type EditItemType =
  | "object"
  | "array"
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "undefined"
  | "value";

interface JasonItem {
  key: string;
  value: any;
  path: string;
  array?: boolean;
}

function AddItemDialog({
  dialogAddItemTypeProp,
}: {
  dialogAddItemTypeProp: EditItemType;
}) {
  const [jason0, setJason] = useContext(AppContext)?.jason!;

  function addJasonItem({ key, value, path, array = false }: JasonItem) {
    const oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    if (!array) {
      eval(
        `oldJason${path.substring(1)}${
          isValidPointNotation(key) ? `.${key}` : `["${key}"]`
        } = ${evalFormat(value)}`
      );
    } else {
      eval(`oldJason${path.substring(1)}.push(${evalFormat(value)})`);
    }
    setJason({ ...oldJason });
  }

  return (
    <Dialog>
      <DialogTrigger
        tabIndex={-1}
        id="addItemDialog"
        className="hidden"
        autoFocus={false}
        onClick={() => {}}
      ></DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            <span>
              {"Add "}
              {dialogAddItemTypeProp === "object"
                ? "Object"
                : dialogAddItemTypeProp === "array"
                ? "Array"
                : "Value"}
            </span>
          </DialogTitle>
          <form
            className="flex flex-col gap-3.5 my-1.5"
            onSubmit={(e) => e.preventDefault()}
          >
            <Label htmlFor="key">Key:</Label>
            <Input
              type="text"
              id="dialogInputKey"
              placeholder="Key"
              autoComplete="off"
              spellCheck={false}
            />
            {dialogAddItemTypeProp === "value" && (
              <>
                <Label htmlFor="value">Value:</Label>

                <Input
                  type="text"
                  id="dialogInputValue"
                  placeholder="Value"
                  autoComplete="off"
                  spellCheck={false}
                />
              </>
            )}
            <DialogClose asChild>
              <Button
                type="submit"
                variant={"default"}
                className="mt-4"
                onClick={(e) => {
                  const $optionsDialog: HTMLButtonElement =
                    document.querySelector("#itemOptionsDialog")!;
                  const $dialogInputKey: HTMLButtonElement =
                    document.querySelector("#dialogInputKey")!;

                  const path = $optionsDialog.getAttribute("data-path")!;
                  const optionDialogType =
                    $optionsDialog.getAttribute("data-type")!;
                  const key = $dialogInputKey.value.trim();

                  if (key.length === 0) {
                    e.preventDefault();

                    return;
                  }

                  if (dialogAddItemTypeProp === "object") {
                    addJasonItem({
                      key,
                      path,
                      value: {},
                    });

                    return;
                  }
                  if (dialogAddItemTypeProp === "array") {
                    addJasonItem({
                      key,
                      path,
                      value: [],
                    });

                    return;
                  }
                  if (dialogAddItemTypeProp === "value") {
                    // alert("VALUE")
                  }
                }}
              >
                Ok
              </Button>
            </DialogClose>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export function Main() {
  const [dialogType, setDialogType] = useState<EditItemType>("object");

  const [dialogTitle, setDialogTitle] = useState<string>("Edit Object");

  const [dialogAddItemType, setDialogAddItemType] =
    useState<EditItemType>("object");

  const [jason0, setJason] = useContext(AppContext)?.jason!;

  function addJasonItem({ key, value, path, array = false }: JasonItem) {
    const oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    if (!array) {
      eval(`oldJason${path.substring(1)}.${key} = ${evalFormat(value)}`);
    } else {
      eval(`oldJason${path.substring(1)}.push(${evalFormat(value)})`);
    }
    setJason({ ...oldJason });
  }

  return (
    <>
      <main className="min-w-[100%] flex-grow p-3">
        <AddItemDialog dialogAddItemTypeProp={dialogAddItemType} />
        <Dialog>
          <DialogTrigger
            tabIndex={-1}
            id="itemOptionsDialog"
            className="hidden"
            data-path={""}
            data-type={""}
            autoFocus={false}
            onClick={() => {
              const $dialog: HTMLButtonElement =
                document.querySelector("#itemOptionsDialog")!;

              const objType = $dialog.getAttribute("data-type") as EditItemType;

              setDialogType(objType);
              setDialogTitle(
                `Edit ${
                  objType === "object"
                    ? "Object"
                    : objType === "array"
                    ? "Array"
                    : "Value"
                }`
              );
            }}
          ></DialogTrigger>
          <DialogContent aria-describedby={undefined}>
            <DialogHeader>
              <DialogTitle className="text-2xl">{dialogTitle}</DialogTitle>
              <section className="flex flex-col gap-3.5 my-1.5">
                <Button
                  variant="default"
                  onClick={() => {
                    if (dialogType === "array") {
                      const $optionsDialog: HTMLButtonElement =
                        document.querySelector("#itemOptionsDialog")!;

                      const path = $optionsDialog.getAttribute("data-path")!;

                      addJasonItem({
                        path,
                        array: true,
                        value: {},
                        key: "",
                      });

                      $optionsDialog.click();
                      return;
                    }
                    setDialogAddItemType("object");

                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;

                    const $addItemDialog: HTMLButtonElement =
                      document.querySelector("#addItemDialog")!;

                    $addItemDialog.click();
                    $optionsDialog.click();
                  }}
                >
                  <GetIcon name="ObjectIcon" />
                  Add Object
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    if (dialogType === "array") {
                      const $optionsDialog: HTMLButtonElement =
                        document.querySelector("#itemOptionsDialog")!;

                      const path = $optionsDialog.getAttribute("data-path")!;

                      addJasonItem({
                        path,
                        array: true,
                        value: [],
                        key: "",
                      });

                      $optionsDialog.click();
                      return;
                    }
                    setDialogAddItemType("array");
                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;

                    const $addItemDialog: HTMLButtonElement =
                      document.querySelector("#addItemDialog")!;

                    $addItemDialog.click();
                    $optionsDialog.click();
                  }}
                >
                  <GetIcon name="ArrayIcon" />
                  Add Array
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    setDialogAddItemType("value");

                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;

                    const $addItemDialog: HTMLButtonElement =
                      document.querySelector("#addItemDialog")!;
                    $optionsDialog.click();
                    $addItemDialog.click();
                  }}
                >
                  <GetIcon name="Value" />
                  Add Value
                </Button>
                <Button variant="secondary">
                  <GetIcon name="FromText" />
                  Add From Text
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;
                    $optionsDialog.click();
                  }}
                >
                  <GetIcon name="Copy" />
                  Copy Path
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;
                    $optionsDialog.click();
                  }}
                >
                  <GetIcon name="Trash" />
                  Remove
                </Button>
              </section>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Jason />
      </main>
    </>
  );
}
