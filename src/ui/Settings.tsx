import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Lang, translateTo } from "./lang";
import { JasonColor, JasonTheme, useAppContext } from "@/AppContext";
import { useCallback, useRef } from "react";
import { Input } from "@/components/ui/input";

import { Slider } from "@/components/ui/slider";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactCountryFlag from "react-country-flag";
import { GetIcon } from "./Icons";

export function Settings({ show = false }) {
  const {
    lang: [lang, setLang],
    jasonBracketGuides: [jasonBracketGuides, setJasonBracketGuides],
    jasonBracketGuidesOpacity: [
      jasonBracketGuidesOpacity,
      setJasonBracketGuidesOpacity,
    ],
    jasonColorizedBracketsGuides: [
      jasonColorizedBracketsGuides,
      setJasonColorizedBracketsGuides,
    ],
    jasonWordWrap: [jasonWordWrap, setJasonWordWrap],
    jasonDynamicHeader: [jasonDynamicHeader, setJasonDynamicHeader],
    jasonPaths: [jasonPaths, setJasonPaths],
    jasonPathsNearParentOnly: [
      jasonPathsNearParentOnly,
      setJasonPathsNearParentOnly,
    ],
    jasonItemsOffset: [jasonItemsOffset, setJasonItemsOffset],
    jasonObjectSize: [jasonObjectSize, setJasonObjectSize],
    jasonColor: [jasonColor, setJasonColor],
    jasonTheme: [jasonTheme, setJasonTheme],
    jasonFormatFile: [jasonFormatFile, setJasonFormatFile],
  } = useAppContext()!;

  const refreshTreeEventRef = useRef<Event>(
    new CustomEvent("refreshTree", {
      detail: {},
      cancelable: false,
      bubbles: true,
    })
  );

  const validateOffset = useCallback((e: any) => {
    if (e.target.value === "" || Number.isNaN(Number(e.target.value))) {
      setJasonItemsOffset(14);
      return;
    }
    const value = Number(e.target.value);

    if (value < 4) {
      setJasonItemsOffset(4);
      return;
    } else if (value > 64) {
      setJasonItemsOffset(64);
      return;
    }

    setJasonItemsOffset(value);
  }, []);

  return (
    <section
      className={`min-h-full w-full bg-(--background) flex flex-col p-3 gap-1.5 ${
        !show && "hidden"
      }`}
    >
      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="Wrap" className="h-[1rem]! w-[1rem]!" />

        <span>{translateTo(lang, "Word wrap")}</span>
        <Switch
          className="ml-auto"
          checked={jasonWordWrap}
          onClick={() => {
            setJasonWordWrap(!jasonWordWrap);

            setTimeout(() => {
              document.dispatchEvent(refreshTreeEventRef.current);
            }, 20);
          }}
        />
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="Length" className="h-[1rem]! w-[1rem]!" />
        <span>{translateTo(lang, "Show object size")}</span>
        <Switch
          className="ml-auto"
          checked={jasonObjectSize}
          onClick={() => {
            setJasonObjectSize(!jasonObjectSize);
          }}
        />
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="Format" className="h-[1rem]! w-[1rem]!" />

        <span>{translateTo(lang, "Format file if possible")}</span>
        <Switch
          className="ml-auto"
          checked={jasonFormatFile}
          onClick={() => {
            setJasonFormatFile(!jasonFormatFile);
          }}
        />
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="DynamicHeader" className="h-[1rem]! w-[1rem]!" />

        <span>{translateTo(lang, "Dynamic header")}</span>
        <Switch
          className="ml-auto"
          checked={jasonDynamicHeader}
          onClick={() => setJasonDynamicHeader(!jasonDynamicHeader)}
        />
      </Label>
      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="Line" className="h-[1rem]! w-[1rem]!" />

        <span>{translateTo(lang, "Bracket guides")}</span>
        <Switch
          className="ml-auto"
          checked={jasonBracketGuides}
          onClick={() => setJasonBracketGuides(!jasonBracketGuides)}
        />
      </Label>

      <Label
        className={`border-1 h-[4rem] ml-6.5 cursor-pointer p-3.5 rounded-(--radius) ${
          !jasonBracketGuides && "hidden"
        }`}
      >
        <span>{translateTo(lang, "Colorized brackets guides")}</span>
        <Switch
          className="ml-auto"
          checked={jasonColorizedBracketsGuides}
          onClick={() =>
            setJasonColorizedBracketsGuides(!jasonColorizedBracketsGuides)
          }
        />
      </Label>

      <Label
        className={`border-1 h-[4rem] ml-6.5 cursor-pointer p-3.5 rounded-(--radius) ${
          !jasonBracketGuides && "hidden"
        }`}
      >
        <span>{translateTo(lang, "Brackets guides opacity")}</span>
        <div className="ml-auto flex">
          <span className="mr-2.5 opacity-75 italic">
            {jasonBracketGuidesOpacity}%
          </span>
          <Slider
            className="w-[6.5rem]"
            value={[jasonBracketGuidesOpacity]}
            min={5}
            max={100}
            step={5}
            onValueChange={(e) => {
              setJasonBracketGuidesOpacity(e[0]);
            }}
          />
        </div>
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="Path" className="h-[1rem]! w-[1rem]!" />

        <span>{translateTo(lang, "Show paths")}</span>
        <Switch
          className="ml-auto"
          checked={jasonPaths}
          onClick={() => {
            setJasonPaths(!jasonPaths);

            setTimeout(() => {
              document.dispatchEvent(refreshTreeEventRef.current);
            }, 20);
          }}
        />
      </Label>

      <Label
        className={`border-1 h-[4rem] ml-6.5 cursor-pointer p-3.5 rounded-(--radius) ${
          !jasonPaths && "hidden"
        }`}
      >
        <span>{translateTo(lang, "Show nearest parent only")}</span>
        <Switch
          className="ml-auto"
          checked={jasonPathsNearParentOnly}
          onClick={() => {
            setJasonPathsNearParentOnly(!jasonPathsNearParentOnly);
            setTimeout(() => {
              document.dispatchEvent(refreshTreeEventRef.current);
            }, 20);
          }}
        />
      </Label>

      <Label
        className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25"
        htmlFor="settingsIndentationOffset"
      >
        <GetIcon name="Indentation" className="h-[1rem]! w-[1rem]!" />

        <span>
          {translateTo(lang, "Indentation size")}
          {" (px)"}
        </span>
        <Input
          id="settingsIndentationOffset"
          type="number"
          inputMode="numeric"
          autoComplete="off"
          spellCheck={false}
          className="ml-auto w-[5rem] invalid:border-red-400 text-center"
          min={4}
          max={64}
          value={jasonItemsOffset}
          onBlur={validateOffset}
          onKeyDown={(e) => {
            if (e.key === "Enter") validateOffset(e);
          }}
          onChange={(e) => {
            setJasonItemsOffset(e.currentTarget.value);
          }}
        />
      </Label>
      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="Color" className="h-[1rem]! w-[1rem]!" />
        {translateTo(lang, "Color")}
        <Select
          value={jasonColor}
          onValueChange={(value) => {
            setJasonColor(value as JasonColor);
          }}
        >
          <SelectTrigger className="w-[9rem] ml-auto">
            <SelectValue placeholder={translateTo(lang, "Color")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blue">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(221.2,83.2%,53.3%)] dark:text-[hsl(217.2,91.2%,59.8%)]"
              />
              {translateTo(lang, "Blue")}
            </SelectItem>
            <SelectItem value="orange">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(24.6,95%,46%)] dark:text-[hsl(20.5,90.2%,46.2%)]"
              />
              {translateTo(lang, "Orange")}
            </SelectItem>
            <SelectItem value="red">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(0,72.2%,50.6%)] dark:text-[hsl(0,72.2%,50.6%)]"
              />
              {translateTo(lang, "Red")}
            </SelectItem>
            <SelectItem value="magenta">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(300,99%,50%)] dark:text-[hsl(300,99%,50%)]"
              />
              {translateTo(lang, "Magenta")}
            </SelectItem>
            <SelectItem value="green">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(142.1,76.2%,30.3%)] dark:text-[hsl(142.1,70.6%,45.3%)]"
              />
              {translateTo(lang, "Green")}
            </SelectItem>
            <SelectItem value="brown">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(30,99%,31%)] dark:text-[hsl(30,99%,29%)]"
              />
              {translateTo(lang, "Brown")}
            </SelectItem>
            <SelectItem value="purple">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(291,94%,27%)] dark:text-[hsl(291,73%,22%)]"
              />
              {translateTo(lang, "Purple")}
            </SelectItem>
            <SelectItem value="olive">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(60,99%,25.1%)] dark:text-[hsl(60,85%,36%)]"
              />
              {translateTo(lang, "Olive")}
            </SelectItem>

            <SelectItem value="coral">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(0,79%,72%)] dark:text-[hsl(0,57%,66%)]"
              />
              {translateTo(lang, "Coral")}
            </SelectItem>
            <SelectItem value="yellow">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(47.9,95.8%,58.1%)] dark:text-[hsl(47.9,95.8%,58.1%)]"
              />
              {translateTo(lang, "Yellow")}
            </SelectItem>
            <SelectItem value="emerald">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(126,97%,27%)] dark:text-[hsl(126,97%,32%)]"
              />
              {translateTo(lang, "Emerald")}
            </SelectItem>

            <SelectItem value="rose">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(330,99%,56%)] dark:text-[hsl(330,99%,50%)]"
              />
              {translateTo(lang, "Rose")}
            </SelectItem>
            <SelectItem value="zinc">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(240,5.9%,10%)] dark:text-[hsl(0,0%,98%)]"
              />
              {translateTo(lang, "Zinc")}
            </SelectItem>
            <SelectItem value="violet">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(262.1,83.3%,57.8%)] dark:text-[hsl(263.4,70%,50.4%)]"
              />
              {translateTo(lang, "Violet")}
            </SelectItem>

            <SelectItem value="sapphire">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(216,71%,42%)] dark:text-[hsl(216,85%,39%)]"
              />
              {translateTo(lang, "Sapphire")}
            </SelectItem>
            <SelectItem value="turquoise">
              <GetIcon
                name="Circle"
                className="h-[1rem]! w-[1rem]! text-[hsl(174,80%,33%)] dark:text-[hsl(174,69%,46%)]"
              />
              {translateTo(lang, "Turquoise")}
            </SelectItem>
          </SelectContent>
        </Select>
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="Brush" className="h-[1rem]! w-[1rem]!" />

        {translateTo(lang, "Theme")}
        <Select
          value={jasonTheme}
          onValueChange={(value) => {
            setJasonTheme(value as JasonTheme);
          }}
        >
          <SelectTrigger className="w-[9rem] ml-auto">
            <SelectValue placeholder={translateTo(lang, "Theme")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dark">
              <GetIcon name="Moon" className="h-[1rem]! w-[1rem]!" />
              {translateTo(lang, "Dark")}
            </SelectItem>
            <SelectItem value="light">
              <GetIcon name="Sun" className="h-[1rem]! w-[1rem]!" />
              {translateTo(lang, "Light")}
            </SelectItem>
            <SelectItem value="system">
              <GetIcon name="Contrast" className="h-[1rem]! w-[1rem]!" />

              {translateTo(lang, "System")}
            </SelectItem>
          </SelectContent>
        </Select>
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <GetIcon name="World" className="h-[1rem]! w-[1rem]!" />

        {translateTo(lang, "Language")}
        <Select
          value={lang}
          onValueChange={(value) => {
            setLang(value as Lang);
          }}
        >
          <SelectTrigger className="w-[9rem] ml-auto">
            <SelectValue placeholder={translateTo(lang, "Language")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">
              <ReactCountryFlag countryCode={"US"} svg />
              {translateTo(lang, "English")}
            </SelectItem>
            <SelectItem value="es">
              <ReactCountryFlag countryCode={"ES"} svg />
              {translateTo(lang, "Spanish")}
            </SelectItem>
            <SelectItem value="pt">
              <ReactCountryFlag countryCode={"PT"} svg />
              {translateTo(lang, "Portuguese")}
            </SelectItem>
            <SelectItem value="fr">
              <ReactCountryFlag countryCode={"FR"} svg />
              {translateTo(lang, "French")}
            </SelectItem>

            <SelectItem value="system">
              <GetIcon name="Language" className="h-[1rem]! w-[1rem]!" />
              {translateTo(lang, "System")}
            </SelectItem>
          </SelectContent>
        </Select>
      </Label>
    </section>
  );
}
