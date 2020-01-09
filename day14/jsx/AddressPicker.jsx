import TaiwanPostalCode from './TaiwanPostalCode.json'

import Card, { CardPrimaryContent, } from "@material/react-card";
import { Body2, Headline6, } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import TextField, { HelperText, Input } from '@material/react-text-field';
import Select, { Option } from '@material/react-select';



class AddressPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: "新北市",
            district: "",
            postalCode: "",
            address: ""
        }
        this.postalCode = TaiwanPostalCode
        this.cities = Object.keys(this.postalCode)
    }

    handler = (e) => {
        let { name, value } = e.target  // 等於  e.target.name 和 e.target.value 
        if (name == 'city' && this.state.city != value) {  //如果name 進來是city 然後這city又不等於之前的值 // 
            this.setState({ [name]: value, "district": "", "postalCode": "" }, () => { //狀態district,postalCode清除
                console.log(this.state)
            })
        } else if (name == "district" && this.state.district != value) {
            const cityData = this.postalCode[this.state.city]
            const postalCode = cityData[value] //抓郵遞號碼
            console.log(postalCode)
            this.setState({ [name]: value, "postalCode": postalCode }, () => {
                console.log(this.state)
            })
        } else {
            this.setState({ [name]: value }, () => {
                console.log(this.state)
            })
        }
    }
    clearAddress = (e) => {
        this.setState({ address: "" })
    }

    getCityOption = (cities) => {
        return cities.map((city) => {
            return (<Option key={city} value={city}>{city}</Option>)
        })
    }

    getDistrictyOptions = (districts) => {
        return districts.map((district) => {
            return (<Option key={district} value={district}>{district}</Option>)
        })
    }

    render = () => {
        const cityOptions = this.getCityOption(this.cities)
        const cityData = this.postalCode[this.state.city]
        // console.log(cityData) //抓縣市裡面 的各區資料
        const districts = Object.keys(cityData)
        // console.log(districts) //抓縣市裡面 的各區名稱
        const districtyOptions = this.getDistrictyOptions(districts)
        return (
            <div>
                <Card>
                    <CardPrimaryContent>
                        <h1>Address Picker</h1>
                        <Body2 tag="div">
                            <label>
                                <Select
                                    name="city"
                                    label='  縣/市 '
                                    value={this.state.city}
                                    onChange={this.handler}
                                    // enhanced
                                    outlined>
                                    {cityOptions}
                                </Select>
                            </label>
                            <br />
                            <label>
                                <Select style={{ width: "200px" }}
                                    name="district"
                                    label="市/區"
                                    value={this.state.district}
                                    onChange={this.handler}
                                    outlined
                                // enhanced
                                >
                                    {districtyOptions}
                                </Select>
                            </label>
                            <br />
                            <label>
                                <TextField
                                    style={{ "marginTop": "1rem" }}
                                    outlined
                                    label='郵遞區號'
                                    disabled
                                >
                                    <Input
                                        name="postalCode"
                                        value={this.state.postalCode}
                                        onChange={this.handler} />
                                </TextField>
                            </label>
                            <br />
                            <label>
                                <TextField
                                    style={{ "marginTop": "1rem" }}
                                    outlined
                                    label='地址'
                                    value={this.state.value}
                                    helperText={<HelperText>請輸入正確地址以寄送商品</HelperText>}
                                    onTrailingIconSelect={this.clearAddress}
                                    trailingIcon={<MaterialIcon role="button" icon="delete" />}
                                    leadingIcon={<MaterialIcon role="button" icon="home" />}
                                >
                                    <Input
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.handler} />
                                </TextField>
                            </label>
                        </Body2>
                    </CardPrimaryContent>
                </Card>
            </div >
        )
    }
}
export default AddressPicker; 