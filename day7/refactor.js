//jquery 
$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/users",
        function (userData) {
            //name
            document.getElementById('name').innerHTML = createColumnList('name', userData);
            //phone
            document.getElementById('phone').innerHTML = createColumnList('phone', userData);
            //address
            document.getElementById('address').innerHTML = createAddressList(userData);
        });
    /**
     * 建立列表清單
     * @param {*} type 
     * @param {*} dataList 
     */    
    function createColumnList(type, dataList) {
        var column = "<td>" + type + "</td>";
        for (var i = 0; i < dataList.length; i++) {
            column += "<td>" + dataList[i][type] + "</td>";
        }
        return column;
    }
    /**
     * 建立地址列表清單
     * @param {*} dataList 
     */
    function createAddressList(dataList) {
        var column = "<td>" + "address" + "</td>";
        for(var i=0; i < dataList.length; i++) {
            // 先找到address地址節點
            var addressObj = dataList[i].address;
            // 再往下找物件內的節點，用點的方式
            var street = addressObj.street;
            var suite =addressObj.suite;
            var geo = addressObj.geo.lat + addressObj.geo.lng;
            var reuslt = street + suite + geo;
            column += "<td>" + reuslt + "</td>";
        }
        return column;
    }
});
