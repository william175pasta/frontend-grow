import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(them => ({
    btn: {
        backgroundColor: '#f44',
        color: '#fff',
        width: '80px',
        height: '80px',
        borderRadius: '15px',
        textAlign: 'center',
        fontSize: '20px',

    }

}))

const GameTest = () => {
    const classes = useStyles();
    const [userCH, setUserCH] = useState()
    const [number, setNumber] = useState()
    const [computerCH, setComputerCH] = useState("")
    const [result, setResult] = useState()

    useEffect(() => {
        setNumber(Math.random())
        if (number < 0.34) {
            setComputerCH("石頭")
        }
        else if (number <= 0.67) {
            setComputerCH("剪刀")
        } else {
            setComputerCH("布")
        }
    }, [result])
    //玩家選擇剪刀按鈕
    const shearsBTN = () => {
        setUserCH("剪刀")
        alert("Loading...")
        if (computerCH == "剪刀") {
            setResult("平手")
        }
        else if (computerCH == "布") {
            setResult("玩家..贏了")
        }
        else {
            setResult("玩家..輸了")
        }
        console.log(`電腦 :  ${computerCH}`)
        setTimeout(() => {
            alert(`電腦 : ${computerCH}  * 請按<<重新開始>>`)
        }, 500)
        //玩家選擇石頭按鈕
    }
    const rockBTN = () => {
        setUserCH("石頭")
        alert("Loading...")
        if (computerCH == "石頭") {
            setResult("平手")
        }
        else if (computerCH == "剪刀") {
            setResult("玩家..贏了")
        }
        else {
            setResult("玩家..輸了")
        }
        console.log(`電腦 :  ${computerCH}`)
        setTimeout(() => {
            alert(`電腦 : ${computerCH}  * 請按<<重新開始>>`)
        }, 500)
        //玩家選擇布按鈕
    }
    const clothBTN = () => {
        setUserCH("布")
        alert("Loading...")
        if (computerCH == "布") {
            setResult("平手")
        }
        else if (computerCH == "石頭") {
            setResult("玩家..贏了")
        }
        else {
            setResult("玩家..輸了")
        }
        console.log(`電腦 :  ${computerCH}`)
        setTimeout(() => {
            alert(`電腦 : ${computerCH}  * 請按<<重新開始>>`)
        }, 500)

    }
    const resulthBTN = () => {
        setResult("")
    }
    return (
        <div>
            <button className={classes.btn} type="button" onClick={shearsBTN}>剪刀</button>
            <button className={classes.btn} type="button" onClick={rockBTN}>石頭</button>
            <button className={classes.btn} type="button" onClick={clothBTN}>布</button><br /><br />
            <button type="button" onClick={resulthBTN}>重新開始</button>
            <h3>結果 : {result} </h3>
        </div>
    )
}
export default GameTest