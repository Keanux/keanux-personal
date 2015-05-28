# 環境安裝說明

[Mac安裝說明](#mac安裝說明)

[Ubuntu安裝說明](#ubuntu安裝說明)

---


## Mac安裝說明

本說明為根據Os X 10.10.3完全乾淨的環境來設定Keanux的開發環境

### 安裝Homebrew

1. Homebrew是一套Mac專屬的套件管理工具，可以很方便的幫助我們安裝常用的工具，請使用以下指令安裝

		ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

1. 安裝完成後，可以使用以下指令檢查是否正常運作

		brew doctor

### 安裝node.js (nvm)

1. 我們可以直接透過Homebrew來安裝nvm

		brew install nvm

1. 為了讓之後可以在Terminal快速使用nvm指令，所以我們必須把nvm的路徑加入.bash_profile之中，你可以使用以下指令快速將路徑加入.bash_profile

		echo "source $(brew --prefix nvm)/nvm.sh" >> .bash_profile

1. 為了讓指令馬上生效，我們重新載入.bash_profile

		. ~/.bash_profile

1. 安裝最新版本的node.js

		nvm install 0.12.4
		nvm use 0.12.4

1. 設定node.js default的版本

		nvm alias default 0.12.4
		nvm use default

1. 確認node.js有安裝成功

		node -v

### 下載Keanux程式

使用git clone到本機

		git clone https://github.com/Keanux/keanux-personal ~/Documents/keanux-personal

### 修改設定並啟動網站

1. 打開Terminal，進入專案所在位置

		cd ~/Documents/keanux-personal

1. 還原需要的package

		npm install

1. 建立資料表並且塞入測試資料

		node data/seed.js

1. 執行網站

		node server.js

1. 打開browser到http://localhost:8080，看到網站就代表成功囉！

---

## Ubuntu安裝說明

本說明為根據ubuntu 14.04完全乾淨的環境來設定Keanux的開發環境

### 安裝node.js (nvm)

1. 安裝Build所需使用的工具

		sudo apt-get update
		sudo apt-get install build-essential libssl-dev

1. 安裝nvm

		curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.3/install.sh | bash

1. 安裝完成後，重新開啟terminal就可以使用 **nvm** 指令了

1. 安裝最新版本的node.js

		nvm install 0.12.4
		nvm use 0.12.4

1. 設定node.js default的版本

		nvm alias default 0.12.4
		nvm use default

1. 確認node.js有安裝成功

		node -v

### 安裝Git (版本控制系統)

使用apt-get 安裝

		sudo apt-get install git

### 下載Keanux程式

使用git clone到本機

		git clone https://github.com/Keanux/keanux-personal ~/Documents/keanux-personal

### 修改設定並啟動網站

1. 打開Terminal，進入專案所在位置

		cd ~/Documents/keanux-personal

1. 還原需要的package

		npm install

1. 建立資料表並且塞入測試資料

		node data/seed.js

1. 執行網站

		node server.js

1. 打開browser到http://localhost:8080，看到網站就代表成功囉！
