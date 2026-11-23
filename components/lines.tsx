// Renders "\n" in copy as a deliberate line break: every line becomes a
// block-level span (see `.line` in globals.css). Text without "\n" is untouched.
export function Lines({ text }: { text: string }) {
  const lines = text.split("\n");
  if (lines.length === 1) return text;

  return lines.map((line, index) => (
    <span className="line" key={line}>{line}{index < lines.length - 1 ? " " : ""}</span>
  ));
}
