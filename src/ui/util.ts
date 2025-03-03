export function getMarginLeft(offset: number): string {
  const dict: Record<number, string> = {
    0: "ml-0",
    1: "ml-1",
    2: "ml-2",
    3: "ml-3",
    4: "ml-4",
    5: "ml-5",
    6: "ml-6",
    7: "ml-7",
    8: "ml-8",
    9: "ml-9",
    10: "ml-10",
    11: "ml-11",
    12: "ml-12",
    13: "ml-13",
    14: "ml-14",
    15: "ml-15",
  };

  return dict[offset] ?? "";
}

export function isValidPointNotation(k: string): boolean {
  if (/^\d+/.test(k)) return false;

  const UNVALID_CHARS: Array<string> = [
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
  ];

  for (const ch of UNVALID_CHARS) if (k.includes(ch)) return false;

  return true;
}

export const pathRegExp: RegExp =
  /(?<=^)(?!\.).+?(?=\.|\[|$)|(?<=\.).+?(?=\.|\[|$)|\[\d+\]|\[\".+\"\]/g;

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
    value = value.replace(/\n/g, "\\n");
    value = value.replace(/\"/g, '\\"');
    return `"${value}"`;
  }
  if (typeof value === "number") return `${value}`;
  if (typeof value === "boolean") return `${value.toString()}`;
  if (value === null) return "null";
  if (typeof value === "object") return `${JSON.stringify(value)}`;
  return "";
}

export async function copyToClipboard(text: string) {
  try {
    if (!navigator.clipboard) throw new Error("Clipboard API not supported");

    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
}

export const counterFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
});

export function editObjectValue(
  obj: Record<string, unknown>,
  oldKey: string,
  newKey: string,
  newValue?: unknown
): Record<string, unknown> {
  let newObj: Record<string, unknown> = {};

  if (oldKey === newKey) {
    newObj = { ...obj };
    if (newValue !== undefined) newObj[oldKey] = newValue;
    return newObj;
  }

  const entries: Array<[string, unknown]> = Object.entries(obj);

  for (const [key, value] of entries) {
    if (key === oldKey) {
      if (newValue !== undefined) newObj[newKey] = newValue;
      else newObj[newKey] = value;
      continue;
    }
    newObj[key] = value;
  }

  return newObj;
}
