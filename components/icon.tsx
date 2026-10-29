type IconName = "collect" | "truck" | "sort" | "grade" | "pack" | "ship" | "reuse" | "recycle" | "arrow" | "check";

export function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    collect: <><path d="M7 8h10l-1 12H8L7 8Z" /><path d="M9 8V5h6v3M5 8h14" /></>,
    truck: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>,
    sort: <><path d="M5 7h14M8 12h8M10 17h4" /><path d="m17 15 2 2 3-4" /></>,
    grade: <><path d="M4 5h16v14H4z" /><path d="M8 9h8M8 13h5" /></>,
    pack: <><path d="m4 8 8-4 8 4-8 4-8-4Z" /><path d="m4 8 8 4 8-4v8l-8 4-8-4V8Z" /></>,
    ship: <><path d="M3 16h18l-2 4H5l-2-4Z" /><path d="M7 16V8h8l3 4v4M15 8V4H9v4" /></>,
    reuse: <><path d="M7 7h7a5 5 0 0 1 5 5" /><path d="m16 9 3 3 3-3M17 17h-7a5 5 0 0 1-5-5" /><path d="m8 15-3-3-3 3" /></>,
    recycle: <><path d="m10 4 2-2 3 5-3 1M18 11l3 1-3 5-2-2M9 19l-1 3-5-4 2-2" /><path d="M8 6 5 11M19 14h-6M8 19h6" /></>,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
