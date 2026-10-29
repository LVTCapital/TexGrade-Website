type IconName = "sort" | "grade" | "pack" | "ship" | "arrow" | "check";

export function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    sort: <><path d="M5 7h14M8 12h8M10 17h4" /><path d="m17 15 2 2 3-4" /></>,
    grade: <><path d="M4 5h16v14H4z" /><path d="M8 9h8M8 13h5" /></>,
    pack: <><path d="m4 8 8-4 8 4-8 4-8-4Z" /><path d="m4 8 8 4 8-4v8l-8 4-8-4V8Z" /></>,
    ship: <><path d="M3 16h18l-2 4H5l-2-4Z" /><path d="M7 16V8h8l3 4v4M15 8V4H9v4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
