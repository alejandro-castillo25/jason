import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GetIcon } from "./Icons";
import { SidebarContent } from "./SidebarContent";

import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { translateTo } from "./lang";
import { useAppContext } from "@/AppContext";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function Header() {
  const [isFullscreen] = useAppContext()?.isFullscreen!;

  const [lang] = useAppContext()?.lang!;
  const jasonMemoObjects = useAppContext()?.jasonMemoObjects!;
  const jasonMemoValues = useAppContext()?.jasonMemoValues!;

  const [, setJasonIsNone] = useAppContext()?.jasonIsNone!;

  const [, setJasonFilePath] = useAppContext()?.jasonFilePath!;
  const [jasonScreen, setJasonScreen] = useAppContext()?.jasonScreen!;
  const [jasonDynamicHeader] = useAppContext()?.jasonDynamicHeader!;

  const [, setJason] = useAppContext()?.jason!;

  const refreshTree = () => {
    const refreshTreeEvent = new CustomEvent("refreshTree", {
      detail: {
        message: "Refreshing Tree",
      },
      cancelable: false,
      bubbles: true,
      composed: true,
    });

    document.dispatchEvent(refreshTreeEvent);
  };


  return (
    <>
      <Dialog>
        <DialogTrigger
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
          id="jasonDialogCreateNew"
        ></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-3xl mb-4 flex items-center justify-center">
              {translateTo(lang, "Create")}
              <GetIcon
                name="Logo"
                className="inline-block w-[2.7rem] h-[2.7rem] ml-3"
              />
            </DialogTitle>
            <DialogDescription asChild>
              <section className="flex flex-row w-full max-sm:flex-col justify-center gap-5">
                <Button
                  className="min-sm:flex-auto"
                  onClick={() => {
                    setJason({});
                    jasonMemoObjects.current = new Map();
                    jasonMemoValues.current = new Map();
                    refreshTree();

                    const $jasonDialogCreateNew = document.getElementById(
                      "jasonDialogCreateNew"
                    )!;

                    $jasonDialogCreateNew.click();
                    setJasonIsNone(false);
                    setJasonFilePath(null);
                  }}
                >
                  <GetIcon
                    name="ObjectIcon"
                    className="w-[1.4rem]! h-[1.4rem]!"
                  />
                  <h2 className="text-[1rem]">{translateTo(lang, "Object")}</h2>
                </Button>
                <Button
                  className="min-sm:flex-auto"
                  onClick={() => {
                    setJason([]);
                    jasonMemoObjects.current = new Map();
                    jasonMemoValues.current = new Map();
                    refreshTree();

                    const $jasonDialogCreateNew = document.getElementById(
                      "jasonDialogCreateNew"
                    )!;

                    $jasonDialogCreateNew.click();
                    setJasonIsNone(false);
                    setJasonFilePath(null);
                  }}
                >
                  <GetIcon
                    name="ArrayIcon"
                    className="w-[1.4rem]! h-[1.4rem]!"
                  />
                  <h2 className="text-[1rem]">{translateTo(lang, "Array")}</h2>
                </Button>
              </section>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* //TODO Reuse this Alert*/}
      <AlertDialog>
        <AlertDialogTrigger
          className="hidden"
          aria-hidden="true"
          id="jasonAlertDialog"
        ></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Unsaved files cannot be recovered!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={buttonVariants({ variant: "destructive" })}
              onClick={() => {}}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <header
        {...(isFullscreen ? {} : { "data-tauri-drag-region": "" })}
        id="jasonHeader"
        className={`overflow-hidden box-border h-[3.5rem] max-h-[3.5rem] ${
          (jasonScreen === "settings" || !jasonDynamicHeader) &&
          "min-h-[3.5rem]"
        } items-center flex flex-row bg-primary border-b-4 border-b-(--border) m-0`}
        style={{
          transition:
            "max-height 200ms linear, height 200ms linear, border 200ms linear, min-height 200ms linear ",
        }}
      >
        {jasonScreen === "settings" && (
          <Button
            data-tauri-drag-region-exclude
            id="backtoMainBtn"
            variant={"ghost"}
            size={"icon"}
            className="ml-2.5 hover:bg-transparent"
            onClick={() => {
              setJasonScreen("main");
            }}
          >
            <GetIcon
              data-tauri-drag-region-exclude
              name="ArrowLeft"
              className="h-[1.8rem]! w-[1.8rem]! text-(--title-color)"
            />
          </Button>
        )}
        <h1
          className={`font-semibold text-[1.7rem] text-(--title-color) ${
            jasonScreen === "main" ? "ml-6" : "ml-3.5"
          }`}
        >
          Jason
        </h1>
        <GetIcon
          name="Logo"
          className="aspect-square w-auto h-[3rem]! scale-75 text-(--title-color)"
        />

        <SidebarContent />
      </header>
    </>
  );
}
