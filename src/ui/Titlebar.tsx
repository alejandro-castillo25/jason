import { getCurrentWindow } from "@tauri-apps/api/window";
import { useEffect, useRef, useState } from "react";
import { GetIcon } from "./Icons";
import { useAppContext } from "@/AppContext";
import { UnlistenFn } from "@tauri-apps/api/event";

export function Titlebar({ className = "" }) {
  const OS = useAppContext()?.OS!;

  if (OS.current === "android") return null;

  const appWindow = useRef(getCurrentWindow());

  const titlebarRef = useRef<HTMLDivElement>(null);
  const titlebarMinimizeRef = useRef<HTMLDivElement>(null);
  const titlebarMaximizeRef = useRef<HTMLDivElement>(null);
  const titlebarCloseRef = useRef<HTMLDivElement>(null);

  const [isFullscreen, setIsFullscreen] = useAppContext()?.isFullscreen!;

  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  useEffect(() => {
    const ctrl = new AbortController();
    const signal = ctrl.signal;

    titlebarMinimizeRef.current?.addEventListener(
      "click",
      () => {
        appWindow.current.minimize();
      },
      { signal }
    );

    titlebarMaximizeRef.current?.addEventListener(
      "click",
      () => {
        appWindow.current.toggleMaximize();
      },
      { signal }
    );

    titlebarCloseRef.current?.addEventListener(
      "click",
      () => {
        appWindow.current.close();
      },
      { signal }
    );

    document.addEventListener(
      "touchstart",
      async (e) => {
        if (OS.current === "android") return;
        const target = e.target;
        if (
          target instanceof Element &&
          target.hasAttribute("data-tauri-drag-region")
        ) {
          e.preventDefault();
          await appWindow.current.startDragging();
        }
      },
      { signal }

    );
    
    async function toggleFullscreen() {
      const isFullscreen0 = await appWindow.current?.isFullscreen();
      setIsFullscreen(!isFullscreen0);
      await appWindow.current?.setFullscreen(!isFullscreen0);
    }

    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "F11") {
          toggleFullscreen();
        }
      },
      {
        signal,
      }
    );

    let unlisten: UnlistenFn = () => {};

    const listenResize = async () => {
      unlisten = await appWindow.current?.onResized(() => {
        async function setMaximized() {
          setIsMaximized(await appWindow.current.isMaximized());
        }

        setMaximized();
      });
    };

    listenResize();

    return () => {
      ctrl.abort();
      unlisten();
    };
  }, []);

  return (
    <div
      data-tauri-drag-region
      data-slot="titlebar"
      ref={titlebarRef}
      className={`${className} titlebar bg-primary/100 h-[25px] min-h-[25px] flex justify-end ${
        isFullscreen && "hidden"
      }`}
    >
      {/* <GetIcon
        name="Logo"
        className="w-[30px]! h-[30px]! text-(--title-color) mr-auto ml-[5px]"
      /> */}
      <div
        data-tauri-drag-region-exclude
        className="titlebar-button hover:bg-(--title-color)/20 h-full"
        ref={titlebarMinimizeRef}
      >
        <GetIcon
          data-tauri-drag-region-exclude
          name="HorizontalLine"
          className="w-[16px]! h-[16px]! text-(--title-color)"
        />
      </div>
      <div
        data-tauri-drag-region-exclude
        className="titlebar-button hover:bg-(--title-color)/20 h-full"
        ref={titlebarMaximizeRef}
      >
        {!isMaximized ? (
          <GetIcon
            data-tauri-drag-region-exclude
            name="Square"
            className="w-[13px]! h-[13px]! text-(--title-color)"
          />
        ) : (
          <GetIcon
            data-tauri-drag-region-exclude
            name={"Copy"}
            className="w-[13px]! h-[13px]! text-(--title-color) scale-x-[-1]"
          />
        )}
      </div>
      <div
        data-tauri-drag-region-exclude
        className="titlebar-button hover:bg-destructive group h-full"
        ref={titlebarCloseRef}
      >
        <GetIcon
          data-tauri-drag-region-exclude
          name="Close"
          className="w-[18px]! h-[18px]! text-(--title-color) group-hover:text-destructive-foreground"
        />
      </div>
    </div>
  );
}
