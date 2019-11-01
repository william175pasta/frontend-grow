var monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var seasonList = ["春天", "夏天", "秋天", "冬天"];

// 利用倍數做月份資料切割等份
var multiple = Math.round(monthList.length / seasonList.length);
var rowData = "";

for(var s=0; s < seasonList.length; s++) {
  var startIndex = s * multiple;
  var endIndex = (s + 1) * multiple;
  // 將兩筆資料做合併整合
  var seasonData = { 
    name: seasonList[s],
    // 利用陣列原生提供slice切割陣列方法
    monthData: monthList.slice(startIndex, endIndex)
  };
  // 先建立第一個欄位
  var column = "<td>"+ seasonList[s] +"</td>";
  for(var m=0; m < seasonData.monthData.length; m++) {
      // 再利用累加方式把後面月份的字串全部加起來
      column += "<td>"+seasonData.monthData[m]+"</td>";
  }
  // 外層共跑四次，把一列裡面的4個欄位加起來後，再用列<tr>包起來
  rowData += ("<tr>"+column+"</tr>");
}
// 最後把結構show到html上
document.getElementById('tableDom').innerHTML = rowData;