# Expense Tracker 「老爹の私房錢」

- AlphaCamp class 3 project:A17
- 使用 Node.js 及 Express 框架打造出的網頁應用程式
- 簡便、容易使用，連老爹也可以上手！

## Environment Introduction 適用環境介紹

for windows , MacOS

- Express: 4.17.1
- Node.js v10.16.3

## Web Page 網頁畫面

登入頁面

![Image of indexpage](https://upload.cc/i1/2019/12/04/3uyHCD.png)

註冊頁面

![Image of indexpage](https://upload.cc/i1/2019/12/04/NZUv4p.png)

應用程式頁面

![Image of indexpage](https://upload.cc/i1/2019/12/04/wVLhkq.png)

## Features 專案功能

- 內建一個種子使用者，含有五筆種支出資料

  | 種子帳號 | email             | password |
  | -------- | ----------------- | -------- |
  | no.1     | user1@example.com | 12345678 |

* 使用者可以建立帳號去管理支出明細
* 使用者可以使用第三方登入 Facebook 去建立帳號
* 可以新增、修改、刪除支出紀錄
* 使用可以依照不同分類來瀏覽支出

## Installation 安裝專案

1.從 github 下載 資料夾

```
$ https://github.com/lingnli/A17ExpenseTracker
```

2.開啟 Terminal，進入此專案資料夾

```
cd A17ExpenseTracker
```

3.使用 npm 安裝套件

```
$ npm install
```

4.進入 models/seeds 資料夾中，產生種子資料

```
$ cd models/seeds
$ node seeder.js
```

5.執行專案

```
$ npm run dev
```

並開啟網址
`http://localhost:3000`

## 若需使用 Facebook 登入

在專案中使用 Facebook 所提供的第三方登入，若需使用請按以下步驟操作

1.前往<a href="https://developers.facebook.com/">facebook for developers </a>啟用

2.選擇 整合 Facebook 登入

3.在基本資料中取得應用程式編號及應用程式密鑰

4.移至 cd A17ExpenseTracker
/config/passport.js 中，將 FacebookStrategy 後方 client 資料修改為第三步驟取得的編號及密鑰

```
clientID: "xxxxxxxx"
clientSecret: "xxxxxxxx",
callbackURL: http://localhost:3000/auth/facebook/callback
```

## 維護及更新

- Google 驗證現正趕工中
- 預計增加 chart.js 產生支出圓餅圖方便使用
