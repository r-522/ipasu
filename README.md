# ipasu

ITパスポート試験のための、ミニマルな用語集 & クイズ SPA。
Pure HTML / CSS / JavaScript のみで構成された、依存ゼロの静的サイトです。

## 構成

```
.
├── index.html          # エントリポイント
├── styles.css          # モノクローム ミニマルデザイン
├── app.js              # 用語・問題データとクイズロジック
└── prompts/
    └── add-questions.md  # 日次スケジューラ用、問題追加プロンプト
```

問題と用語は `app.js` 内の `TERMS` / `QUESTIONS` 定数として保持しています。
追加や編集は同ファイルを編集するだけで完了します（ビルド不要）。

選択肢（ア／イ／ウ／エ）の順序はクイズ出題時にランタイムでシャッフルされるため、
`QUESTIONS` データ側ではラベル（ア/イ/ウ/エ）を付けずに選択肢文だけを記述します。

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

## 日次スケジューラで問題を自動追加する

`prompts/add-questions.md` に、日次タスクとして Claude に問題を追加させるためのプロンプトを同梱しています。
プロンプト本文のコピペで運用でき、cron / GitHub Actions / Claude Code の `/loop` などから呼び出せます。

例（cron で毎朝 9 時に実行）:

```cron
0 9 * * * cd /path/to/ipasu && claude --print "$(cat prompts/add-questions.md)" >> /var/log/ipasu-add.log 2>&1
```

詳細な運用方法・スキーマ・ルールは `prompts/add-questions.md` を参照してください。
