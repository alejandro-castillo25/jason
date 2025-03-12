import { AppContext, useAppContext } from "@/AppContext";
import { useContext, useEffect, useRef, useState } from "react";
import { GetIcon } from "./Icons";
import {
  getPathCurrentParentOnly,
  isValidPointNotation,
  getObjectLength,
  getMarginLeft,
  counterFormatter,
  getPathChild,
} from "./util";

import { Button } from "@/components/ui/button";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { VariableSizeTree as Tree } from "react-vtree";

function getFomattedValueTemplate(value: any): string {
  return typeof value === "string"
    ? `"${value}"`
    : value === null
    ? "null"
    : typeof value === "boolean"
    ? value.toString()
    : value;
}

export function GetFomattedValue({
  children,
}: {
  children: string | number | boolean | null | undefined;
}) {
  function Format(value: typeof children) {
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
  readonly path?: string;
}

type ItemValueType =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "object"
  | "array";

interface TreeNodeData {
  id: string;
  name: string;
  value: unknown;
  isLeaf: boolean;
  parentType: "object" | "array";
  dataType: "object" | "array" | "value";
  dataExactType: ItemValueType;
  nestingLevel: number;
  objectSize: number;
  defaultHeight: number;
}

const Node = ({
  data: {
    isLeaf,
    name,
    value,
    nestingLevel,
    objectSize,
    parentType,
    dataType,
    dataExactType,
    id,
  },
  isOpen,
  height, //TODO Get rid of this!
  style,
  toggle,
}: any) => {
  const [jasonWordWrap] = useContext(AppContext)?.jasonWordWrap!;
  const [jasonPaths] = useContext(AppContext)?.jasonPaths!;
  const [jasonPathsNearPathOnly] =
    useContext(AppContext)?.jasonPathsNearPathOnly!;
  const [jasonObjectSize] = useContext(AppContext)?.jasonObjectSize!;

  const [jasonItemsOffset] = useContext(AppContext)?.jasonItemsOffset!;

  const optionsDialogRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    optionsDialogRef.current = document.getElementById("itemOptionsDialog");
  }, []);

  return (
    <div
      style={{
        ...style,
        //If i add height: "auto" everything breaks, how do i fix it
      }}
    >
      {!isLeaf ? (
        <Button
          onClick={() => {
            toggle();
          }}
          variant={"secondary"}
          style={{
            marginLeft: `${nestingLevel * jasonItemsOffset}px`,
          }}
          className={`jason-item break-all h-auto ${
            jasonWordWrap ? "max-w-[90vw]" : ""
          } flex gap-0 bg-(--secondary) p-1 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80 ${
            objectSize === 0 ? "text-foreground/50" : ""
          } w-max`}
          onContextMenu={(e) => {
            e.preventDefault();
            optionsDialogRef.current!.setAttribute("data-type", dataType);
            optionsDialogRef.current!.setAttribute(
              "data-parent-type",
              parentType
            );
            optionsDialogRef.current!.setAttribute(
              "data-exact-type",
              dataExactType
            );
            optionsDialogRef.current!.setAttribute(
              "data-root",
              id === " " ? "true" : "false"
            );
            optionsDialogRef.current!.setAttribute("data-path", id);
            optionsDialogRef.current!.click();
          }}
        >
          <span
            className="relative self-start m-0 mr-3.5 h-[2.9rem] w-[2.9rem] aspect-square bg-black/15 hover:bg-black/25 flex items-center justify-center rounded-(--radius)"
            onClick={(e) => {
              e.preventDefault();
              toggle(); //! To handle clicks on both the button and the thingy

              optionsDialogRef.current!.setAttribute("data-type", dataType);
              optionsDialogRef.current!.setAttribute(
                "data-exact-type",
                dataExactType
              );
              optionsDialogRef.current!.setAttribute(
                "data-parent-type",
                parentType
              );
              optionsDialogRef.current!.setAttribute(
                "data-root",
                id === " " ? "true" : "false"
              );
              optionsDialogRef.current!.setAttribute("data-path", id);
              optionsDialogRef.current!.click();
            }}
          >
            <GetIcon
              name={dataType === "object" ? "ObjectIcon" : "ArrayIcon"}
              className={` ${
                jasonObjectSize
                  ? objectSize >= 10
                    ? objectSize >= 100
                      ? "scale-105"
                      : "scale-95"
                    : "scale-80"
                  : "scale-100"
              } w-[2.8rem]! h-[2.8rem]! transition 0 scale`}
            />
            {jasonObjectSize && (
              <span
                className={`absolute opacity-60 ${
                  objectSize >= 100 ? "text-[0.70rem]" : "text-[0.85rem]"
                }`}
              >
                {counterFormatter.format(objectSize)}
              </span>
            )}
          </span>

          <span className="mr-auto h-full flex items-center flex-wrap text-wrap text-left">
            <span>
              {name}
              {
                // isOpen ? <b>{" - "}</b> : <b>{" + "}</b>
              }
              <span className="text-gray-300">{" : "}</span>
            </span>
            {jasonPaths && (
              <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                {jasonPathsNearPathOnly ? getPathCurrentParentOnly(id) : id}
              </i>
            )}
          </span>
        </Button>
      ) : (
        <Button
          className={`jason-item ${
            jasonWordWrap ? "max-w-[90vw]" : ""
          } bg-[var(--secondary)] p-2 rounded-(--radius) w-max text-[1rem]
           h-auto
           text-w`}
          variant="secondary"
          style={{
            marginLeft: `${nestingLevel * jasonItemsOffset}px`,
          }}
          key={id}
          onClick={() => {
            const $optionDialogEditBtn = document.getElementById(
              "optionDialogEditBtn"
            )!;
            optionsDialogRef.current!.setAttribute("data-type", dataType);
            optionsDialogRef.current!.setAttribute(
              "data-parent-type",
              parentType
            );
            optionsDialogRef.current!.setAttribute(
              "data-exact-type",
              dataExactType
            );
            optionsDialogRef.current!.setAttribute(
              "data-value",
              value === null ? "null" : String(value)
            );
            optionsDialogRef.current!.setAttribute(
              "data-root",
              id === " " ? "true" : "false"
            );
            optionsDialogRef.current!.setAttribute("data-path", id);
            $optionDialogEditBtn.click();
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            optionsDialogRef.current!.setAttribute("data-type", dataType);
            optionsDialogRef.current!.setAttribute(
              "data-parent-type",
              parentType
            );
            optionsDialogRef.current!.setAttribute(
              "data-exact-type",
              dataExactType
            );
            optionsDialogRef.current!.setAttribute(
              "data-value",
              value === null ? "null" : String(value)
            );
            optionsDialogRef.current!.setAttribute(
              "data-root",
              id === " " ? "true" : "false"
            );
            optionsDialogRef.current!.setAttribute("data-path", id);
            optionsDialogRef.current!.click();
          }}
        >
          <div className="w-full h-full text-left text-wrap">
            <span className="font-semibold">{name}</span>
            <span className="text-gray-300">{" :  "}</span>
            {jasonPaths && (
              <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                {jasonPathsNearPathOnly ? getPathCurrentParentOnly(id) : id}
                <br />
              </i>
            )}
            <span className="whitespace-break-spaces">
              {<GetFomattedValue>{value as any}</GetFomattedValue>}
            </span>
          </div>
        </Button>
      )}
    </div>
  );
};



