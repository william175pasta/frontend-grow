
var h1Id = "title";
var h2Id = "title2";

var inputId = "text_input";


var inputElement = document.getElementById(inputId)
var hElement = document.getElementById(h1Id);
var h2Element = document.getElementById(h2Id);
var mySelect = document.getElementById("mySelect")



var index = mySelect.selectedIndex;
var mySelectSize = mySelect.options[index].innerHTML;





inputElement.addEventListener("input", function () {
    var price = 100;
    var count = inputElement.value;
    hElement.innerHTML = +count + "件 " + " 總價: " + price * count;
    console.log(count);


})

mySelect.addEventListener("input", function () {
    var index = mySelect.selectedIndex;
    var options = mySelect.options[index];
    var size = options.innerHTML;
    h2Element.innerHTML = " siz: " + size;
    console.log(size);



})


function size(size) {

    var sizeContent = size
    console.log(sizeContent)
    document.getElementById('sizeTxt').innerHTML = sizeContent;

}



