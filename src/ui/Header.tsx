import { Button } from "@/components/ui/button";
import { Burger } from "./Icons";




export function Header() {
  return (
    <>
      <header className="items-center flex flex-row h-[4rem] pl-5 bg-(--primary) border-3 border-(--border)">
        <h1 className=" font-semibold text-4xl">Jason</h1>
        <Button
          variant={"ghost"}
          size={"icon"}
          id="open-sidebar-btn"
          className="ml-auto aspect-square h-[3.5rem] w-[3.5rem]"
        >
          <Burger />
        </Button>
      </header>
    </>
  );
}