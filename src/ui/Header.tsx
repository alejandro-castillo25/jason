import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GetIcon } from "./Icons";
import { SidebarContent } from "./SidebarContent";

import { useState, useEffect, useRef } from "react";
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

const FPSCounter = () => {
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: DOMHighResTimeStamp) => {
    if (!previousTimeRef.current) previousTimeRef.current = time;

    const deltaTime = time - previousTimeRef.current;
    frameCount.current++;

    if (deltaTime >= 1000) {
      setFps(Math.round((frameCount.current * 1000) / deltaTime));
      frameCount.current = 0;
      previousTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div
      style={{
        pointerEvents: "none",
      }}
      className="fixed top-1 right-12 bg-(--background)/70 p-2 px-4 rounded 
                    font-mono text-sm z-[99] backdrop-blur-sm shadow-lg 
                    border border-white/10 overflow-x-hidden m-0 box-border!"
    >
      <span className="text-(--primary)">FPS:</span> {fps}
      <div
        className="absolute bottom-0 left-0 h-1 bg-(--primary)/80 
                      transition-all duration-200"
        style={{ width: `${(Math.min(fps, 60) / 60) * 100}%` }}
      />
    </div>
  );
};

export function Header() {
  const [lang] = useAppContext()?.lang!;
  const jasonMemoObjects = useAppContext()?.jasonMemoObjects!;
  const jasonMemoValues = useAppContext()?.jasonMemoValues!;

  const [, setJasonIsNone] = useAppContext()?.jasonIsNone!;

  const [, setJasonFilePath] = useAppContext()?.jasonFilePath!;
  const [jasonScreen, setJasonScreen] = useAppContext()?.jasonScreen!;

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
      <FPSCounter />

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
        id="jasonHeader"
        className="overflow-hidden box-border h-[3.75rem] max-h-[3.75rem] items-center flex flex-row bg-(--primary) border-b-4 border-b-(--border) m-0"
        style={{
          transition:
            "max-height 200ms linear, height 200ms linear, border 200ms linear, min-height 200ms linear ",
        }}
      >
        {jasonScreen === "settings" && (
          <Button
            variant={"ghost"}
            size={"icon"}
            className="ml-2.5 hover:bg-transparent"
            onClick={() => {
              setJasonScreen("main");
            }}
          >
            <GetIcon
              name="ArrowLeft"
              className="h-[1.8rem]! w-[1.8rem]! text-(--title-color)"
            />
          </Button>
        )}
        <h1
          className={`font-semibold text-[1.8rem] text-(--title-color) ${
            jasonScreen === "main" ? "ml-6" : "ml-3.5"
          }`}
        >
          Jason
        </h1>
        <GetIcon
          name="Logo"
          className="aspect-square w-auto h-[95%]! scale-75 text-(--title-color)"
        />

        <SidebarContent />
      </header>
    </>
  );
}
