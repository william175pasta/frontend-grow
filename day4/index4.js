//   班級
var classList = new Array();

for (var c = 0; c < 10; c++) {
    xx = c + 1;
    classList[c] = `第${xx}班`;
    console.log(`第${xx}班`);
}
console.log(classList);

//   學生
var studentList = new Array();

for (var i = 0; i < 30; i++) {
    x = i + 1;
    studentList[i] = `學生${x}號`;
    console.log(`學生${x}號`);

}
console.log(studentList);


//判斷型態
var class1 = typeof (classList);
var student1 = typeof (studentList);
console.log(student1, class1);

var multiple = Math.round(studentList.length / classList.length);
var rowData = "";
for (var s = 0; s < classList.length; s++) {

    var startIndex = s * multiple;
    var endIndex = (s + 1) * multiple;

    var classData = {
        name: classList[s],
        studentData: studentList.slice(startIndex, endIndex)

    };
    var column = "<td>" + classList[s] + "</td>";
    console.log(column);
    for (var cl = 0; cl < classData.studentData.length; cl++) {
        column += "<td>" + classData.studentData[cl] + "</td>";

    }
    rowData += ("<tr>" + column + "</tr>");
}
document.getElementById('tableDOM').innerHTML = rowData;




