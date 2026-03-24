import vscodeLogo from "@/assets/vscode-logo.png";
import ShortcutSection from "@/components/ShortcutSection";
import { sections } from "@/data/shortcuts";

const Index = () => {
  const col1 = sections.filter((s) => s.column === 1);
  const col2 = sections.filter((s) => s.column === 2);
  const col3 = sections.filter((s) => s.column === 3);

  return (
    <div className="min-h-screen bg-background p-6 print:p-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <img src={vscodeLogo} alt="Visual Studio Code" className="h-10 mb-1" />
          <p className="text-foreground text-sm">Window 快捷鍵操作 繁體中文版</p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          <div>
            {col1.map((s) => (
              <ShortcutSection key={s.title} title={s.title} shortcuts={s.shortcuts} />
            ))}
          </div>
          <div>
            {col2.map((s) => (
              <ShortcutSection key={s.title} title={s.title} shortcuts={s.shortcuts} />
            ))}
          </div>
          <div>
            {col3.map((s) => (
              <ShortcutSection key={s.title} title={s.title} shortcuts={s.shortcuts} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-muted-foreground mt-6">
          其他系統操作快捷鍵以及未分配之快捷鍵，請詳見：
          <a
            href="https://aka.ms/vscodekeybindings"
            className="underline hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            aka.ms/vscodekeybindings
          </a>
        </p>
      </div>
    </div>
  );
};

export default Index;
