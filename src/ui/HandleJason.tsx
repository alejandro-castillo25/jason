import { useAppContext } from "@/AppContext";
import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { GetIcon } from "./Icons";
import {
  getPathCurrentParentOnly,
  isValidPointNotation,
  getObjectLength,
  counterFormatter,
  getPathChild,
  isValidURL,
  isValidColor,
  BRACKET_GUIDES_COLORS,
  getLangIconCode,
  parseSpecialChars,
} from "./util";

import { Button } from "@/components/ui/button";

import ReactCountryFlag from "react-country-flag";
import iso from "iso-3166-1";

import { VariableSizeTree as Tree } from "react-vtree";
import { phone } from "phone";
import throttle from "lodash.throttle";
import debounce from "lodash.debounce";

function getFomattedValueTemplate(value: any): string {
  return typeof value === "string"
    ? `"${value}"`
    : value === null
    ? "null"
    : typeof value === "boolean"
    ? value.toString()
    : value;
}

export const CountryFlagFallback = ({
  countryCode,
  className = "",
  ...props
}: {
  countryCode: string;
  className: string;
}) => {
  const [isValid, setIsValid] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const normalizedCode = useMemo(() => {
    const code = countryCode.trim();
    let result = "";

    const { isValid: isValidPhone } = phone(code);

    if (getLangIconCode(code as any) !== null) {
      setIsValid(true);
      return getLangIconCode(code as any);
    } else if (isValidPhone && !/[a-z]/i.test(code)) {
      setIsValid(true);
      return phone(code).countryIso2;
    } else if (
      code.startsWith("tel:") &&
      !/\s/.test(code) &&
      phone(code.substring(4)).isValid &&
      !/[a-z]/i.test(code.substring(4))
    ) {
      setIsValid(true);
      return phone(code.substring(4)).countryIso2;
    }

    if (code.length === 3 && code.toUpperCase() === code) {
      result = iso.whereAlpha3(code)?.alpha2 ?? "";
    } else if (code.length === 2 && code.toUpperCase() === code) {
      result = iso.whereAlpha2(code)?.alpha2 ?? "";
      //? Peru conflict so...
    } else if (code.length > 3 && code !== "peru")
      result = iso.whereCountry(code)?.alpha2 ?? "";

    setIsValid(Boolean(result));

    return result;
  }, [countryCode]);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setIsValid(false);

  if (!isValid) return null;

  return (
    <ReactCountryFlag
      countryCode={normalizedCode!}
      svg
      className={`transition-opacity duration-200 ${className}`}
      style={{ opacity: isLoaded ? 1 : 0 }}
      {...props}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export function GetFomattedValue({
  children,
}: {
  children: string | number | boolean | null | undefined;
}) {
  function Format(value: typeof children) {
    if (typeof value === "string") {
      if (isValidColor(value)) {
        return (
          <span
            style={{
              color: value,
              textShadow: "1px 1px 0px #444444",
            }}
          >
            {`"`}
            {value}
            {`"`}
          </span>
        );
      }
      if (isValidURL(value))
        return (
          <span className="text-blue-400">
            {`"`}
            {value}
            {`"`}
          </span>
        );
      return (
        <span className="text-green-400">
          {`"`}
          {value}
          {`"`}
        </span>
      );
    }

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
  isLast: boolean;
  isFirst: boolean;
  isOpenByDefault: boolean;
}

const Node = memo(
  ({
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
      isLast,
      isFirst,
    },
    isOpen,
    style,
    toggle,
  }: any) => {
    const {
      lang: [lang],
      jasonWordWrap: [jasonWordWrap],
      jasonBracketGuides: [jasonBracketGuides],
      jasonBracketGuidesOpacity: [jasonBracketGuidesOpacity],
      jasonColorizedBracketsGuides: [jasonColorizedBracketsGuides],
      jasonPaths: [jasonPaths],
      jasonPathsNearParentOnly: [jasonPathsNearParentOnly],
      jasonObjectSize: [jasonObjectSize],
      jasonItemsOffset: [jasonItemsOffset],
    } = useAppContext()!;

    const optionsDialogRef = useRef<HTMLElement | null>(null);

    const iconScale = useMemo(() => {
      if (!jasonObjectSize) return "scale-75";
      if (objectSize >= 10000) return "scale-120";
      if (objectSize >= 1000) return "scale-115";
      if (objectSize >= 100) return "scale-105";
      if (objectSize >= 10) return "scale-95";
      return "scale-80";
    }, [jasonObjectSize, objectSize]);

    const formattedObjectSize = useMemo(
      () => counterFormatter(lang).format(objectSize).replace(/\s/g, ""),
      [lang, objectSize]
    );

    useEffect(() => {
      optionsDialogRef.current = document.getElementById("itemOptionsDialog");
    }, []);

    return (
      <div
        style={{
          ...style,
          width: "auto",
        }}
        className="mt-2.5 ml-2.5 pr-2.5"
      >
        {!isLeaf ? (
          <Button
            id={id}
            onClick={() => {
              toggle();
            }}
            variant={"secondary"}
            style={{
              transition: "border-radius 200ms ease-out",
              wordWrap: "break-word",
              marginLeft: `${nestingLevel * (jasonItemsOffset as number)}px`,
            }}
            className={`jason-item break-all h-auto relative ${
              jasonWordWrap ? "max-w-[90vw]" : ""
            } flex gap-0 bg-(--secondary) p-1 m-0 text-[1rem] hover:bg-secondary/80 focus-visible:bg-secondary/80 active:bg-secondary/80 ${
              objectSize === 0 && id !== " " ? "text-foreground/50" : ""
            } ${id === " " ? "w-[30vw]" : "w-max"} min-w-[6rem] ${
              !(isFirst || isOpen) ? "rounded-tl-[0px]" : ""
            } ${!(isLast || isOpen) ? "rounded-bl-[0px]" : ""}`}
            onContextMenu={(e) => {
              e.preventDefault();
              optionsDialogRef.current!.setAttribute("data-type", dataType);
              optionsDialogRef.current!.setAttribute(
                "data-parent-type",
                parentType
              );

              optionsDialogRef.current!.setAttribute(
                "data-object-size",
                objectSize
              );

              optionsDialogRef.current!.setAttribute(
                "data-exact-type",
                dataExactType
              );
              optionsDialogRef.current!.setAttribute(
                "data-root",
                String(id === " ")
              );
              optionsDialogRef.current!.setAttribute("data-path", id);
              optionsDialogRef.current!.click();
            }}
          >
            {jasonBracketGuides && id !== " " && (
              <>
                {new Array(nestingLevel).fill(null).map((_, i) => (
                  <div
                    key={`c-${i}`}
                    className="absolute w-[1px] h-[calc(100%_+_2px)] z-[-1]"
                    aria-hidden="true"
                    style={
                      {
                        opacity: `${jasonBracketGuidesOpacity / 100}`,
                        left: `-${
                          (jasonItemsOffset as number) * nestingLevel -
                          (jasonItemsOffset as number) * i -
                          (jasonItemsOffset as number) / 2 +
                          1
                        }px`,
                        "--current-guide-color": jasonColorizedBracketsGuides
                          ? `${
                              BRACKET_GUIDES_COLORS[
                                i % BRACKET_GUIDES_COLORS.length
                              ]
                            }`
                          : "var(--primary)",

                        background:
                          isLast &&
                          i == nestingLevel - 1 &&
                          (!isOpen || objectSize === 0)
                            ? "linear-gradient(to bottom, var(--current-guide-color) 40%, var(--background))"
                            : "var(--current-guide-color)",
                      } as React.CSSProperties
                    }
                  ></div>
                ))}
                <div
                  className={`absolute z-[-1] h-[1px] top-[calc(50%-1px)]`}
                  style={
                    {
                      opacity: `${jasonBracketGuidesOpacity / 100}`,
                      width: `${(jasonItemsOffset as number) / 2}px`,
                      left: `-${(jasonItemsOffset as number) / 2}px`,
                      "--current-guide-color-1": jasonColorizedBracketsGuides
                        ? `${
                            BRACKET_GUIDES_COLORS[
                              (nestingLevel - 1) % BRACKET_GUIDES_COLORS.length
                            ]
                          }`
                        : "var(--primary)",
                      background: "var(--current-guide-color-1)",
                    } as React.CSSProperties
                  }
                ></div>
              </>
            )}

            <span
              className="relative self-start m-0 mr-3.5 h-[2.9rem] w-[2.9rem] aspect-square bg-black/15 hover:bg-black/25 flex items-center justify-center rounded-(--radius)"
              onClick={() => {
                optionsDialogRef.current!.setAttribute("data-type", dataType);
                optionsDialogRef.current!.setAttribute(
                  "data-exact-type",
                  dataExactType
                );

                optionsDialogRef.current!.setAttribute(
                  "data-object-size",
                  objectSize
                );
                optionsDialogRef.current!.setAttribute(
                  "data-parent-type",
                  parentType
                );
                optionsDialogRef.current!.setAttribute(
                  "data-root",
                  String(id === " ")
                );
                optionsDialogRef.current!.setAttribute("data-path", id);
                optionsDialogRef.current!.click();
                toggle(); //! To handle clicks on both the button and the thingy
              }}
            >
              <GetIcon
                name={dataType === "object" ? "ObjectIcon" : "ArrayIcon"}
                className={` ${iconScale} w-[2.8rem]! h-[2.8rem]!`}
              />
              {jasonObjectSize && (
                <span
                  className={`absolute opacity-60 ${
                    objectSize >= 100
                      ? objectSize >= 1_000
                        ? objectSize >= 10000
                          ? "text-[0.55rem]"
                          : "text-[0.55rem]"
                        : "text-[0.7rem]"
                      : "text-[0.85rem]"
                  }`}
                >
                  {formattedObjectSize}
                </span>
              )}
            </span>

            <span className="mr-auto h-full flex items-center flex-wrap text-left whitespace-pre-wrap">
              <span>
                {name}
                <span className="text-gray-300">
                  {id !== " " ? <>&nbsp;:</> : <>:</>}
                </span>
              </span>
              {jasonPaths && (
                <i className="ml-2.5 opacity-30 font-normal text-[.95rem]">
                  {jasonPathsNearParentOnly ? getPathCurrentParentOnly(id) : id}
                </i>
              )}
              <GetIcon
                name="ChevronRight"
                className={`absolute right-0 top-0.5 opacity-35 h-[0.8rem]! w-[0.8rem]! transition-transform duration-200
                ${isOpen ? "rotate-[90deg]" : ""}
              `}
              />
            </span>
          </Button>
        ) : (
          <Button
            id={id}
            className={`jason-item relative ${
              jasonWordWrap ? "max-w-[90vw]" : ""
            } bg-(--secondary) p-2 rounded-(--radius) w-max text-[1rem]
           focus-visible:bg-secondary/80 hover:bg-secondary/80 active:bg-secondary/80
           h-auto text-wrap ${!isFirst ? "rounded-tl-[0px]" : ""} ${
              !isLast ? "rounded-bl-[0px]" : ""
            }`}
            variant="secondary"
            style={{
              wordWrap: "break-word",
              marginLeft: `${nestingLevel * (jasonItemsOffset as number)}px`,
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

              optionsDialogRef.current!.click(); //! Not too genious, but clever
              optionsDialogRef.current!.click(); //! thus we sent the data at once without changing our dialog

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

              if (typeof value === "string")
                optionsDialogRef.current!.setAttribute(
                  "data-object-size",
                  String(value.length)
                );

              optionsDialogRef.current!.setAttribute(
                "data-root",
                id === " " ? "true" : "false"
              );
              optionsDialogRef.current!.setAttribute("data-path", id);
              optionsDialogRef.current!.click();
            }}
          >
            {jasonBracketGuides && (
              <>
                {new Array(nestingLevel).fill(null).map((_, i) => (
                  <div
                    key={`c-${i}`}
                    className="absolute w-[1px] h-[calc(100%_+_2px)] z-[-1]"
                    aria-hidden="true"
                    style={
                      {
                        opacity: `${jasonBracketGuidesOpacity / 100}`,
                        left: `-${
                          (jasonItemsOffset as number) * nestingLevel -
                          (jasonItemsOffset as number) * i -
                          (jasonItemsOffset as number) / 2 +
                          1
                        }px`,
                        "--current-guide-color": jasonColorizedBracketsGuides
                          ? `${
                              BRACKET_GUIDES_COLORS[
                                i % BRACKET_GUIDES_COLORS.length
                              ]
                            }`
                          : "var(--primary)",

                        background:
                          isLast && i == nestingLevel - 1
                            ? "linear-gradient(to bottom, var(--current-guide-color) 40%, var(--background))"
                            : "var(--current-guide-color)",
                      } as React.CSSProperties
                    }
                  ></div>
                ))}
                <div
                  className={`absolute z-[-1] h-[1px] top-[calc(50%-1px)]`}
                  style={
                    {
                      opacity: `${jasonBracketGuidesOpacity / 100}`,

                      width: `${(jasonItemsOffset as number) / 2}px`,
                      left: `-${(jasonItemsOffset as number) / 2}px`,
                      "--current-guide-color-1": jasonColorizedBracketsGuides
                        ? `${
                            BRACKET_GUIDES_COLORS[
                              (nestingLevel - 1) % BRACKET_GUIDES_COLORS.length
                            ]
                          }`
                        : "var(--primary)",
                      background: "var(--current-guide-color-1)",
                    } as React.CSSProperties
                  }
                ></div>
              </>
            )}

            {typeof value === "string" && (
              <CountryFlagFallback
                countryCode={value}
                className="absolute top-[0.1rem] right-[0.1rem] text-[0.7rem]"
              />
            )}

            <div className="w-full h-full text-left text-wrap">
              <span className="font-semibold whitespace-pre-wrap">{name}</span>
              <span className="text-gray-300">&nbsp;:&nbsp;</span>
              {jasonPaths && (
                <i className="ml-2.5 opacity-30 font-normal text-[.95rem]">
                  {jasonPathsNearParentOnly ? getPathCurrentParentOnly(id) : id}
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
  },
  (prevProps, nextProps) =>
    prevProps.data.id === nextProps.data.id &&
    prevProps.data.value === nextProps.data.value &&
    prevProps.isOpen === nextProps.isOpen &&
    prevProps.style === nextProps.style
);

export function HandleJason2({ data }: any) {
  const jasonValueTemplateRef = useRef({
    template: document.getElementById("jasonValueTemplate")!,
    name: document.getElementById("jasonValueTemplate_name")!,
    value: document.getElementById("jasonValueTemplate_value")!,
    path: document.getElementById("jasonValueTemplate_path")!,
  });

  const jasonObjectTemplateRef = useRef({
    template: document.getElementById("jasonObjectTemplate")!,
    key: document.getElementById("jasonObjectTemplate_key")!,
    path: document.getElementById("jasonObjectTemplate_path")!,
  });

  const [treeWidth, setTreeWidth] = useState<number>(window.innerWidth);
  const treeOldWidthRef = useRef<number>(window.innerWidth);
  const [treeHeight, setTreeHeight] = useState<number>(
    window.innerHeight
    // -Number.parseFloat(getComputedStyle(document.documentElement).fontSize) * 4
  );

  const [jasonPathsNearParentOnly] = useAppContext()?.jasonPathsNearParentOnly!;
  const [jasonPaths] = useAppContext()?.jasonPaths!;
  const [jasonItemsOffset] = useAppContext()?.jasonItemsOffset!;
  const [jasonWordWrap] = useAppContext()?.jasonWordWrap!;
  // const [jasonObjectSize] = useAppContext()?.jasonObjectSize!;

  const { jasonMemoObjects, jasonMemoValues } = useAppContext()!;

  const [jasonScreen] = useAppContext()?.jasonScreen!;

  const [jasonDynamicHeader] = useAppContext()?.jasonDynamicHeader!;

  const scrollDeltaRef = useRef<number>(0);

  const treeRef = useRef<any>();
  const treeWalker = React.useCallback(
    function* (refresh: boolean) {
      const stack: Array<{
        nestingLevel: number;
        isFirst: boolean;
        isLast: boolean;
        node: {
          name: string;
          value: unknown;
          path: string;
        };
      }> = [];

      //? This is the root nodeeeee
      stack.push({
        nestingLevel: 0,
        isFirst: true,
        isLast: true,
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
          isFirst,
          isLast,
        } = entry;

        const isObject =
          typeof value === "object" && value !== null && !Array.isArray(value);
        const isArray = Array.isArray(value);
        const isLeaf = !isObject && !isArray;

        function getValueTemplateHeight(): number {
          if (
            jasonMemoValues.current.has(name) &&
            jasonMemoValues.current.get(name)![0] === value
          ) {
            return jasonMemoValues.current.get(name)![1]; //? Height
          }

          jasonValueTemplateRef.current.name.textContent = name;

          if (!jasonPaths) {
            jasonValueTemplateRef.current.path.style.display = "none";
          } else {
            jasonValueTemplateRef.current.path.style.display = "inline";

            jasonValueTemplateRef.current.path.innerText = (
              jasonPathsNearParentOnly ? getPathCurrentParentOnly(path) : path
            ).concat("\n");
          }

          jasonValueTemplateRef.current.value.innerText =
            getFomattedValueTemplate(value);

          if (jasonWordWrap) {
            jasonValueTemplateRef.current.template.style.maxWidth = "90vw";
          } else {
            jasonValueTemplateRef.current.template.style.maxWidth = "";
          }

          jasonValueTemplateRef.current.template.style.marginLeft = `${
            nestingLevel * (jasonItemsOffset as number)
          }px`;

          const height =
            jasonValueTemplateRef.current.template.getBoundingClientRect()
              .height;

          jasonMemoValues.current.set(path, [value, height]);

          return height;
        }

        function getObjectTemplateHeight(): number {
          if (jasonMemoObjects.current.has(path)) {
            return jasonMemoObjects.current.get(path)!; //? Height
          }

          jasonObjectTemplateRef.current.key.innerText = name.concat(" :");

          if (!jasonPaths)
            jasonObjectTemplateRef.current.path.style.display = "none";
          else {
            jasonObjectTemplateRef.current.path.style.display = "inline";

            jasonObjectTemplateRef.current.path.innerText =
              jasonPathsNearParentOnly ? getPathCurrentParentOnly(path) : path;
          }

          if (jasonWordWrap)
            jasonObjectTemplateRef.current.template.style.maxWidth = "90vw";
          else jasonObjectTemplateRef.current.template.style.maxWidth = "";

          jasonObjectTemplateRef.current.template.style.marginLeft = `${
            nestingLevel * (jasonItemsOffset as number)
          }px`;

          const height =
            jasonObjectTemplateRef.current.template.getBoundingClientRect()
              .height;

          jasonMemoObjects.current.set(path, height);
          return height;
        }

        const nodeData: TreeNodeData = {
          objectSize: isLeaf ? 0 : getObjectLength(value as object),
          defaultHeight:
            (isLeaf ? getValueTemplateHeight() : getObjectTemplateHeight()) + 2,
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
          isFirst,
          isLast,
          isOpenByDefault: isLeaf
            ? false
            : getObjectLength(value as object) === 0,
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
                isValidPointNotation(key)
                  ? `.${key}`
                  : `["${parseSpecialChars(key)}"]`
              }`,
            }));
          } else if (isArray) {
            children = value.map((val, index) => ({
              name: index.toString(),
              value: val,
              path: `${path}[${index}]`,
            }));
          }

          //? In Reverse, thus we keep the original positions
          for (let i = children.length - 1; i >= 0; i--) {
            stack.push({
              nestingLevel: nestingLevel + 1,
              node: children[i],
              isFirst: i == 0,
              isLast: i == children.length - 1,
            });
          }
        }
      }
    },
    [
      data,
      jasonItemsOffset,
      jasonPaths,
      jasonPathsNearParentOnly,
      jasonWordWrap,
      treeWidth,
      // treeHeight,
    ]
  );

  async function recomputeTree() {
    if (treeRef.current) {
      console.log("Recomputing the bloody tree >:[");
      await treeRef.current.recomputeTree({
        useDefaultHeight: true,
      });

      jasonMemoObjects.current = new Map();
      jasonMemoValues.current = new Map();
    }
  }

  const resizeHandler = useMemo(
    () =>
      debounce(() => {
        setTreeHeight(window.innerHeight);
        setTreeWidth(window.innerWidth);
      }, 45),
    []
  );

  function updateTreeSize() {
    resizeHandler();
    if (treeOldWidthRef.current !== window.innerWidth) {
      setTimeout(recomputeTree, 65);
      treeOldWidthRef.current = window.innerWidth;
    }
  }

  const scrollHandler = useMemo(
    () =>
      throttle((e: any) => {
        if (!jasonDynamicHeader) return;
        const { scrollOffset } = e;

        const $jasonHeader = document.getElementById("jasonHeader")!;
        // treeRef?.current?.styles.background = "red";

        if (
          scrollOffset > scrollDeltaRef.current + window.innerHeight * 0.25 &&
          $jasonHeader.style.height !== "0px"
        ) {
          // $jasonHeader.style.minHeight = "unset";
          $jasonHeader.style.height = "0px";

          $jasonHeader.style.borderBottomWidth = "0px";
        } else if (
          scrollOffset === 0 ||
          (scrollOffset + window.innerHeight * 0.45 < scrollDeltaRef.current &&
            $jasonHeader.style.height === "0px")
        ) {
          $jasonHeader.style.height = "3.5rem";

          $jasonHeader.style.borderBottomWidth = "4px";
          // const setMinHeight = () => {
          //   $jasonHeader.style.minHeight = "3.75rem";
          //   $jasonHeader.removeEventListener("transitionend", setMinHeight);
          // };
          // $jasonHeader.addEventListener("transitionend", setMinHeight);
          // $jasonHeader.addEventListener("transitioncancel", () =>
          //   $jasonHeader.removeEventListener("transitionend", setMinHeight)
          // );
        }

        scrollDeltaRef.current = scrollOffset;
      }, 200),
    [jasonDynamicHeader]
  );

  useEffect(() => {
    window.addEventListener("resize", updateTreeSize);
    document.addEventListener("refreshTree", recomputeTree);

    return () => {
      window.removeEventListener("resize", updateTreeSize);
      document.removeEventListener("refreshTree", recomputeTree);
    };
  }, []);

  return (
    <Tree
      onScroll={scrollHandler}
      ref={treeRef}
      className={`jason2container bg-(--background) ${
        jasonScreen !== "main" && "hidden"
      }`}
      treeWalker={treeWalker}
      height={treeHeight}
      width={treeWidth}
      overscanCount={3}

      // useIsScrolling={true}
    >
      {Node}
    </Tree>
  );
}
