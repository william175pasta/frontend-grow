import React, { useState } from 'react';

const InputTitle = () => {
    const [array, setarray] = useState([])
    const [textTitle, settextTitle] = useState("")
    const [count, setcount] = useState(0)


    const userContent = ["身高", "體重", "血型", "年紀"]

    const textOnChange = (e) => {
        let text = e.target.value
        settextTitle(text)
        console.log(textTitle)
    }


    const AddOnClick = () => {
        if (textTitle == "" || (count > userContent.length)) {
            alert("請輸入標題(或操作錯誤!)")
        } else {
            settextTitle(textTitle)
            console.log(textTitle)
            settextTitle("")
            array.push(userContent[count] + textTitle)

            console.log(array)
            console.log("count : " + count)
            setcount(count + 1)
        }
    }

    const ClearOnClick = () => {
        setcount(0)
        settextTitle("")
        console.log("Clear")

    }

    return (
        <div>
            <h6>輸入個人資料</h6>
            <h5>1.身高, 2.體重, 3.血型, 4.年紀</h5>
            <input onChange={textOnChange} type="text" value={textTitle} />
            <button onClick={AddOnClick} type="button">ADD</button>
            <button onClick={ClearOnClick} type="button">Clear</button>

            <ol>
                {array.map((item, index) => {
                    console.log("item: " + item)
                    return <li key={index}>{item}</li>
                })}
            </ol>
        </div>
    )
}
export default InputTitle