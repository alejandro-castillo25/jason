// import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GetIcon } from "./Icons";


import { SidebarContent } from "./SidebarContent";


function OpenOptionsBtn() {
  return (
    <Sheet>
      <SheetTrigger
        className="ml-auto aspect-square h-[100%]"
        id="open-sidebar-btn"
      >
        {/* <Button
          variant={"ghost"}
          size={"icon"}
          id="open-sidebar-btn"
          className="aspect-square h-[3.5rem] w-[3.5rem]"
        > */}
        <GetIcon name="Burger" />
        {/* </Button> */}
      </SheetTrigger>
      <SidebarContent />
    </Sheet>
  );
}

export function Header() {
  return (
    <>
      <header className=" overflow-hidden sticky top-0 z-10 w-full items-center flex flex-row h-[4rem] min-h-[4rem] pl-6 bg-(--primary) border-b-4 borderb-(--border)">
        <h1 className=" font-semibold text-4xl">Jason</h1>
        <OpenOptionsBtn />
      </header>
    </>
  );
}
