var temNumber = 0;/* 暫存數字 */
var temOper = 0;/* 暫存運算子 */
var temC = 0;/* 清空 */
var Variable = 0;/* 暫存運算值 */

/* 數字處理 */
function numBu(str) {
    if (temOper == null) {

        document.getElementById("ans").value = str;
        temOper = 0;
        return;
    };
    /*如果輸入為0按鈕 輸出框還是為0 */
    if (document.getElementById("ans").value == 0) {
        document.getElementById("ans").value = str;
    }
    /*輸入數字做字串連接 */
    else {
        document.getElementById("ans").value += str;
    }

}

/* 連續運算無等號*/
function operBu(str) {
    equal();
    Variable = document.getElementById("ans").value;
    temOper = str;
    document.getElementById("ans").value = 0;
}


/* 運算有等號 */

function equal() {

    switch (temOper) {
        case '+':
            document.getElementById("ans").value = parseFloat(Variable) + parseFloat(document.getElementById("ans").value);
            break;

        case '-':
            document.getElementById("ans").value = parseFloat(Variable) - parseFloat(document.getElementById("ans").value);
            break;

        case '*':
            document.getElementById("ans").value = parseFloat(Variable) * parseFloat(document.getElementById("ans").value);
            break;

        case '/':
            document.getElementById("ans").value = parseFloat(Variable) / parseFloat(document.getElementById("ans").value);
            break;

        default:

            break;
    }

    temNumber = null;
    temOper = null;

}

function OAO() {

    temNumber = 0;
    temOper = 0;
    temC = 0;
    document.getElementById("ans").value = '0';

}
