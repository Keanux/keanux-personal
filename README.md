# Keanux-Personal

[![Join the chat at https://gitter.im/Keanux/Keanux-Public](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Keanux/Keanux-Public?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/Keanux/keanux-personal.svg?branch=master)](https://travis-ci.org/Keanux/keanux-personal)
[![Code Climate](https://codeclimate.com/github/Keanux/keanux-personal/badges/gpa.svg)](https://codeclimate.com/github/Keanux/keanux-personal)

這是一個一起學習 Node.js 和 React 的計畫，透過一起實作，製作個人的開源寫作平台。

- [Hackpad](https://keanux.hackpad.com/INTRO-rDTHFqtALl2)
- [Facebook Page](https://www.facebook.com/trykeanux)
- [Keanux-Personal Demo](http://keanux.com:8080)
- [Keanux](http://keanux.com)

# 功能

目前僅提供顯示範例頁面，編寫及其他功能的部分正在開發，有任何錯誤或功能上的想法都歡迎在 [Issue](https://github.com/Keanux/keanux-personal/issues) 留言。

# 環境安裝

參考[安裝說明](docs/setup.md)或是使用 [Keanux-Vagrant](https://github.com/Keanux/keanux-vagrant)

# 快速開始

將專案 clone 至本機

```
$ git clone git@github.com:Keanux/keanux-personal.git
```

啟動 Mongo DB 環境

```
$ mongod --dbpath <資料庫存放位置>
```

準備好 node.js 環境，打開 Terminal 進入專案資料夾，使用以下指令安裝依賴套件並建立測試資料庫

```
$ npm install
$ npm run-script seed
$ npm run-script start
```

開啟瀏覽器輸入 http://localhost:8080

# 測試程式

測試Server端程式碼

```
$ gulp mocha
```

測試Client端程式碼

```
$ gulp karma
```

測試網站功能 （自動化測試）

```
$ ./node_modules/protractor/bin/webdriver-manager update
$ npm start
// 開啟另外一個視窗
$ gulp e2e
```

執行所有測試

```
$ npm test
```

# 更新到最新版本

新增遠端 Repo 網址 `upstream`，此名稱可以任意修改

```
$ git remote add upstream https://github.com/Keanux/keanux-personal.git
```

更新遠端最新程式碼（用 merge 方式）

```
$ git pull upstream master
```

更新遠端最新程式碼（用 rebase 方式）

```
$ git pull --rebase upstream master
```

# Copyright & License

Copyright (c) 2015 Keanux - Released under the [MIT license](LICENSE).
