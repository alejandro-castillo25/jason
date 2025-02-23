import { AppContext } from "@/AppContext";
import { useContext } from "react";

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
} from "./util";

//TODO Add edit ... Button to each element
//? On it! (im talking alone help)

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

    // if (typeof value === "string" && value.includes("$"))
    //   return (
    //     <span className="text-yellow-400">
    //       {`"`}
    //       {value}
    //       {`"`}
    //     </span>
    //   );
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
    useContext(AppContext)?.jasonPathsOnlyParent!;

  interface JasonItem {
    name: string;
    value: any; //!
    path: string;
    array?: boolean;
  }

  const [_jason, setJason] = useContext(AppContext)?.jason!;

  function insertJasonItem({ name, value, path, array = false }: JasonItem) {


    function evalFormat(value: string | number | null | object | boolean): string {
      if(typeof value === "string") return `"${value}"`
      if (typeof value === "number") return `${value}`;
      if (typeof value === "boolean") return `${value.toString()}`;
      if (value === null) return "null";
      if (typeof value === "object") return `${JSON.stringify(value)}`;
      return ""
    }

    setJason(oldJason => {



      console.log(
        `oldJason${path.substring(1)}.${name} = ${evalFormat(value)}`
      );
      
      if(!array)
        eval(`oldJason${path.substring(1)}.${name} = ${evalFormat(value)}`);
      else
        eval(`oldJason${path.substring(1)}.push(${evalFormat(value)})`);
      
      
      return { ...oldJason };
    })

  }

  if (root)
    return (
      <>
        <AccordionItem value={path} itemID={path} className="border-b-0">
          <AccordionTrigger
            className="jason-item bg-(--secondary) p-2 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80"
            key={path}
          >
            <span className="flex">
              {Array.isArray(jason) ? (
                <GetIcon name="ArrayIcon" className="h-[1.5rem] w-[1.5rem]" />
              ) : (
                <GetIcon name="ObjectIcon" className="h-[1.5rem] w-[1.5rem]" />
              )}
              <span className="text-gray-300 ml-1">{"  : "}</span>
              {jasonPaths && <i className="ml-4 opacity-30">{path}</i>}
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

  for (const [k, v] of Object.entries(jason)) {
    let itemPath = `${path}.${k}`;
    if (Array.isArray(jason)) itemPath = `${path}[${k}]`;
    if (!isValidPointNotation(k)) itemPath = `${path}["${k}"]`;

    if (v === null || typeof v !== "object") {
      res.push(
        <>
          <Button
            className={`jason-item ${
              jasonWordWrap ? "max-w-[94vw]" : ""
            } bg-[var(--secondary)] p-2 rounded-(--radius) w-max text-[1rem] mt-0.5 h-auto text-w`}
            variant="secondary"
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

          {/* <div className="jason-item max-w-[90vw] group bg-(--secondary) p-2 rounded-(--radius) w-max text-[1rem] mt-0.5"></div> */}
        </>
      );
    } else {
      type ObjectType = "array" | "object";
      const objType: ObjectType = Array.isArray(v) ? "array" : "object";

      const isEmpty: boolean = getObjectLength(v) === 0;
      res.push(
        <>
          <AccordionItem value={itemPath} className={`border-b-0 mt-0.5`}>
            <AccordionTrigger
              className={`jason-item break-all ${
                jasonWordWrap ? "max-w-[94vw]" : ""
              } flex gap-0 bg-(--secondary) p-1 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80 ${
                isEmpty ? "text-foreground/50" : ""
              } w-max`}
              key={itemPath}
            >
              <span
                itemID={itemPath}
                className="m-0 mr-3.5 h-[2rem] aspect-square bg-black/15 hover:bg-black/25 w-[2rem] flex items-center justify-center rounded-(--radius)"
                onClick={(e) => {
                  e.preventDefault();
                  insertJasonItem({
                    name: "MHM",
                    path: itemPath,
                    array: objType === "array" ,
                    value: "Hii",
                  });
                }}
              >
                <GetIcon
                  name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                  className="scale-75 w-[1.5rem] h-[1.5rem]"
                />
              </span>
              <span className="mr-auto h-full flex items-center flex-wrap">
                <span>{k}</span>
                <span className="text-gray-300">{" :"}</span>
                {jasonPaths && (
                  <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                    {jasonPathsOnlyParent
                      ? getPathCurrentParentOnly(itemPath)
                      : itemPath}
                  </i>
                )}
              </span>
            </AccordionTrigger>

            {/** 
             // TODO  
              * use boreder-l to create "Areas"
             */}
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
        </>
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

export function Main() {
  return (
    <>
      <main className="min-w-[100%] flex-grow p-3">
        <Jason />
      </main>
    </>
  );
}
