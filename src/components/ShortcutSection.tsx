interface Shortcut {
  key: string;
  desc: string;
}

interface ShortcutSectionProps {
  title: string;
  shortcuts: Shortcut[];
}

const ShortcutSection = ({ title, shortcuts }: ShortcutSectionProps) => (
  <div className="mb-5">
    <h2 className="text-lg font-bold text-heading mb-1 border-b border-divider pb-1">{title}</h2>
    <div>
      {shortcuts.map((s, i) => (
        <div
          key={i}
          className={`flex justify-between items-baseline py-[3px] px-1 text-sm ${
            i % 2 === 1 ? "bg-row-alt" : ""
          } hover:bg-row-hover transition-colors`}
        >
          <span className="text-foreground font-mono text-xs shrink-0 w-[55%]">{s.key}</span>
          <span className="text-foreground text-right">{s.desc}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ShortcutSection;
