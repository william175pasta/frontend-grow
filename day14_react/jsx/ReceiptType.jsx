import Card, { CardPrimaryContent, } from "@material/react-card";
import { Body2, Headline6, } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import TextField, { HelperText, Input } from '@material/react-text-field';



class ReceiptType extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            receiptType: 2,
            taxId: "",
            receiptOptions: []
        }
    }
    handler = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => {

        })

    }
    removeFromArray = (array, value) => {
        return array.filter((element) => {
            return element != value
        })
    }
    checkboxhandler = (e) => {
        const newValue = e.target.value
        const name = e.target.getAttribute("attributeName")
        let values = this.state[name]

        if (values.includes(newValue)) {
            values = this.removeFromArray(values, newValue)
        } else {
            values.push(newValue)
        }
        if (name == 'receiptOptions' && !values.includes("byMail")) {
            values = []
        }
        this.setState({ [name]: values }, () => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <div>
                <Card>
                    <CardPrimaryContent>
                        <Headline6 tag="p" >
                            發票類型
                        </Headline6>
                        <div style={{ padding: "1rem" }}>
                            <Body2 tag="div">
                                <label>
                                    <input type="radio"
                                        name="receiptType"
                                        value="2"
                                        checked={this.state.receiptType == 2}
                                        onChange={this.handler}
                                    />個人
                </label><br />
                                <label>
                                    <input type="radio"
                                        name="receiptType"
                                        value="3"
                                        checked={this.state.receiptType == 3}
                                        onChange={this.handler}
                                    />公司,

                                    <TextField
                                        style={{ "marginLeft": "1rem" }}
                                        outlined
                                        label='統一編號'
                                        leadingIcon={<MaterialIcon role="button" icon="museum" />}
                                    >
                                        <Input
                                            value={this.state.taxId}
                                            onChange={this.handler} />
                                    </TextField>
                                </label>
                                <br />
                                <br />
                                <div>
                                    <span>郵寄選項</span><br />
                                    <label>
                                        <input type="checkbox"
                                            name="receiptOptions[]"
                                            attributeName="receiptOptions"
                                            value="byMail"
                                            checked={this.state.receiptOptions.includes("byMail")}
                                            onChange={this.checkboxhandler}
                                        />
                                        實體郵寄(+$30)
                    </label>
                                    <br />
                                    <label className="bysend">
                                        <input type="checkbox"
                                            name="receiptOptions[]"
                                            attributeName="receiptOptions"
                                            value="byTime"
                                            checked={this.state.receiptOptions.includes("byTime")}
                                            disabled={
                                                !this.state.receiptOptions.includes("byMail")// 如果byMail 有引入 他就不禁用 ; 沒引入則不能用
                                            }
                                            onChange={this.checkboxhandler}
                                        />
                                        限時掛號(再 $30 =60)
                    </label>
                                </div>
                            </Body2>
                        </div>
                    </CardPrimaryContent>
                </Card>
            </div>

        )
    }
}
export default ReceiptType