import React, {Component} from 'react'
import './Ttable.css'
import Line from '../Line/Line'

class Ttable extends Component {

    constructor() {
        super();
        this.state = {
            isLoad: false,
            result: {},
        }
    }

    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest?base=RUB')
            .then(response => response.json())
            .then(res => this.setState({
                isLoad: true,
                result: res,
            }));
    }

    render() {
        const isLoad = this.state.isLoad;
        if (!isLoad)
            return (<h1>Загрузка...</h1>)
        else {
            const currency = this.state.result.rates
            return (
                <table className="Ttable">
                    <tbody>
                    <Line currency_id="EUR" rub={currency.EUR} name="Евро" />
                    <Line currency_id="USD" rub={currency.USD} name="Доллар" />
                    <Line currency_id="GBP" rub={currency.GBP} name="Фунт стерлингов" />
                    <Line currency_id="CNY" rub={currency.CNY} name="Китайский юань" />
                    <Line currency_id="NOK" rub={currency.NOK} name="Норвежская крона" />
                    <Line currency_id="MXN" rub={currency.MXN} name="Мексиканский песо" />
                    <Line currency_id="SEK" rub={currency.SEK} name="Шведская крона" />
                    </tbody>
                </table>
            );
        }
    }
}

export default Ttable