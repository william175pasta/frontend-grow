import AddressPicker from './AddressPicker.jsx';
import ReceiptType from './ReceiptType.jsx'
import React from 'react';

import Button from '@material/react-button';
import { Cell, Grid, Row } from '@material/react-layout-grid';




import '../scss/main.scss'
class App extends React.Component {
    render = () => {
        return (
            <form>
                <Grid>
                    <Row>
                        <Cell columns={4}></Cell>
                        <Cell columns={4}><ReceiptType /></Cell>
                        <Cell columns={4}></Cell>
                        <br />
                    </Row>
                    <Row>
                        <Cell columns={4}></Cell>
                        <Cell columns={4}><AddressPicker /></Cell>
                        <Cell columns={4}></Cell>
                        <br />
                    </Row>
                    <Row>
                        <Cell columns={4}></Cell>
                        <Cell columns={4} style={{ margin: "0 auto" }}>
                            <Button style={{ fontSize: "25px" }} type="submit" outlined disabled={false}>
                                submit
                            </Button>
                        </Cell>
                        <Cell columns={4}></Cell>
                    </Row>
                </Grid>
            </form>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));