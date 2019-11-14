//jquery 
$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/users",

        function (data) {
            var arry = [data];
            console.log(typeof data);
            console.log(arry);

            $.each(data, function (index, values) {
                //取出陣列中的一個個物件：[{}{}{}]→{}{}{}
                console.log("name :" + values.name);

            })
        });


})
