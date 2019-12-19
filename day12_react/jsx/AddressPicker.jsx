import TaiwanPostalCode from './TaiwanPostalCode.json'

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

    getCityOption = (cities) => {
        return cities.map((city) => {
            return (<option key={city} value={city}> {city}</option>)
        })
    }

    getDistrictyOptions = (districts) => {
        return districts.map((district) => {
            return (<option key={district} value={district}> {district}</option>)
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
                <h1>Address Picker(地址選擇器)</h1>
                <label>
                    縣/市 :
                    <select
                        name="city"
                        onChange={this.handler}
                        value={this.state.city}>
                        {cityOptions}
                    </select>
                </label>
                <br />
                <label>
                    市/區 :
                    <select
                        name="district"
                        onChange={this.handler}
                        value={this.state.district}>
                        {districtyOptions}
                    </select>
                </label>
                <br />
                <label>
                    郵遞區號 :
                    <input name="postalCode" value={this.state.postalCode} disabled={true} />
                </label>
                <br />
                <label>
                    地址 :
                    <input name="address" value={this.state.address} onChange={this.handler} />
                </label>
            </div >
        )
    }
}
export default AddressPicker; 