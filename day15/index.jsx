import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';

//點擊計數器

const App = () => {
    const [count, setcount] = useState(0)

    const onClickCountEvent = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <button type="button" onClick={onClickCountEvent}> 按鈕(+1)</button>
            <p>數字:{count}</p>
        </div>
    )
}

ReactDOM.render(
    <App />
    , document.getElementById('root'))