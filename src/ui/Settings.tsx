import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Lang, translateTo } from "./lang";
import { JasonColor, JasonTheme, useAppContext } from "@/AppContext";
import {  useCallback, useRef } from "react";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactCountryFlag from "react-country-flag";

export function Settings({ show = false }) {
  const {
    lang: [lang, setLang],
    jasonBracketGuides: [jasonBracketGuides, setJasonBracketGuides],
    jasonColorizedBracketsGuides: [
      jasonColorizedBracketsGuides,
      setJasonColorizedBracketsGuides,
    ],
    jasonWordWrap: [jasonWordWrap, setJasonWordWrap],
    jasonPaths: [jasonPaths, setJasonPaths],
    jasonPathsNearParentOnly: [
      jasonPathsNearParentOnly,
      setJasonPathsNearParentOnly,
    ],
    jasonItemsOffset: [jasonItemsOffset, setJasonItemsOffset],
    jasonObjectSize: [jasonObjectSize, setJasonObjectSize],
    jasonColor: [jasonColor, setJasonColor],
    jasonTheme: [jasonTheme, setJasonTheme],
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
        <span>{translateTo(lang, "Word Wrap")}</span>
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
        <span>{translateTo(lang, "Show Object Size")}</span>
        <Switch
          className="ml-auto"
          checked={jasonObjectSize}
          onClick={() => {
            setJasonObjectSize(!jasonObjectSize);
          }}
        />
      </Label>
      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        <span>{translateTo(lang, "Bracket Guides")}</span>
        <Switch
          className="ml-auto"
          checked={jasonBracketGuides}
          onClick={() => setJasonBracketGuides(!jasonBracketGuides)}
        />
      </Label>

      <Label
        className={`border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) ${
          !jasonBracketGuides && "hidden"
        }`}
      >
        <span>{translateTo(lang, "Colorized Brackets Guides")}</span>
        <Switch
          className="ml-auto"
          checked={jasonColorizedBracketsGuides}
          onClick={() =>
            setJasonColorizedBracketsGuides(!jasonColorizedBracketsGuides)
          }
        />
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25 hidden!">
        <span>{translateTo(lang, "Show Paths")}</span>
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
        className={`border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) ${
          !jasonPaths && "hidden"
        }`}
      >
        <span>{translateTo(lang, "Show Parent Only")}</span>
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
        <span>
          {translateTo(lang, "Indentation Size")}
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
            if(e.key === "Enter")
              validateOffset(e);
          }}
          onChange={(e) => {
            setJasonItemsOffset(e.currentTarget.value);
          }}
        />
      </Label>
      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        {translateTo(lang, "Color")}
        <Select
          value={jasonColor}
          onValueChange={(value) => {
            setJasonColor(value as JasonColor);
          }}
        >
          <SelectTrigger className="w-[6.5rem] ml-auto">
            <SelectValue placeholder={translateTo(lang, "Color")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="blue">{translateTo(lang, "Blue")}</SelectItem>
            <SelectItem value="orange">
              {translateTo(lang, "Orange")}
            </SelectItem>
            <SelectItem value="red">{translateTo(lang, "Red")}</SelectItem>
            <SelectItem value="green">{translateTo(lang, "Green")}</SelectItem>
            <SelectItem value="yellow">
              {translateTo(lang, "Yellow")}
            </SelectItem>
            <SelectItem value="rose">{translateTo(lang, "Rose")}</SelectItem>
            <SelectItem value="zinc">{translateTo(lang, "Zinc")}</SelectItem>
            <SelectItem value="violet">
              {translateTo(lang, "Violet")}
            </SelectItem>
          </SelectContent>
        </Select>
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
        {translateTo(lang, "Theme")}
        <Select
          value={jasonTheme}
          onValueChange={(value) => {
            setJasonTheme(value as JasonTheme);
          }}
        >
          <SelectTrigger className="w-[6.5rem] ml-auto">
            <SelectValue placeholder={translateTo(lang, "Theme")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dark">{translateTo(lang, "Dark")}</SelectItem>
            <SelectItem value="light">{translateTo(lang, "Light")}</SelectItem>
            {/* <SelectItem value="system">
              {translateTo(lang, "System")}
            </SelectItem> */}
          </SelectContent>
        </Select>
      </Label>

      <Label className="border-1 h-[4rem] cursor-pointer p-3.5 rounded-(--radius) bg-(--secondary)/25">
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
              {translateTo(lang, "English")}
              <ReactCountryFlag countryCode={"US"} svg />
            </SelectItem>
            <SelectItem value="es">
              {translateTo(lang, "Spanish")}
              <ReactCountryFlag countryCode={"ES"} svg />
            </SelectItem>
            <SelectItem value="pt">
              {translateTo(lang, "Portuguese")}
              <ReactCountryFlag countryCode={"PT"} svg />
            </SelectItem>
            <SelectItem value="fr">
              {translateTo(lang, "French")}
              <ReactCountryFlag countryCode={"FR"} svg />
            </SelectItem>
          </SelectContent>
        </Select>
      </Label>
    </section>
  );
}
