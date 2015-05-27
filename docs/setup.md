# 環境安裝說明

本說明為根據ubuntu 14.04完全乾淨的環境來設定Keanux的開發環境

## 安裝node.js (nvm)

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
		
## 安裝Git (版本控制系統)

使用apt-get 安裝

		sudo apt-get install git
		
## 下載Keanux程式	

使用git clone到本機

		git clone https://github.com/Keanux/keanux-personal ~/Documents/keanux-personal
		
		
## 安裝及設定mysql

1. 使用apt-get 安裝，過程中必須設定root帳號的密碼

		sudo apt-get install mysql-server
		
1. 安裝完畢，使用剛剛設定的密碼登入mysql

		mysql -u root -p
		
1. 建立網站所需要的資料庫 **keanux**，並倒入預先準備好的資料

		CREATE DATABASE keanux;
		USE keanux;
		SOURCE ~/Documents/keanux-personal/data/keany.sql;
		
## 修改設定並啟動網站

1. 打開**Keanux**資料夾下的server.js，修改以下部分的設定

		var connection = mysql.createConnection({			host     : 'localhost',			port     : '3306',			user     : 'root',			password : '剛剛設定的密碼',			database : 'keanux'		});
1. 還原需要的package
		npm install1. 執行網站
		node server.js
1. 打開browser到http://localhost:8080，看到網站就代表成功囉！