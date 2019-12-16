
let BackName = ["貓", "牛", "虎", "狗"]
let FrontName = BackName.map((value, index) => ((index + "阿" + value)))
console.log(FrontName) //["0阿貓", "1阿牛", "2阿虎", "3阿狗"]

BackName.map((v) => {
    opname = '寵物:' + v
    console.log(opname)
})
// 第一個  (1和2一樣)
let inputFunction = (v) => {
    let resultName = "阿" + v
    console.log(resultName)
}
BackName.forEach(inputFunction)
// 第二個  (1和2一樣) (2化簡了)
BackName.forEach((v) => {
    let resultName = "阿" + v
    console.log(resultName)
})

let userList = ["姓名", "電話", "地址"]
let liName = userList.map((value) => (
    ("<li>" + value + ":" + "</li>")
))
let array = []
array = liName
let arrayData = ''
for (var index = 0; index < array.length; index++) {
    arrayData += array[index]
    console.log(array[index])  //<li>姓名:</li><li>電話:</li><li>地址:</li>
}
document.getElementById('root1').innerHTML = arrayData

//callback function sample
let arrayNumber = [1, 2, 3, 4, 5];
function printNumber(number) {
    console.log(number * 100)
}
for (let index = 0; index < arrayNumber.length; index++) {
    let result = arrayNumber[index]
    printNumber(result)
}

//es5  (合併)
let number1 = [1, 2, 3, 4]
let number2 = [5, 6, 7, 8]
let result12 = number1.concat(number2)
console.log(result12) //[1, 2, 3, 4, 5, 6, 7, 8]
//es6  ...names(合併)
let array1 = ['hi', true, 66]
let array2 = [10, 20, ...array1]
console.log(array2)                // [10, 20, "hi", true, 66]
console.log(...number2, ...array2) //5 6 7 8 10 20 "hi" true 66
//延伸
let str = '你66AA好嗎'
let chars = [...str]
console.log(chars) // ["你", "6", "6", "A", "A", "好", "嗎"]