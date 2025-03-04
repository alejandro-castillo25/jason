import { AppContext } from "@/AppContext";
import { useContext, useEffect, useRef } from "react";
import { GetIcon } from "./Icons";
import {
  getPathCurrentParentOnly,
  isValidPointNotation,
  getObjectLength,
  getMarginLeft,
  counterFormatter,
} from "./util";

import { Button } from "@/components/ui/button";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function GetFomattedValue({
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
  path?: string;
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
    optionsDialogRef.current = document.querySelector("#itemOptionsDialog");
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
          id={itemPath}
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
          id={itemPath}
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
              <HandleJason jason={v as typeof jason} path={itemPath} />
            </AccordionContent>
          )}
        </AccordionItem>
      );
    }
  }

  return res;
}
