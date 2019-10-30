
document.getElementById('tableDom').innerHTML =
    "<tr><td id=season1></td><td id=month1></td><td id=month2></td><td id=month3></td></tr>" +
    "<tr><td id=season2></td><td id=month4></td><td id=month5></td><td id=month6></td></tr>" +
    "<tr><td id=season3></td><td id=month7></td><td id= month8></td><td id= month9></td></tr>" +
    "<tr><td id=season4></td><td id= month10></td><td id= month11></td><td id= month12></td></tr>";

x = document.getElementById('tableDom').innerHTML;
console.log("x:" + x);

var monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var seasonList = ["春天", "夏天", "秋天", "冬天"];

for (var s = 0; s < seasonList.length; s++) {
    var seasonAll = s + 1;
    var seasonName = seasonList[s];
    console.log(seasonAll);
    console.log(seasonName);

    var season = "season" + seasonAll;
    console.log(season);
    document.getElementById(season).innerHTML = seasonName;
    y = document.getElementById(season).innerHTML;
    console.log("y:" + y);
}
for (var m = 0; m < monthList.length; m++) {
    var monthAll = m + 1;
    var monNumber = monthList[m];
    console.log(monNumber);

    var month = "month" + monthAll;
    console.log("month:" + month);
    document.getElementById(month).innerHTML = monNumber;
}










