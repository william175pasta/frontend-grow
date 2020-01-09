class Result extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { count, handler } = this.props
        return (
            <div>
                <h2>點擊數:{count}</h2>
                <button type="button" onClick={handler}>Click(Result)</button>
            </div>
        )
    }
}
export default Result
