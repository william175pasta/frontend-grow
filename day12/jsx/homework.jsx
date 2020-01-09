class Homework extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            name: 'ok',
            textcontenet: ''
        }
    }
    handler(e) {
        const textValue = e.target.value
        this.setState({ value: textValue })
        console.log(textValue)
    }
    //按鈕按下輸出 文字框內容到<p></p>
    printText() {
        const textcontenet = this.state.value
        this.setState({ textcontenet: textcontenet })
    }

    render() {
        return (
            <div>
                <h1>練習一:</h1>
                <h2>{this.state.value}</h2>
                <input
                    text="text"
                    onChange={this.handler.bind(this)}
                    value={this.state.value}
                />
                <button type="button" onClick={this.printText.bind(this)}>{this.state.name}</button>
                <p>{this.state.textcontenet}</p>
            </div>
        )
    }
}
ReactDOM.render(<Homework />, document.getElementById('root'))