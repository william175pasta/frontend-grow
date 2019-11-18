//ex1
function ex1() {

    var list1 = [1, 2, 3, 4, 5];
    var list2 = [6, 7, 8, 9, 10];
    var resultList = list1.concat(list2)
    console.log(resultList);
    document.getElementById('ex1').innerHTML = resultList
}
//ex2_1
function ex2_1() {
    var nameList = ['Will', 'Jerry', 'Tom', 'Jack'];
    var resultList = delete nameList[2]
    console.log(nameList);
    document.getElementById('ex2_1').innerHTML = nameList
}
//ex2_2
function ex2_2() {
    var nameList = ['Will', 'Jerry', 'Tom', 'Jack'];
    var resultList = nameList.splice(2, 1);
    console.log(nameList);
    document.getElementById('ex2_2').innerHTML = nameList
}
//ex3
function ex3() {
    var nameList = ['Will', 'Jerry', 'Tom', 'Jack'];
    var resultList = nameList.push('Mark', 'Bill')
    console.log(nameList);
    document.getElementById('ex3').innerHTML = nameList
}
//ex4
function ex4() {
    var nameList = ['Will', 'Jerry', 'Tom', 'Jack'];
    var resultList = nameList.splice(2, 0, 'Mark')
    resultList = nameList.splice(0, 0, 'Bill')
    console.log(nameList);
    document.getElementById('ex4').innerHTML = nameList
}
//ex5
function ex5() {
    var list = [];
    for (i = 1; i <= 30; i++) {
        if ((i % 2) !== 0) {
            list.push(i)
        }
    }
    console.log(list);
    document.getElementById('ex5').innerHTML = list
}
//ex6
function ex6() {
    var list = [1, 3, 5, 7, 9, 11];
    list.sort(function (a, b) {
        return b - a
    });
    console.log(list);
    document.getElementById('ex6').innerHTML = list
}
