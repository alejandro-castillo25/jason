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

export const counterFormatter = new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1,
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
