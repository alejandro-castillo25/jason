import { GetIcon } from "./Icons";


import { SidebarContent } from "./SidebarContent";


export function Header() {
  return (
    <>

      <header className=" overflow-hidden sticky top-0 z-10 w-full items-center flex flex-row h-[4rem] min-h-[4rem] pl-6 bg-(--primary) border-b-4 borderb-(--border)">
        <h1 className=" font-semibold text-4xl">Jason</h1>
        <GetIcon name="Logo" className="aspect-square w-auto h-full scale-75" />

        <SidebarContent />
      </header>
    </>
  );
}