export function HandleJason2({ data }: any) {
  const [treeWidth, setTreeWidth] = useState<number>(window.innerWidth);
  const [jasonPathsNearPathOnly] =
    useAppContext()?.jasonPathsNearPathOnly!;
  const [jasonPaths] = useAppContext()?.jasonPaths!;
  const [jasonItemsOffset] = useAppContext()?.jasonItemsOffset!;
  const [jasonWordWrap] = useAppContext()?.jasonWordWrap!;
  const [jasonObjectSize] = useAppContext()?.jasonObjectSize!;


  const [jasonMemoObjects, setMemoObjects] = useAppContext()?.jasonMemoObjects!;
  const [jasonMemoValues, setMemoValues] = useAppContext()?.jasonMemoValues!;

  const treeRef = useRef<any>();
  function* treeWalker(refresh: boolean): any {
    const stack: Array<{
      nestingLevel: number;
      node: {
        name: string;
        value: unknown;
        path: string;
      };
    }> = [];

    //? This is the root nodeeeee
    stack.push({
      nestingLevel: 0,
      node: {
        name: "",
        value: data,
        path: " ",
      },
    });

    while (stack.length > 0) {
      const entry = stack.pop();
      if (!entry) continue;

      const {
        node: { name, value, path },
        nestingLevel,
      } = entry;

      const isObject =
        typeof value === "object" && value !== null && !Array.isArray(value);
      const isArray = Array.isArray(value);
      const isLeaf = !isObject && !isArray;

      function getValueTemplateHeight(): number {
        if (
          jasonMemoValues.has(name) &&
          jasonMemoValues.get(name)![0] === value
        ) {
          return jasonMemoValues.get(name)![1]; //? Height
        }

        const $jasonValueTemplateName: HTMLElement = document.getElementById(
          "jasonValueTemplate_name"
        )!;
        $jasonValueTemplateName.innerText = name;

        const $jasonValueTemplatePath: HTMLElement = document.getElementById(
          "jasonValueTemplate_path"
        )!;

        if (!jasonPaths) {
          $jasonValueTemplatePath.style.display = "none";
        } else {
          $jasonValueTemplatePath.style.display = "inline";

          $jasonValueTemplatePath.innerText = (
            jasonPathsNearPathOnly ? getPathCurrentParentOnly(path) : path
          ).concat("\n");
        }

        const $jasonValueTemplateValue: HTMLElement = document.getElementById(
          "jasonValueTemplate_value"
        )!;

        $jasonValueTemplateValue.innerText = getFomattedValueTemplate(value);

        const $jasonValueTemplate: HTMLElement =
          document.getElementById("jasonValueTemplate")!;

        if (jasonWordWrap) {
          $jasonValueTemplate.style.maxWidth = "90vw";
        } else {
          $jasonValueTemplate.style.maxWidth = "";
        }

        $jasonValueTemplate.style.marginLeft = `${
          nestingLevel * jasonItemsOffset
        }px`;

        const height = $jasonValueTemplate.getBoundingClientRect().height;

        setMemoValues((memo) => {
          memo.set(path, [value, height]);
          return memo;
        })

        return height;
      }

      function getObjectTemplateHeight(): number {
        if (jasonMemoObjects.has(path)) {
          return jasonMemoObjects.get(path)!; //? Height
        }

        const $jasonObjectTemplateKey: HTMLElement = document.getElementById(
          "jasonObjectTemplate_key"
        )!;
        $jasonObjectTemplateKey.innerText = name.concat(" : ");

        const $jasonObjectTemplatePath: HTMLElement = document.getElementById(
          "jasonObjectTemplate_path"
        )!;

        if (!jasonPaths) $jasonObjectTemplatePath.style.display = "none";
        else {
          $jasonObjectTemplatePath.style.display = "inline";

          $jasonObjectTemplatePath.innerText = jasonPathsNearPathOnly
            ? getPathCurrentParentOnly(path)
            : path;
        }

        const $jasonObjectTemplateSize: HTMLElement = document.getElementById(
          "jasonObjectTemplate_size"
        )!;

        if (jasonObjectSize) $jasonObjectTemplateSize.style.display = "flex";
        else $jasonObjectTemplateSize.style.display = "none";

        const $jasonObjectTemplate: HTMLElement = document.getElementById(
          "jasonObjectTemplate"
        )!;

        if (jasonWordWrap) $jasonObjectTemplate.style.maxWidth = "90vw";
        else $jasonObjectTemplate.style.maxWidth = "";

        $jasonObjectTemplate.style.marginLeft = `${
          nestingLevel * jasonItemsOffset
        }px`;

        const height = $jasonObjectTemplate.getBoundingClientRect().height;

        setMemoObjects(memo => {
          memo.set(path, height);
          return memo;
        });
        return height;
      }

      const nodeData: TreeNodeData = {
        objectSize: isLeaf ? 0 : getObjectLength(value as object),
        defaultHeight:
          (isLeaf ? getValueTemplateHeight() : getObjectTemplateHeight()) + 2.5,
        parentType: /\[\d+\]/.test(getPathChild(path)) ? "array" : "object",
        dataType: isObject ? "object" : isArray ? "array" : "value",
        dataExactType: (isObject
          ? "object"
          : isArray
          ? "array"
          : value === null
          ? "null"
          : typeof value) as ItemValueType,
        id: path,
        name,
        value,
        isLeaf,
        nestingLevel,
      };

      const isOpened = yield refresh ? nodeData : path;

      if (!isLeaf && isOpened) {
        let children: Array<{ name: string; value: unknown; path: string }> =
          [];

        if (isObject) {
          children = Object.entries(value).map(([key, val]) => ({
            name: key,
            value: val,
            path: `${path}${
              isValidPointNotation(key) ? `.${key}` : `["${key}"]`
            }`,
            // path: `${path}${path === "." ? "" : "."}${key}`,
          }));
        } else if (isArray) {
          children = value.map((val, index) => ({
            name: index.toString(),
            value: val,
            path: `${path}[${index}]`,
            // path: `${path}${path === "/" ? "" : "/"}${index}`,
          }));
        }

        //? In Reverse, thus we keep the original positions
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push({
            nestingLevel: nestingLevel + 1,
            node: children[i],
          });
        }
      }
    }
  }

  async function recomputeTree() {
    console.log("Recomputing the bloody tree >:[");

    if (treeRef.current) {
      await treeRef.current.recomputeTree({
        useDefaultHeight: true,
      });
    }
  }

  function updateWidth() {
    setTreeWidth(window.innerWidth);
    setTimeout(recomputeTree, 25);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    document.addEventListener("refreshTree", recomputeTree);

    return () => {
      window.removeEventListener("resize", updateWidth);
      document.removeEventListener("refreshTree", recomputeTree);
    };
  }, []);

  return (
    <Tree
      ref={treeRef}
      className="jason2container"
      treeWalker={treeWalker}
      height={600}
      width={treeWidth}
    >
      {Node}
    </Tree>
  );
}

