import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';

//狀態開關器

const App = () => {
    const [open, setopen] = useState(true)
    const [openText, setopenText] = useState("")
    const onClickCountEvent = () => {
        if (open) {
            setopenText("開啟")
            setopen(false)
        } else {
            setopenText("關閉")
            setopen(true)
        }
    }


    return (
        <div>
            <button type="button" onClick={onClickCountEvent}> 開關-按鈕</button>
            <p>狀態開關器:{openText}</p>
        </div>
    )
}

ReactDOM.render(
    <App />
    , document.getElementById('root'))