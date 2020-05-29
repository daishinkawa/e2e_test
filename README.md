# e2e_test
Jest + Puppeteer によるE2Eテスト環境

## 使い方
本プロジェクトソースを丸ごとコピーして、プロジェクトフォルダのルートパスに配置のうえ、テストを追加してご利用ください。

## セットアップ方法
### Yarnのインストール
※ 必須ではありませんが是非
https://classic.yarnpkg.com/ja/docs/install/#mac-stable

### 必要パッケージインストール
```
$ cd e2e_test
$ yarn
```

### テスト実行
```
$ yarn test
```

## 開発TIPS
### 各フォルダについて
一応、以下のような感じでフォルダを切ってます。
```
tests: テスト定義（describe）を記述したファイルを配置する
utils: テストに利用するモジュールを配置する
screenshots: テスト時のスクリーンショットを配置する
```

### package.json の scripts を活用する
テスト実行前後のDB準備、DBクリーンアップを実施するにあたり、
Jest の GlobalSetup や GlobalTeardown を利用してコーディングするのは結構ハードルが高いので、
package.json の scripts にコマンドを記述してやるのが良いと思います。

### 実際のブラウザ操作を確認する
```
# e2e_test/jest-puppeteer.config.js

module.exports = {
  launch: {
    headless: false, # ブラウザを立ち上げる
    slowMo: 100,     # 動作を少しゆっくりにする
    devtools: true
  }
}
```