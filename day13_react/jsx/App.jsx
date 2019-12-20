import AddressPicker from './AddressPicker.jsx';
import ReceiptType from './ReceiptType.jsx'
import '../scss/main.scss'
class App extends React.Component {
    render = () => {
        return (
            <form>
                <AddressPicker />
                <hr />
                <ReceiptType />
                <button type="submit" disabled={true}>submit</button>
            </form>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));