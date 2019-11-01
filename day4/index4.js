//   班級
var classList = [];

for (var c = 0; c < 10; c++) {
    classList.push(`第${c+1}班`);
}
console.log('班級清單:', classList);

//   學生
var studentList = [];

for (var s = 0; s < 30; s++) {
    studentList.push(`學生${s+1}號`);
}
console.log('學生清單:', studentList);

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