export function HandleJason({
  jason,
  root = false,
  path = " ",
}: HandleJasonProps) {
  const res: Array<JSX.Element> = [];

  const [jasonBracketGuides, _setJasonBracketGuides] =
    useContext(AppContext)?.jasonBracketGuides!;
  const [jasonItemsOffset, _setJasonItemsOffset] =
    useContext(AppContext)?.jasonItemsOffset!;
  const [jasonPaths, _setJasonPaths] = useContext(AppContext)?.jasonPaths!;
  const [jasonWordWrap, _setJasonWordWrap] =
    useContext(AppContext)?.jasonWordWrap!;
  const [jasonPathsOnlyParent, _setJasonPathsOnlyParent] =
    useContext(AppContext)?.jasonPathsNearPathOnly!;
  const [jasonObjectSize, _setJasonObjectSize] =
    useContext(AppContext)?.jasonObjectSize!;

  const optionsDialogRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    optionsDialogRef.current = document.getElementById("itemOptionsDialog");
  }, []);

  type ObjectType = "array" | "object";

  if (root) {
    const objType: ObjectType = Array.isArray(jason) ? "array" : "object";
    const children: Array<JSX.Element> = [];

    const stack: Array<{
      node: any;
      path: string;
      parent: Array<JSX.Element>;
    }> = [];

    stack.push({ node: jason, path: path, parent: children });

    while (stack.length) {
      const { node, path: currentPath, parent } = stack.pop()!;
      const entries = Object.entries(node);

      for (let i = 0; i < entries.length; i++) {
        const [k, v] = entries[i];

        let itemPath = `${currentPath}.${k}`;

        if (Array.isArray(node)) itemPath = `${currentPath}[${k}]`;

        if (!(isValidPointNotation(k) || Array.isArray(node)))
          itemPath = `${currentPath}["${k}"]`;

        if (v === null || typeof v !== "object") {
          parent.push(
            <Button
              className={`jason-item ${
                jasonWordWrap ? "max-w-[90vw]" : ""
              } bg-[var(--secondary)] p-2 rounded-(--radius) w-max text-[1rem] h-auto mt-0.5 text-w`}
              variant="secondary"
              key={itemPath}
              onClick={() => {
                const $optionDialogEditBtn = document.getElementById(
                  "optionDialogEditBtn"
                )!;

                optionsDialogRef.current!.setAttribute("data-type", "value");
                optionsDialogRef.current!.setAttribute(
                  "data-parent-type",
                  Array.isArray(node) ? "array" : "object"
                );
                optionsDialogRef.current!.setAttribute(
                  "data-exact-type",
                  v === null ? "null" : typeof v
                );
                optionsDialogRef.current!.setAttribute(
                  "data-value",
                  v === null ? "null" : String(v)
                );
                optionsDialogRef.current!.setAttribute("data-root", "false");
                optionsDialogRef.current!.setAttribute("data-path", itemPath);
                $optionDialogEditBtn.click();
              }}
              onContextMenu={(e) => {
                e.preventDefault();
                optionsDialogRef.current!.setAttribute("data-type", "value");
                optionsDialogRef.current!.setAttribute(
                  "data-parent-type",
                  Array.isArray(node) ? "array" : "object"
                );

                optionsDialogRef.current!.setAttribute(
                  "data-exact-type",
                  v === null ? "null" : typeof v
                );
                optionsDialogRef.current!.setAttribute(
                  "data-value",
                  v === null ? "null" : String(v)
                );
                optionsDialogRef.current!.setAttribute("data-root", "false");
                optionsDialogRef.current!.setAttribute("data-path", itemPath);
                optionsDialogRef.current!.click();
              }}
            >
              <div className="w-full h-full text-left text-wrap">
                <span className="font-semibold">{k}</span>
                <span className="text-gray-300">{" :  "}</span>
                {jasonPaths && (
                  <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                    {jasonPathsOnlyParent
                      ? getPathCurrentParentOnly(itemPath)
                      : itemPath}
                    <br />
                  </i>
                )}
                <span className="whitespace-break-spaces">
                  {<GetFomattedValue>{v as any}</GetFomattedValue>}
                </span>
              </div>
            </Button>
          );
        } else {
          const objType: ObjectType = Array.isArray(v) ? "array" : "object";
          const isEmpty: boolean = getObjectLength(v) === 0;
          const childrenContainer: Array<JSX.Element> = [];

          parent.push(
            <AccordionItem
              value={itemPath}
              className="border-b-0 mt-0.5"
              key={itemPath}
            >
              <AccordionTrigger
                className={`jason-item break-all ${
                  jasonWordWrap ? "max-w-[90vw]" : ""
                } flex gap-0 bg-(--secondary) p-0.5 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80 ${
                  isEmpty ? "text-foreground/50" : ""
                } w-max`}
                onContextMenu={(e) => {
                  e.preventDefault();
                  optionsDialogRef.current!.setAttribute("data-type", objType);
                  optionsDialogRef.current!.setAttribute(
                    "data-parent-type",
                    Array.isArray(node) ? "array" : "object"
                  );
                  optionsDialogRef.current!.setAttribute(
                    "data-exact-type",
                    objType
                  );
                  optionsDialogRef.current!.setAttribute("data-root", "false");
                  optionsDialogRef.current!.setAttribute("data-path", itemPath);
                  optionsDialogRef.current!.click();
                }}
              >
                <span
                  className="relative m-0 mr-3.5 h-[2.75rem] w-[2.75rem] aspect-square bg-black/15 hover:bg-black/25 flex items-center justify-center rounded-(--radius)"
                  onClick={(e) => {
                    e.preventDefault();
                    optionsDialogRef.current!.setAttribute(
                      "data-type",
                      objType
                    );
                    optionsDialogRef.current!.setAttribute(
                      "data-exact-type",
                      objType
                    );
                    optionsDialogRef.current!.setAttribute(
                      "data-parent-type",
                      Array.isArray(node) ? "array" : "object"
                    );
                    optionsDialogRef.current!.setAttribute(
                      "data-root",
                      "false"
                    );
                    optionsDialogRef.current!.setAttribute(
                      "data-path",
                      itemPath
                    );
                    optionsDialogRef.current!.click();
                  }}
                >
                  <GetIcon
                    name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                    className={`${
                      jasonObjectSize
                        ? getObjectLength(v) >= 10
                          ? getObjectLength(v) >= 100
                            ? "scale-105"
                            : "scale-95"
                          : "scale-80"
                        : "scale-70"
                    } w-[2.8rem] h-[2.8rem]`}
                  />
                  {jasonObjectSize && (
                    <span
                      className={`absolute opacity-60 ${
                        getObjectLength(v) >= 100
                          ? "text-[0.70rem]"
                          : "text-[0.85rem]"
                      }`}
                    >
                      {counterFormatter.format(getObjectLength(v))}
                    </span>
                  )}
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
                  {childrenContainer}
                </AccordionContent>
              )}
            </AccordionItem>
          );
          stack.push({ node: v, path: itemPath, parent: childrenContainer });
        }
      }
    }
    return (
      <>
        <AccordionItem value={path} className="border-b-0 relative" key="root">
          <AccordionTrigger
            className="jason-item min-w-[45vw] bg-(--secondary) p-1 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80"
            onContextMenu={(e) => {
              e.preventDefault();
              optionsDialogRef.current!.setAttribute("data-type", objType);
              optionsDialogRef.current!.setAttribute(
                "data-exact-type",
                objType
              );
              optionsDialogRef.current!.setAttribute("data-root", "true");
              optionsDialogRef.current!.setAttribute("data-path", path);
              optionsDialogRef.current!.click();
            }}
          >
            <span
              className="relative m-0 mr-3.5 h-[3.3rem] w-[3.3rem] aspect-square bg-black/15 hover:bg-black/25 flex items-center justify-center rounded-(--radius)"
              onClick={(e) => {
                e.preventDefault();
                optionsDialogRef.current!.setAttribute("data-root", "true");
                optionsDialogRef.current!.setAttribute("data-type", objType);
                optionsDialogRef.current!.setAttribute(
                  "data-exact-type",
                  objType
                );
                optionsDialogRef.current!.setAttribute(
                  "data-parent-type",
                  Array.isArray(jason) ? "array" : "object"
                );
                optionsDialogRef.current!.setAttribute("data-path", path);
                optionsDialogRef.current!.click();
              }}
            >
              <GetIcon
                name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                className={`${
                  jasonObjectSize && getObjectLength(jason) >= 10
                    ? getObjectLength(jason) >= 100
                      ? "scale-105"
                      : "scale-95"
                    : "scale-85"
                } w-full h-full`}
              />
              {jasonObjectSize && (
                <span
                  className={`absolute opacity-75 ${
                    getObjectLength(jason) < 10000
                      ? "text-[0.95rem]"
                      : "text-[0.8rem]"
                  }`}
                >
                  {counterFormatter.format(getObjectLength(jason))}
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent
            className={`${getMarginLeft(jasonItemsOffset)} w-max p-0 ${
              jasonBracketGuides && "border-l-1"
            } border-l-primary/45 flex flex-col`}
          >
            {children}
          </AccordionContent>
        </AccordionItem>
      </>
    );
  }

  const stack: Array<{ node: any; path: string; parent: Array<JSX.Element> }> =
    [];

  stack.push({ node: jason, path: path, parent: res });
  while (stack.length) {
    const { node, path: currentPath, parent } = stack.pop()!;
    const entries = Object.entries(node);

    for (let i = 0; i < entries.length; i++) {
      const [k, v] = entries[i];
      let itemPath = `${currentPath}.${k}`;
      if (Array.isArray(node)) itemPath = `${currentPath}[${k}]`;
      if (!(isValidPointNotation(k) || Array.isArray(node)))
        itemPath = `${currentPath}["${k}"]`;
      if (v === null || typeof v !== "object") {
        parent.push(
          <Button
            className={`jason-item ${
              jasonWordWrap ? "max-w-[90vw]" : ""
            } bg-[var(--secondary)] p-2 rounded-(--radius) w-max text-[1rem] h-auto mt-0.5 text-w`}
            variant="secondary"
            key={itemPath}
            onClick={() => {
              const $optionDialogEditBtn = document.getElementById(
                "optionDialogEditBtn"
              )!;
              optionsDialogRef.current!.setAttribute("data-type", "value");
              optionsDialogRef.current!.setAttribute(
                "data-parent-type",
                Array.isArray(node) ? "array" : "object"
              );
              optionsDialogRef.current!.setAttribute(
                "data-exact-type",
                v === null ? "null" : typeof v
              );
              optionsDialogRef.current!.setAttribute(
                "data-value",
                v === null ? "null" : String(v)
              );
              optionsDialogRef.current!.setAttribute("data-root", "false");
              optionsDialogRef.current!.setAttribute("data-path", itemPath);
              $optionDialogEditBtn.click();
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              optionsDialogRef.current!.setAttribute("data-type", "value");
              optionsDialogRef.current!.setAttribute(
                "data-parent-type",
                Array.isArray(node) ? "array" : "object"
              );
              optionsDialogRef.current!.setAttribute(
                "data-exact-type",
                v === null ? "null" : typeof v
              );
              optionsDialogRef.current!.setAttribute(
                "data-value",
                v === null ? "null" : String(v)
              );
              optionsDialogRef.current!.setAttribute("data-root", "false");
              optionsDialogRef.current!.setAttribute("data-path", itemPath);
              optionsDialogRef.current!.click();
            }}
          >
            <div className="w-full h-full text-left text-wrap">
              <span className="font-semibold">{k}</span>
              <span className="text-gray-300">{" :  "}</span>
              {jasonPaths && (
                <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                  {jasonPathsOnlyParent
                    ? getPathCurrentParentOnly(itemPath)
                    : itemPath}
                  <br />
                </i>
              )}
              <span className="whitespace-break-spaces">
                {<GetFomattedValue>{v as any}</GetFomattedValue>}
              </span>
            </div>
          </Button>
        );
      } else {
        const objType: ObjectType = Array.isArray(v) ? "array" : "object";
        const isEmpty: boolean = getObjectLength(v) === 0;
        const childrenContainer: Array<JSX.Element> = [];
        parent.push(
          <AccordionItem
            value={itemPath}
            className="border-b-0 mt-0.5"
            key={itemPath}
          >
            <AccordionTrigger
              className={`jason-item break-all ${
                jasonWordWrap ? "max-w-[90vw]" : ""
              } flex gap-0 bg-(--secondary) p-0.5 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80 ${
                isEmpty ? "text-foreground/50" : ""
              } w-max`}
              onContextMenu={(e) => {
                e.preventDefault();
                optionsDialogRef.current!.setAttribute("data-type", objType);
                optionsDialogRef.current!.setAttribute(
                  "data-parent-type",
                  Array.isArray(node) ? "array" : "object"
                );
                optionsDialogRef.current!.setAttribute(
                  "data-exact-type",
                  objType
                );
                optionsDialogRef.current!.setAttribute("data-root", "false");
                optionsDialogRef.current!.setAttribute("data-path", itemPath);
                optionsDialogRef.current!.click();
              }}
            >
              <span
                className="relative m-0 mr-3.5 h-[2.75rem] w-[2.75rem] aspect-square bg-black/15 hover:bg-black/25 flex items-center justify-center rounded-(--radius)"
                onClick={(e) => {
                  e.preventDefault();
                  optionsDialogRef.current!.setAttribute("data-type", objType);
                  optionsDialogRef.current!.setAttribute(
                    "data-exact-type",
                    objType
                  );
                  optionsDialogRef.current!.setAttribute(
                    "data-parent-type",
                    Array.isArray(node) ? "array" : "object"
                  );
                  optionsDialogRef.current!.setAttribute("data-root", "false");
                  optionsDialogRef.current!.setAttribute("data-path", itemPath);
                  optionsDialogRef.current!.click();
                }}
              >
                <GetIcon
                  name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                  className={`${
                    jasonObjectSize
                      ? getObjectLength(v) >= 10
                        ? getObjectLength(v) >= 100
                          ? "scale-105"
                          : "scale-95"
                        : "scale-80"
                      : "scale-70"
                  } w-[2.8rem] h-[2.8rem]`}
                />
                {jasonObjectSize && (
                  <span
                    className={`absolute opacity-60 ${
                      getObjectLength(v) >= 100
                        ? "text-[0.70rem]"
                        : "text-[0.85rem]"
                    }`}
                  >
                    {counterFormatter.format(getObjectLength(v))}
                  </span>
                )}
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
                {childrenContainer}
              </AccordionContent>
            )}
          </AccordionItem>
        );
        stack.push({ node: v, path: itemPath, parent: childrenContainer });
      }
    }
  }
  return res;
}

