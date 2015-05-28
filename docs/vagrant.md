# Vagrant 使用說明

使用 vagrant 可以在本機搭建模擬實際部署的虛擬機器。

1. 還本機一個乾淨
2. 相對於 virtualbox 來說，完全 command line 操作
3. 假如環境被玩壞，可以直接快速重新搭建
4. ......

## Mac setup

### 安裝 Homebrew (請見 [setup.md](setup.md#安裝homebrew))

### 使用 Brew Cask 來安裝 virtualbox 與 vagrant
```
brew tap phinze/homebrew-cask
brew install brew-cask
brew cask install virtualbox
brew cask install vagrant
```

## Ubuntu setup

### 安裝 virtualbox 與 vagrant
```
sudo apt-get install virtualbox
sudo apt-get install vagrant virtualbox-dkms
```

## 開始使用

在這之前，你可以在 tools/vagrant.sh 中設定 mysql 的 root 密碼(MYSQL_PASSWORD)，預設為 "password"

```
# 設置 vm 並開啟
vagrant up

# 連入並開始使用 Ubuntu VM
vagrant ssh

# 關閉 vm
vagrant halt

# 移除 vm
vagrant destroy
```

進入 VM 之後，可以參考 [setup.md](setup.md#修改設定並啟動網站-1) 來啟動環境！