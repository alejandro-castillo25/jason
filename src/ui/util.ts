import type { Lang } from "./lang";

export function isValidPointNotation(k: string): boolean {
  if (/^\d+/.test(k)) return false;

  const INVALID_CHARS = [
    ".",
    "[",
    "]",
    " ",
    "|",
    "<",
    ">",
    "!",
    '"',
    "'",
    "`",
    "{",
    "}",
    "@",
    "#",
    "^",
    "*",
    "+",
    "-",
    "~",
    "&",
    "?",
    "\\",
    "/",
    "(",
    ")",
    "=",
    "%",
    ":",
  ] as const;

  for (const ch of INVALID_CHARS) if (k.includes(ch)) return false;

  return true;
}

export const pathRegExp: RegExp =
  /\[\".+?\"\]|(?<=^)(?!\.).+?(?=\.|\[|$)|(?<=\.).+?(?=\.|\[|$)|\[\d+\]/g;

export function getPathChild(path: string): string {
  const matches: null | Array<string> = path.match(pathRegExp);
  if (matches === null) return "";

  return matches[matches.length - 1];
}

export function getPathParent(path: string): string {
  const matches: null | Array<string> = path.match(pathRegExp);
  if (matches === null) return "";

  return matches[0];
}

export function getPathCurrentParentOnly(path: string): string {
  const matches: null | Array<string> = path.match(pathRegExp);
  if (matches === null) return "";

  return matches[matches.length - 2] ?? "";
}

export function getObjectLength(obj: object): number {
  return Object.keys(obj).length;
}

export function* pathIterator(path: string) {
  const items: null | Array<string> = path.match(pathRegExp);
  if (items === null) return;

  for (let i: number = 0; i < items.length; i++) yield items[i];
}

export type Item = `["${string}"]` | `[${number}]`;

export function unwrapIndex(item: Item): string {
  const unwrapRegExp: RegExp = /(?<=\[\").+(?=\"\])|(?<=\[)\d+(?=\])/g;

  const unwrapped = item.match(unwrapRegExp)![0];

  return unwrapped;
}

export function evalFormat(
  value: string | number | null | object | boolean
): string {
  if (typeof value === "string") {
    value = value
      .replace(/\n/g, "\\n")
      .replace(/\"/g, '\\"')
      .replace(/\\/g, "\\\\");
    return `"${value}"`;
  }
  if (typeof value === "number") return `${value}`;
  if (typeof value === "boolean") return `${value.toString()}`;
  if (value === null) return "null";
  if (typeof value === "object") return `${JSON.stringify(value)}`;
  return "";
}

export const counterFormatter = (lang: Lang) =>
  new Intl.NumberFormat(lang, {
    notation: "compact",
    maximumFractionDigits: 1,
  });

export const itemSizeFormatter = (lang: Lang) =>
  new Intl.NumberFormat(lang, {
    useGrouping: true,
  });

interface EditObjectValueParams {
  obj: Record<string, unknown> | Array<unknown>;
  oldKey: string;
  newKey: string;
  newValue?: unknown;
}

export function editObjectValue({
  obj,
  oldKey,
  newKey,
  newValue,
}: EditObjectValueParams): Record<string, unknown> | Array<unknown> {
  const isArray = Array.isArray(obj);

  if (isArray) {
    const index = Number.parseInt(oldKey);
    if (isNaN(index) || index < 0 || index >= obj.length)
      throw new Error(
        "Cannot change array indices, oldKey is not a valid Array index!"
      );

    if (oldKey !== newKey)
      throw new Error(
        "Cannot change array indices, oldKey and newKey must be the same!"
      );

    const newArray = [...obj];
    if (newValue !== undefined) newArray[index] = newValue;

    return newArray;
  }

  if (oldKey === newKey) {
    const newObj = { ...obj };
    if (newValue !== undefined) newObj[newKey] = newValue;

    return newObj;
  }

  const entries = Object.entries(obj);
  let keyExists = false;
  const updatedEntries = entries.map(([key, value]) => {
    if (key === oldKey) {
      keyExists = true;
      return [newKey, newValue !== undefined ? newValue : value];
    }
    return [key, value];
  });

  if (!keyExists) return obj;

  return Object.fromEntries(updatedEntries);
}

export function isValidURL(value: string): boolean {
  value = value.trim();

  if (/\s/.test(value)) return false;

  const VALID_PROTOCOLS = [
    "http://",
    "https://",
    "ftp://",
    "ftps://",
    "ws://",
    "wss://",
    "mailto:",
    "geo:", //? Mostly for mobile environments
    "tel:",
    "sip:",
    "sips:",
    "sms:",
  ] as const;

  for (let validProtocol of VALID_PROTOCOLS)
    if (value.startsWith(validProtocol))
      return value.length > validProtocol.length;

  return false;
}

export function isValidColor(value: string): boolean {
  value = value.trim();
  return isValidKeywordColor(value) || isValidHex(value);
}

export function isValidHex(value: string): boolean {
  const hex: RegExp = /^#(?:(?:[a-f0-9]{8})|(?:[a-f0-9]{6})|(?:[a-f0-9]{3}))$/i;
  return hex.test(value);
}

export function isValidKeywordColor(value: string): boolean {
  const VALID_COLORS = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
    "rebeccapurple",
  ] as const;

  for (const color of VALID_COLORS) if (color === value) return true;

  return false;
}

export type SupportedFiles = "json" | "toml" | "csv" | "xml" | "yaml";

export function getFileType(filename: string): SupportedFiles | null {
  const JSON5 = [".json", ".jsonc", ".json5"] as const;

  for (const extension of JSON5)
    if (filename.endsWith(extension)) return "json";

  if (filename.endsWith(".toml")) return "toml";
  if (filename.endsWith(".csv")) return "csv";
  if (
    filename.endsWith(".xml") ||
    filename.endsWith(".html") ||
    filename.endsWith(".svg")
  )
    return "xml";
  if (filename.endsWith(".yaml") || filename.endsWith(".yml")) return "yaml";

  return null;
}

export const BRACKET_GUIDES_COLORS = [
  "var(--primary)",
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
] as const;

//!THIS took me a while...

export function hasValidMathChars(expr: string): boolean {
  return /^[0-9\+\-/\s\*\.\(\[\{\)\]\}\^\e_]+$/.test(expr);
}

export function hasOnlyNums(expr: string): boolean {
  return /^(?:\d|\.|_)+$/.test(expr);
}

export const countChars = (word: string, ch: string) => {
  let counter: number = 0;
  for (let i = 0; i < word.length; i++) if (word[i] === ch) counter++;

  return counter;
};

/**
 *
 * @param expr Expression
 * @returns The expression with the parsed values or the same expr if it's not ok
 */
const closeUnclosedBrackets = (expr: string) => {
  const stackA: Array<number> = [];
  const stackB: Array<number> = [];

  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === "(") {
      stackA.push(1);
    }
    if (expr[i] === ")") {
      if (!stackA.pop()) {
        stackB.push(1);
      }
    }
  }
  expr = "(".repeat(stackB.length).concat(expr);

  expr = expr.concat(")".repeat(stackA.length));

  return expr;
};

export function evalMath(expr: string): number {
  let processedExpr = expr
    .replace(/\[|\{/g, "(")
    .replace(/\]|\}/g, ")")
    .replace(/\^/g, "**")
    .replace(/([)\d])\s*(?=[(])/g, "$1*")
    .replace(/([)])\s*(?=[(\d])/g, "$1*");

  if (!/^\(?\d+\)?$/g.test(processedExpr))
    processedExpr = closeUnclosedBrackets(processedExpr);

  try {
    return new Function(`return ${processedExpr}`)();
  } catch (error: any) {
    throw new Error(`Invalid expression: ${error.message}`);
  }
}

export type LangDict =
  | "es"
  | "en"
  | "pt"
  | "fr"
  | "zh"
  | "hi"
  | "ar"
  | "ru"
  | "ja"
  | "de"
  | "ko"
  | "it";

export function getLangIconCode(value: LangDict): string | null {
  const dict: Record<LangDict, string> = {
    en: "US",
    es: "ES",
    fr: "FR",
    pt: "BR",
    zh: "CN",
    ar: "SA",
    de: "DE",
    hi: "IN",
    ja: "JP",
    ru: "RU",
    ko: "KR",
    it: "IT",
  };

  return dict[value] ?? null;
}

export const parseSpecialChars = (key: string) => {
  return key.replace(/\\/g, "\\\\").replace(/\"/g, '\\"');
};

export function isValidDate(value: string): boolean {
  const date: Date = new Date(value);
  return !Number.isNaN(date);
}

export const getFilenameNoExtension = (filename: string): string => {
  let filename0: Array<string> | string = filename.split(/\./g);
  filename0.pop();
  return filename0.join(".");
};


export function hslToHex(h: number, s: number, l: number) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * @see https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 * 
 * 
 */

export function lightenDarkenColor(col: string, amt: number): string {
  let usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  let num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
