//jquery 
$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/users",

        function (data) {
            var arry = [data];

            //name
            var nameList = data.map(item => Object.values(item)[1]);
            // console.log(nameList.length);
            console.log(nameList);
            var column = "<td>" + "name" + "</td> "
            for (var i = 0; i < nameList.length; i++) {
                column += "<td>" + nameList[i] + "</td> "
            }
            document.getElementById('name').innerHTML = column

            //phone
            var phoneList = data.map(item => Object.values(item)[5]);
            // console.log(phoneList.length)
            console.log(phoneList)
            var column = "<td>" + "phone" + "</td> "
            for (var s = 0; s < phoneList.length; s++) {
                column += "<td>" + phoneList[s] + "</td> "
            }
            document.getElementById('phone').innerHTML = column

            //address
            var addressList = data.map(item => Object.values(item)[4]);
            console.log(addressList)
            var column = "<td>" + "address" + "</td> "
            for (var x = 0; x < addressList.length; x++) {
                var addls = addressList.map(item => Object.values(item));
                var addressContent = addls[x]

                //geo
                var addgeo = addls.map(item => Object.values(item)[4]);
                var geols = addgeo.map(item => Object.values(item));


                column += "<td>" + addressContent + geols[x] + "</td> "
                console.log(geols[x])
            }

            document.getElementById('address').innerHTML = column
        });
})



