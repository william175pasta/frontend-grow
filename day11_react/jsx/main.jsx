import Result from './Result.jsx'
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {
            count: 0,
            title: '進度條js'
        };
    }

    countPlusOneHandler() {
        this.setState({ count: this.state.count + 1 })
    }
    handler = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }
    render() {
        return (
            <div>
                <h1>練習一:按鈕</h1>
                <Result count={this.state.count} handler={this.countPlusOneHandler.bind(this)} /><br />
                <button type="button" onClick={this.countPlusOneHandler.bind(this)}>Click(main)</button>
                <h1>練習二:輸入框</h1>
                <h2>輸出框:{this.state.title}</h2>
                <input
                    text="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handler}
                />
            </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));