export const HandleJasonLegacy = ({
  jason,
  root = false,
  path = " ",
}: HandleJasonProps) => {
  const res: Array<JSX.Element> = [];

  const [jasonBracketGuides, _setJasonBracketGuides] =
    useContext(AppContext)?.jasonBracketGuides!;
  const [jasonItemsOffset, _setJasonItemsOffset] =
    useContext(AppContext)?.jasonItemsOffset!;
  const [jasonPaths, _setJasonPaths] = useContext(AppContext)?.jasonPaths!;

  const [jasonWordWrap, _setJasonWordWrap] =
    useContext(AppContext)?.jasonWordWrap!;

  const [jasonPathsOnlyParent, _setJasonPathsOnlyParent] =
    useContext(AppContext)?.jasonPathsNearPathOnly!;

  const [jasonObjectSize, _setJasonObjectSize] =
    useContext(AppContext)?.jasonObjectSize!;

  const optionsDialogRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    optionsDialogRef.current = document.getElementById("itemOptionsDialog");
  }, []);

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
            className="jason-item min-w-[45vw] bg-(--secondary) p-1 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80"
            onContextMenu={(e) => {
              e.preventDefault();

              optionsDialogRef.current!.setAttribute("data-type", objType);
              optionsDialogRef.current!.setAttribute(
                "data-exact-type",
                objType
              );

              optionsDialogRef.current!.setAttribute("data-root", "true");

              optionsDialogRef.current!.setAttribute("data-path", path);

              optionsDialogRef.current!.click();
            }}
          >
            <span
              className="relative m-0 mr-3.5 h-[3.3rem] w-[3.3rem]  aspect-square bg-black/15 hover:bg-black/25 flex items-center justify-center rounded-(--radius)"
              onClick={(e) => {
                e.preventDefault();

                optionsDialogRef.current!.setAttribute("data-root", "true");
                optionsDialogRef.current!.setAttribute("data-type", objType);
                optionsDialogRef.current!.setAttribute(
                  "data-exact-type",
                  objType
                );
                optionsDialogRef.current!.setAttribute(
                  "data-parent-type",
                  Array.isArray(jason) ? "array" : "object"
                );

                optionsDialogRef.current!.setAttribute("data-path", path);

                optionsDialogRef.current!.click();
              }}
            >
              <GetIcon
                name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                className={`${
                  jasonObjectSize && getObjectLength(jason) >= 10
                    ? getObjectLength(jason) >= 100
                      ? "scale-105"
                      : "scale-95"
                    : "scale-85"
                } w-full h-full`}
              />
              {jasonObjectSize && (
                <span
                  className={`absolute opacity-75 ${
                    getObjectLength(jason) < 10_000
                      ? "text-[0.95rem]"
                      : "text-[0.8rem]"
                  }`}
                >
                  {counterFormatter.format(getObjectLength(jason))}
                </span>
              )}
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
    if (!(isValidPointNotation(k) || Array.isArray(jason)))
      itemPath = `${path}["${k}"]`;

    if (v === null || typeof v !== "object") {
      res.push(
        <Button
          className={`jason-item ${
            jasonWordWrap ? "max-w-[90vw]" : ""
          } bg-[var(--secondary)] p-2 rounded-(--radius) w-max text-[1rem] h-auto mt-0.5 text-w`}
          variant="secondary"
          key={itemPath}
          onClick={() => {
            //TODO clear attributes when the modal is closed!

            const $optionDialogEditBtn = document.getElementById(
              "optionDialogEditBtn"
            )!;

            optionsDialogRef.current!.setAttribute("data-type", "value");
            optionsDialogRef.current!.setAttribute(
              "data-parent-type",
              Array.isArray(jason) ? "array" : "object"
            );

            optionsDialogRef.current!.setAttribute(
              "data-exact-type",
              v === null ? "null" : typeof v
            );

            optionsDialogRef.current!.setAttribute(
              "data-value",
              v === null ? "null" : String(v)
            );

            optionsDialogRef.current!.setAttribute("data-root", "false");
            optionsDialogRef.current!.setAttribute("data-path", itemPath);

            $optionDialogEditBtn.click();
          }}
          onContextMenu={(e) => {
            e.preventDefault();

            optionsDialogRef.current!.setAttribute("data-type", "value");
            optionsDialogRef.current!.setAttribute(
              "data-parent-type",
              Array.isArray(jason) ? "array" : "object"
            );

            optionsDialogRef.current!.setAttribute(
              "data-exact-type",
              v === null ? "null" : typeof v
            );

            optionsDialogRef.current!.setAttribute(
              "data-value",
              v === null ? "null" : String(v)
            );

            optionsDialogRef.current!.setAttribute("data-root", "false");
            optionsDialogRef.current!.setAttribute("data-path", itemPath);

            optionsDialogRef.current!.click();
          }}
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

            <span className={"whitespace-break-spaces"}>
              {<GetFomattedValue>{v as any}</GetFomattedValue>}
            </span>
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
              jasonWordWrap ? "max-w-[90vw]" : ""
            } flex gap-0 bg-(--secondary) p-0.5 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80 ${
              isEmpty ? "text-foreground/50" : ""
            } w-max`}
            onContextMenu={(e) => {
              e.preventDefault();

              optionsDialogRef.current!.setAttribute("data-type", objType);
              optionsDialogRef.current!.setAttribute(
                "data-parent-type",
                Array.isArray(jason) ? "array" : "object"
              );

              optionsDialogRef.current!.setAttribute(
                "data-exact-type",
                objType
              );

              optionsDialogRef.current!.setAttribute("data-root", "false");
              optionsDialogRef.current!.setAttribute("data-path", itemPath);

              optionsDialogRef.current!.click();
            }}
          >
            <span
              className="relative m-0 mr-3.5 h-[2.75rem] w-[2.75rem] aspect-square bg-black/15 hover:bg-black/25  flex items-center justify-center rounded-(--radius)"
              onClick={(e) => {
                e.preventDefault();

                optionsDialogRef.current!.setAttribute("data-type", objType);
                optionsDialogRef.current!.setAttribute(
                  "data-exact-type",
                  objType
                );
                optionsDialogRef.current!.setAttribute(
                  "data-parent-type",
                  Array.isArray(jason) ? "array" : "object"
                );

                optionsDialogRef.current!.setAttribute("data-root", "false");
                optionsDialogRef.current!.setAttribute("data-path", itemPath);

                optionsDialogRef.current!.click();
              }}
            >
              <GetIcon
                name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                className={`${
                  jasonObjectSize
                    ? getObjectLength(v) >= 10
                      ? getObjectLength(v) >= 100
                        ? "scale-105"
                        : "scale-95"
                      : "scale-80"
                    : "scale-70"
                } w-[2.8rem] h-[2.8rem]`}
              />

              {jasonObjectSize && (
                <span
                  className={`absolute opacity-60 ${
                    getObjectLength(v) >= 100
                      ? "text-[0.70rem]"
                      : "text-[0.85rem]"
                  }`}
                >
                  {counterFormatter.format(getObjectLength(v))}
                </span>
              )}
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
              <HandleJasonLegacy jason={v as typeof jason} path={itemPath} />
            </AccordionContent>
          )}
        </AccordionItem>
      );
    }
  }

  return res;
};
