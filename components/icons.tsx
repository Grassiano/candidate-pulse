type IconProps = { size?: number; className?: string };

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

export const SearchIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size, className)}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const BellIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const PlusIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)} strokeWidth={2.5}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const ChevLeft = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const ChevRight = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const ChevDown = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const CompareIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <rect x="3" y="4" width="7" height="16" rx="1.5" />
    <rect x="14" y="4" width="7" height="16" rx="1.5" />
  </svg>
);

export const CalendarIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const DownloadIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const ShareIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export const AlertIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)} strokeWidth={2.2}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export const BulbIcon = ({ size = 18, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2z" />
  </svg>
);

export const TranscriptIcon = ({ size = 16, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const ChartIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M3 3v18h18" />
    <polyline points="7 14 11 10 15 12 21 6" />
  </svg>
);

export const BoltIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const BuildingIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M3 21h18" />
    <path d="M5 21V8l7-5 7 5v13" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

export const GlobeIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 1 0 20" />
    <path d="M12 2a15 15 0 0 0 0 20" />
  </svg>
);

export const CodeIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const ChatIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const ClockIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const FileIcon = ({ size = 14, className }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
