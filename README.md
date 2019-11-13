## 前端成長紀錄100天

### 1.透過JS呈現在頁面中間文字為"Hello Word"。
> 限制條件：文字顏色為藍色，字體大小為36px

### 2.建立五筆資料，內容其為姓名、性別、年齡，顯示在頁面上。
> 限制條件：性別(男、女)文字顏色分別藍色、紅色 <br>
> 提示：使用物件陣列，例：{ name: 'jerry', nature: 'boy', age: 32 }

### 3.顯示表格月份及標示季節
> 限制條件：使用定義的陣列資料呈現內容 <br>
<pre>
  <code>
    var monthList = [1,2,3,4,5,6,7, ..., 12];
    var seasonList = ['春天', '夏天', '秋天', '冬天'];
  </code>
</pre>

### 4.xxx學校全校共有30人，因應小班教學制，所以分了10個班，每班人數為3人，請畫出班級表格
> 限制條件：使用兩筆陣列清單呈現班級表格
<pre>
  <code>
    var studentList = [1,2,3,4,5,6,7, ..., 30];
    var classList = ['第一班', '第二班', ..., 第十班];
  </code>
</pre>

### 5.建立加法運算器
> 限制條件：建立計算機版型，0~9數字按鈕,+號按鈕,歸零C按鈕,等於按鈕
<pre>
<img src="./images/day5.png" style="zoom:40%" />
</pre>

### 6. 使用JQuery套件Ajax呼叫測試API，取得每個人資訊清單，用console顯示每個名稱
> 限制條件：API Url https://jsonplaceholder.typicode.com/users