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

type Item = `["${string}"]`;

export function unwrapIndex(item: Item): string {
  const unwrapRegExp: RegExp = /(?<=\[\").+(?=\"\])|(?<=\[)\d+(?=\])/g;

  const unwrapped = item.match(unwrapRegExp)![0];

  return unwrapped;
}
