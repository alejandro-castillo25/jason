const BurgerIcon = ({ className = "" }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-menu-2 ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6l16 0" />
    <path d="M4 12l16 0" />
    <path d="M4 18l16 0" />
  </svg>
);
const PlusIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-plus ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5l0 14" />
    <path d="M5 12l14 0" />
  </svg>
);

const LoadFileIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-file-upload ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M12 11v6" />
    <path d="M9.5 13.5l2.5 -2.5l2.5 2.5" />
  </svg>
);

const PasteIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-clipboard ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
    <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
  </svg>
);

const DownloadIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-download ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
    <path d="M7 11l5 5l5 -5" />
    <path d="M12 4l0 12" />
  </svg>
);

const SettingsIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-settings ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  </svg>
);

const TrashIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-trash ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 7l16 0" />
    <path d="M10 11l0 6" />
    <path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
);

const ObjectIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-braces ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2" />
    <path d="M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2" />
  </svg>
);

const ArrayIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-brackets ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 4h-3v16h3" />
    <path d="M16 4h3v16h-3" />
  </svg>
);

const LogoIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-code-plus ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 12h6" />
    <path d="M12 9v6" />
    <path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
    <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
  </svg>
);

const ValueIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-circles ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M6.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <path d="M17.5 17m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  </svg>
);

const CopyIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-copy ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
  </svg>
);

const FromTextIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-text-scan-2 ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    <path d="M8 12h8" />
    <path d="M8 9h6" />
    <path d="M8 15h4" />
  </svg>
);

const EditIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-pencil ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
    <path d="M13.5 6.5l4 4" />
  </svg>
);

const LinkIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-external-link ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
    <path d="M11 13l9 -9" />
    <path d="M15 4h5v5" />
  </svg>
);

const LengthIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-ruler-2 ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17 3l4 4l-14 14l-4 -4z" />
    <path d="M16 7l-1.5 -1.5" />
    <path d="M13 10l-1.5 -1.5" />
    <path d="M10 13l-1.5 -1.5" />
    <path d="M7 16l-1.5 -1.5" />
  </svg>
);

const ChevronRightIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-chevron-right ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 6l6 6l-6 6" />
  </svg>
);

const Link2Icon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-link ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 15l6 -6" />
    <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
    <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
  </svg>
);

const ColorIcon = ({ className = "", style = {} as React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    style={style}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-palette ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
    <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </svg>
);

const CodeIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-outline icon-tabler-code ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l4 4l-4 4" />
    <path d="M14 4l-4 16" />
  </svg>
);

const Icons = {
  Burger: BurgerIcon,
  Plus: PlusIcon,
  LoadFile: LoadFileIcon,
  Paste: PasteIcon,
  Download: DownloadIcon,
  Settings: SettingsIcon,
  Trash: TrashIcon,
  ArrayIcon,
  ObjectIcon,
  Logo: LogoIcon,
  Value: ValueIcon,
  Copy: CopyIcon,
  FromText: FromTextIcon,
  Edit: EditIcon,
  Link: LinkIcon,
  Link2: Link2Icon,
  Length: LengthIcon,
  ChevronRight: ChevronRightIcon,
  Color: ColorIcon,
  Code: CodeIcon
} as const;

export type IconName = keyof typeof Icons;

interface GetIconProps {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
}

export function GetIcon({ name, className = "", style = {} }: GetIconProps) {
  return Icons[name]({ className, style }) ?? <></>;
}
