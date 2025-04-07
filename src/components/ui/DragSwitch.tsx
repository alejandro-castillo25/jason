import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const DragSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => {
  const handlePointerDown = (event: React.PointerEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    const thumb = event.currentTarget;
    const root = thumb.parentElement as HTMLButtonElement & {
      value: "on" | "off";
    };
    if (!root) return;

    // Prevent scrolling for touch events
    if (event.pointerType === "touch") {
      event.preventDefault();
    }

    // Set pointer capture for consistent tracking
    (event.target as HTMLElement).setPointerCapture(event.pointerId);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      let currentX = moveEvent.offsetX;

      if (currentX <= 0) currentX = 0;
      if (currentX + thumb.clientWidth > root.clientWidth)
        currentX = root.clientWidth - thumb.clientWidth;

      thumb.style.translate = `${currentX}px`;
    };

    const handlePointerUp = (moveEvent: PointerEvent) => {
      thumb.removeEventListener("pointermove", handlePointerMove);
      thumb.removeEventListener("pointerup", handlePointerUp);
      thumb.removeEventListener("pointercancel", handlePointerUp);

      let currentX = moveEvent.offsetX;

      if (currentX + thumb.clientWidth / 2 < root.clientWidth / 2) {
        if (event.pointerType === "touch") root.click();

        currentX = 0;
      } else if (currentX + thumb.clientWidth / 2 > root.clientWidth / 2) {
         if (event.pointerType === "touch") root.click();

        currentX = root.clientWidth - thumb.clientWidth;
      }

      thumb.style.translate = `${currentX}px`;
    };

    thumb.addEventListener("pointermove", handlePointerMove);
    thumb.addEventListener("pointerup", handlePointerUp);
    thumb.addEventListener("pointercancel", handlePointerUp);
  };

  return (
    <SwitchPrimitive.Root
      ref={ref}
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-colors outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"

        className={cn(
          "bg-background block size-4 rounded-full ring-0 shadow-lg transition-transform ease-linear data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )}
        onPointerDown={handlePointerDown}
      />
    </SwitchPrimitive.Root>
  );
});

DragSwitch.displayName = SwitchPrimitive.Root.displayName;

export { DragSwitch };
