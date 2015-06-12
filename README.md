# Keanux-Personal

[![Join the chat at https://gitter.im/Keanux/Keanux-Public](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Keanux/Keanux-Public?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

這是一個一起學習Node.js和React的計畫，透過一起實作，製作個人的開源寫作平台。

- [Hackpad](https://keanux.hackpad.com/INTRO-rDTHFqtALl2)
- [Facebook Page](https://www.facebook.com/trykeanux)
- [Keanux-Personal Demo](http://keanux.com:8080)
- [Keanux](http://keanux.com)

# 功能

目前僅提供顯示範例頁面，編寫及其他功能的部分正在開發，有任何錯誤或功能上的想法都歡迎在[Issue](https://github.com/Keanux/keanux-personal/issues)留言。

# 環境安裝

參考[安裝說明](docs/setup.md)或是使用[Keanux-Vagrant](https://github.com/Keanux/keanux-vagrant)

# 快速開始

1. 將專案clone 至本機

        git clone git@github.com:Keanux/keanux-personal.git

1. 準備好node.js環境，打開Terminal進入專案資料夾，使用以下指令安裝並建立測試資料庫，然後啟動網站

        npm install
        node data/seed.js
        node server.js

1. 開啟瀏覽器輸入 http://localhost:8080

# 更新到最新版本

1. 新增/編輯 keanux-personal/.git/config 檔
1. 使用文字編輯器開啟新檔，加上下列文字，並另存新檔名為 .git/config 於keanux-personal 檔案夾下。

        [remote "upstream"]
                url = https://github.com/Keanux/keanux-personal.git
                fetch = +refs/heads/*:refs/remotes/upstream/*
        [branch "upstream/master"]
                remote = upstream
                merge = refs/heads/master

1. 命令列於 keanux-personal 目錄中執行：

        git pull upstream master

# Copyright & License

Copyright (c) 2015 Keanux - Released under the [MIT license](LICENSE).
