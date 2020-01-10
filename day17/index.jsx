import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(them => ({
    a: {
        cursor: 'pointer',
        border: '1px solid red',
        width: '50px',
        height: '30px',
        textAlign: 'center',
        backgroundColor: '#f87',
    },
    size: {
        display: 'flex',
        justifyContent: 'space-around',
    }

}))

// 一件 219元 , 3件89折 , 5件79折
const App = () => {
    const classes = useStyles();
    const [selectSize, setselectSize] = useState("");
    const [selectNumber, setselectNumber] = useState(0);
    const [total, settotal] = useState(0);
    const handleChangeSize = (event) => {
        let selectNumber = event.target.value;
        console.log(selectNumber)
        setselectSize(selectNumber)
    }
    const handlerChangeNumber = (event) => {
        let value = event.target.value
        console.log("value(數量):" + value)
        const pice = 219
        setselectNumber(value)
        settotal(pice * value)
    }
    const sizeOnClick = (e) => {
        let sizeout = event.target.name;
        setsizeout(sizeout)
        console.log("size : " + sizeout)
    }
    const [allnumber, setallnumber] = useState([]) //<-- 直接指定allnumber 是空陣列
    const shoppingcartOnClick = () => {
        if (sizeout == undefined || selectNumber == NaN) {
            alert("請確認輸入是否正確!")
        } else {
            const shoppingcart =
                ` 購物車內容: 
                尺寸:${sizeout} ,數量:${selectNumber}件 ,小計:${total}元`
            console.log(shoppingcart)
            let number = parseFloat(selectNumber) //把 selectNumber 轉成 數字型別
            let newarry = allnumber.push(number) //把輸入的 件數 加入allnumber陣列裡 

            console.log(allnumber)
            setselectSize();
            setselectNumber();
            settotal()
            setsizeout()
        }
    }

    const [sizeout, setsizeout] = useState("")
    const CheckoutBTN = () => {
        let price = 219
        let sum = 0;
        for (let i = 0; i < allnumber.length; i++) {
            sum = sum + allnumber[i]
            console.log("sum:  " + sum)
        }
        if (sum > 2 && sum < 5) {
            settotal(Math.round(price * sum * 0.89))// 四捨五入Math.round()
        } else if (sum > 5) {
            settotal(Math.round(price * sum * 0.79))
        } else {
            settotal(Math.round(price * sum))
        }
        setselectSize();
        setselectNumber();
        setsizeout()
        setallnumber([])
        alert("你的總金額計算中...")
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Paper>
                    <Typography component="div" style={{ backgroundColor: '#eee', }}>
                        <div >
                            <Grid container spacing={3} className="cards">
                                <Grid item xs={12} >
                                    <h3>day17</h3>
                                </Grid>
                                <Grid item xs={12} sm={4} className="cardsContent" >
                                    <h3>輸入購買數量&尺寸</h3>
                                    <h4>一件 219元 , 3件89折 , 5件79折</h4>
                                    <div className={classes.size}>

                                        <a className={classes.a} onClick={sizeOnClick} name="XS">XS</a>
                                        <a className={classes.a} onClick={sizeOnClick} name="S">S</a>
                                        <a className={classes.a} onClick={sizeOnClick} name="M">M</a>
                                        <a className={classes.a} onClick={sizeOnClick} name="L">L</a>
                                        <a className={classes.a} onClick={sizeOnClick} name="XL">XL</a>
                                    </div>
                                    <div>
                                        <h2>數量:</h2>
                                        <select value={selectNumber} onChange={handlerChangeNumber}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                        </select>
                                    </div>
                                    <p>
                                        尺寸: {sizeout} 數量: {selectNumber}
                                    </p>
                                </Grid>
                                <Grid item xs={12} >
                                    <button type="button" onClick={shoppingcartOnClick}>加入購物車</button>
                                    <button type="button" onClick={CheckoutBTN}>結帳</button>
                                </Grid>
                                <Grid item xs={12} >
                                    <p>
                                        總價格: {total}
                                    </p>
                                </Grid>
                            </Grid>
                        </div >
                    </Typography>
                </Paper>
            </Container>
        </React.Fragment>
    )
}

ReactDOM.render(
    <App />
    , document.getElementById('root'))