# ipasu

ITパスポート試験のための、ミニマルな用語集 & クイズ SPA。
Pure HTML / CSS / JavaScript のみで構成された、依存ゼロの静的サイトです。

## 構成

```
.
├── index.html   # エントリポイント
├── styles.css   # モノクローム ミニマルデザイン
└── app.js       # 用語・問題データとクイズロジック
```

問題と用語は `app.js` 内の `TERMS` / `QUESTIONS` 定数として保持しています。
追加や編集は同ファイルを編集するだけで完了します（ビルド不要）。

## ローカルで確認する

```bash
python3 -m http.server 8000
# ブラウザで http://localhost:8000/ を開く
```

## Vercel へのデプロイ

静的サイトなので、Vercel にゼロコンフィグでそのままデプロイできます。

- GitHub 連携: Vercel ダッシュボードで本リポジトリを import するだけ。
- CLI:
  ```bash
  npm i -g vercel
  vercel --prod
  ```

ビルドコマンド・出力ディレクトリの設定は不要です。
