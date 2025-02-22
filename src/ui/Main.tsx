import { AppContext } from "@/AppContext";
import { useContext } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Separator } from "@/components/ui/separator";


//TODO Add edit ... Button to each element
function getRandom() {
  return crypto.randomUUID();
}






function handleJason(jason: Record<string, unknown>) {
  const res: Array<JSX.Element> = [];
  
  

  for (const [k, v] of Object.entries(jason)) {
    if (v === null || typeof v !== "object") {
      res.push(
        // <Accordion type="single" collapsible  className="w-max">
        //   <AccordionItem value={`item-${getRandom()}`}>
        //     <AccordionTrigger>{k}</AccordionTrigger>
        //     <AccordionContent className="ml-1 w-max">
        //       {v as any}
        //     </AccordionContent>
        //   </AccordionItem>
        // </Accordion>
        <>
          {/* <Separator orientation="horizontal" className="mt-1" /> */}

          <div className="group bg-(--secondary) p-2 rounded-(--radius) w-max text-[1rem]">
            <span className="font-semibold group-hover:underline">{k}</span>
            {" :  "}
            <span>{v === null ? "null" : (v === undefined ? "undefined" : v.toString())}</span>
          </div>
        </>
      );
    } else {
      const rand = getRandom();
      res.push(
        <>
          <Accordion type="single" collapsible className="w-max">
            <AccordionItem value={`item-${rand}`} itemID={rand}>
              <AccordionTrigger className="bg-(--secondary) p-2 m-0 text-[1rem]">
                {k}{" :"}
              </AccordionTrigger>
              <AccordionContent className=" ml-2 w-max p-0">
                {handleJason(v as typeof jason)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      );

    }
  }

  return res;
}

export function Main() {
  const [jason, setJason] = useContext(AppContext)?.jason!;

  return (
    <>
      <main className="flex-grow p-2">{handleJason(jason as Record<string, unknown>)}</main>
    </>
  );
}
