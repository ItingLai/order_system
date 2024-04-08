# order_system 點餐系統+後台管理功能

使用 [Vue](https://cn.vuejs.org/) +[ElementUI](https://element-plus.org/en-US/)結合完成的點餐系統+後台管理.

## 客製化
- 可透過更改Logo或者修改 `.env` 名稱進行客製化
- 可下載並修改[FrontEnd](https://github.com/ItingLai/order_system_Frontend)後自行編譯
- 修改資料庫設定檔，請視當前主機帳號密碼修改
  ![image](https://github.com/ItingLai/order_system/blob/main/docs/img/config_setting.png)

## 功能介紹
### 前台點餐系統
- 點餐系統功能有點餐、查詢餐點、歷史點餐紀錄、結帳
- 透過點擊菜單品項上的數量+或-，即可選擇餐點數量
- 點選購物車輸入取餐資訊並送出，即可完成點餐，點餐完成時會顯示餐點資訊、桌號、單號、金額
![image](https://github.com/ItingLai/order_system/blob/main/docs/img/點餐.gif)
- 透過輸入點餐輸入的資訊可查詢當前餐點狀況
- 可查詢近30天內的所有點餐紀錄
![image](https://github.com/ItingLai/order_system/blob/main/docs/img/歷史訂單.gif)
- 顧客可以透過意見回饋功能回饋商家須改進地方
![image](https://github.com/ItingLai/order_system/blob/main/docs/img/評論.gif)
### 商家後台管理系統
- 後台管理須由商家使用密碼進行登入後台管理
- 商家可透過後台管理點餐單，點餐單可進行分類，分為尚未接單、已接單、已完成、已取消狀態
- 商家可以透過按鈕選擇該筆訂單的狀態，使用者方可透過前台查詢的功能查詢該筆訂單狀態
![image](https://github.com/ItingLai/order_system/blob/main/docs/img/訂單.gif)
- 可以透過新增菜單資訊,如:餐點名稱、價格、描述、餐點狀態(停賣或者販售中)，並上傳該餐點圖片即可完成菜單新增品項
- 可以點擊已新增的餐點修改該餐點資訊或刪除該品項
![image](https://github.com/ItingLai/order_system/blob/main/docs/img/後台菜單管理.gif)
- 可透過營業額查詢功能，查詢當天營業額及各品項販售數量(需輸入管理密碼)
![image](https://github.com/ItingLai/order_system/blob/main/docs/img/銷售紀錄.gif)
- 可以透過管理顧客意見回饋功能查詢顧客的意見回饋
![image](https://github.com/ItingLai/order_system/blob/main/docs/img/回饋總覽.gif)
