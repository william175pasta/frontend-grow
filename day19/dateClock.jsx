import React from 'react';

class DateClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            now: "TIME"
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.timer_plus.bind(this), 1000)
        console.log(999)
    }

    timer_plus() {
        let time_obj = new Date();
        let year = time_obj.getFullYear();
        //getMonth()方法依據當地時間來傳回日期  物件中的月份，傳回值是一個0到11的正整數，0代表一月，1代表二月，以此類推。 
        let month = (time_obj.getMonth() + 1 < 10 ? '0' : '') + (time_obj.getMonth() + 1);
        // getDay()  返回值是 0（周日） 到 6（周六） 之间的一个整数。
        let day = (time_obj.getDay() < 10 ? '0' : '') + time_obj.getDay();
        //getHours()方法是用來取得日期物件當中本地時間的小時，getHours()方法的傳回值是一個介於0~23的正整數。
        let hour = (time_obj.getHours() < 10 ? '0' : '') + time_obj.getHours();
        //getMinutes()方法是用來取得日期物件當中本地時間的分，傳回值是一個0到59的正整數。
        let min = (time_obj.getMinutes() < 10 ? '0' : '') + time_obj.getMinutes();
        //getSeconds()方法依據當地時間來傳回日期物件中的秒數，傳回值是一個0到59的正整數。
        let sec = (time_obj.getSeconds() < 10 ? '0' : '') + time_obj.getSeconds();
        let nowtime = year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + sec
        this.setState({ now: nowtime })
    }
    openTools() {
        if (this.interval) {
            clearInterval(this.interval)
            this.interval = false
        } else {
            this.interval = setInterval(this.timer_plus.bind(this), 1000)
        }
    }
    render = () => {
        return (
            <div>
                <h1>台灣時間:{this.state.now}</h1>
                <button onClick={this.openTools.bind(this)}>暫停</button>
            </div>
        )
    }
}
export default DateClock





