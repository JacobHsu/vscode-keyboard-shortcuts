# VS Code 鍵盤快捷鍵參考表（繁體中文）

> Visual Studio Code Keyboard Shortcuts Reference — Windows · Traditional Chinese

一個可列印的 VS Code Windows 快捷鍵速查表，以繁體中文呈現，採三欄式排版，涵蓋日常開發所需的全部常用快捷鍵。

## 功能特色

- **三欄式版面**：一般/基礎/導航、搜尋/游標/語言/編輯器、檔案/顯示/Debug/終端機
- **列印優化**：`print:` Tailwind 樣式確保紙張版面整潔
- **深色/淺色主題**：透過 CSS 變數切換，無 flash
- **完全靜態**：無後端、無資料庫、無外部 API

## 技術棧

| 層次 | 技術 |
|------|------|
| 框架 | React 18 + TypeScript |
| 建置工具 | Vite 5 |
| 樣式 | Tailwind CSS 3 + shadcn/ui |
| 路由 | React Router v6 |
| 測試 | Vitest + Testing Library |
| 套件管理 | pnpm |

## 快速開始

### 前置需求

- Node.js >= 18
- pnpm >= 9

### 安裝與執行

```bash
# 複製專案
git clone https://github.com/your-username/vscode-keyboard-shortcuts.git
cd vscode-keyboard-shortcuts

# 安裝依賴
pnpm install

# 啟動開發伺服器（http://localhost:8080）
pnpm dev
```

### 其他指令

```bash
pnpm build        # 生產建置（輸出至 dist/）
pnpm preview      # 本地預覽生產版本
pnpm test         # 執行測試
pnpm test:watch   # 測試監看模式
pnpm lint         # ESLint 檢查
```

## 專案結構

```
src/
├── assets/          # 靜態資源（VS Code logo）
├── components/
│   ├── ShortcutSection.tsx   # 單一快捷鍵分類區塊
│   └── ui/                   # shadcn/ui 元件
├── data/
│   └── shortcuts.ts          # 所有快捷鍵資料
├── pages/
│   ├── Index.tsx             # 主頁面（三欄排版）
│   └── NotFound.tsx          # 404 頁面
└── lib/
    └── utils.ts              # 工具函式
```

## 自訂快捷鍵資料

所有快捷鍵集中於 `src/data/shortcuts.ts`，結構如下：

```ts
{
  title: "分類名稱",   // 顯示標題
  column: 1 | 2 | 3,  // 所在欄位
  shortcuts: [
    { key: "Ctrl+P", desc: "移至檔案..." },
  ],
}
```

新增或修改快捷鍵只需編輯此檔案，無需更動任何元件。

## 列印使用

在瀏覽器開啟頁面後，使用 `Ctrl+P`（或 `Cmd+P`）列印。建議設定：

- **紙張**：A4 / Letter 橫向
- **邊距**：最小（Minimum）
- **縮放**：依版面自動調整（Fit to page）

## 常用

`Ctrl+Shift+V` 開啟 Markdown 預覽

## 貢獻

歡迎提交 Pull Request。請遵循以下原則：

1. 快捷鍵描述使用繁體中文
2. 保持與官方 [VS Code 按鍵快速鍵](https://aka.ms/vscodekeybindings) 一致
3. 新增快捷鍵時請確認 Windows 平台行為

## 授權

[MIT](LICENSE)
