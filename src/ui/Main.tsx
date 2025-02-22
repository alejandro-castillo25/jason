import { AppContext } from "@/AppContext";
import { useContext } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GetIcon } from "./Icons";

//TODO Add edit ... Button to each element

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
function getMarginLeft(offset: number): string {
  const dict: Record<number, string> = {
    0: "ml-0",
    1: "ml-1",
    2: "ml-2",
    3: "ml-3",
    4: "ml-4",
    5: "ml-5",
    6: "ml-6",
    7: "ml-7",
    8: "ml-8",
    9: "ml-9",
    10: "ml-10",
    11: "ml-11",
    12: "ml-12",
  };

  return dict[offset] ?? "";
}

interface HandleJasosProps {
  jason: Record<string, unknown>;
  root?: boolean;
  path?: string;
}

function HandleJason({ jason, root = false, path = " " }: HandleJasosProps) {
  const res: Array<JSX.Element> = [];

  const [jasonBracketGuides, _setJasonBracketGuides] =
    useContext(AppContext)?.jasonBracketGuides!;
  const [jasonItemsOffset, _setJasonItemsOffset] =
    useContext(AppContext)?.jasonItemsOffset!;
  const [jasonPaths, _setjasonPaths] =
    useContext(AppContext)?.jasonPaths!;

  if (root)
    return (
      <>
        <AccordionItem value={path} itemID={path} className="border-b-0">
          <AccordionTrigger
            className="jason-item bg-(--secondary) p-2 m-0 text-[1rem] hover:no-underline"
            key={path}
          >
            <span className="flex">
              {Array.isArray(jason) ? (
                <GetIcon name="ArrayIcon" />
              ) : (
                <GetIcon name="ObjectIcon" />
              )}
              <span className="text-gray-300 ml-1">{"  : "}</span>
              {jasonPaths && <i className="ml-4 opacity-30">{path}</i>}
            </span>
          </AccordionTrigger>
          <AccordionContent
            className={`${getMarginLeft(jasonItemsOffset)} w-max p-0 ${
              jasonBracketGuides && "border-l-1"
            } border-l-(--primary)`}
          >
            <HandleJason jason={jason} path={path} />
          </AccordionContent>
        </AccordionItem>
      </>
    );

  for (const [k, v] of Object.entries(jason)) {
    let itemPath = `${path}.${k}`;
    if (Array.isArray(jason)) itemPath = `${path}[${k}]`;

    if (v === null || typeof v !== "object") {
      res.push(
        <div className="jason-item max-w-[90vw] group bg-(--secondary) p-2 rounded-(--radius) w-max text-[1rem]">
          <span className="font-semibold">{k}</span>
          <span className="text-gray-300">{" :  "}</span>

          {jasonPaths && (
            <i className="ml-4 opacity-30">
              {itemPath} <br />
            </i>
          )}

          <span>{<GetFomattedValue>{v as any}</GetFomattedValue>}</span>
        </div>
      );
    } else {

      res.push(
        <>
          <AccordionItem
            value={itemPath}
            itemID={itemPath}
            className="border-b-0"
          >
            <AccordionTrigger
              className="jason-item bg-(--secondary) p-2 m-0 text-[1rem] hover:no-underline"
              key={itemPath}
            >
              <span>
                {k}
                <span className="text-gray-300">{" :"}</span>
                {jasonPaths && (
                  <i className="ml-4 opacity-30 font-normal">{itemPath}</i>
                )}
              </span>
            </AccordionTrigger>

            {/** 
             // TODO  
              * use boreder-l to create "Areas"
             */}
            <AccordionContent
              className={`${getMarginLeft(jasonItemsOffset)} w-max p-0 ${
                jasonBracketGuides && "border-l-1"
              } border-l-(--primary)`}
            >
              <HandleJason jason={v as typeof jason} path={itemPath} />
            </AccordionContent>
          </AccordionItem>
        </>
      );
    }
  }

  return res;
}

export function Main() {
  const [jason, _setJason] = useContext(AppContext)?.jason!;

  return (
    <>
      <main className="min-w-[100%] flex-grow p-3">
        <Accordion type="multiple" className="w-max">
          <HandleJason jason={jason as Record<string, unknown>}/>
        </Accordion>
      </main>
    </>
  );
}
