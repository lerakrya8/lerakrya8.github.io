import React, {Component} from 'react'
import './MainConverter'

class MainConverter extends Component {

    constructor() {
        super();
        this.state = {
            isLoad: false,
            currency: {},
        }
    }

    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest?base=RUB')
            .then(r => r.json())
            .then(res => this.setState({ 
                isLoad:true,
                currency: res.rates
            }));
    }

    CurrentValue(name) {
        if(name === 'USD') {
            return this.state.currency.USD;
        }
        if(name === 'EUR') {
            return this.state.currency.EUR;
        }
        if(name === 'GBP') {
            return this.state.currency.GPB;
        }
        if(name === 'NOK') {
            return this.state.currency.NOK;
        }
        if(name === 'SEK') {
            return this.state.currency.SEK;
        }
        if(name === 'MXN') {
            return this.state.currency.MXN;
        }
        if(name === 'CNY') {
            return this.state.currency.CNY;
        }
    }

    Converter(value, name) {
        if(name !== 'RUB') {
            this.rub.value = (value / this.CurrentValue(name)).toFixed(1);
        }
        if(name !== 'USD') {
            this.usd.value = (this.rub.value * this.state.currency.USD).toFixed(1);
        }
        if(name !== 'EUR') {
            this.eur.value = (this.rub.value * this.state.currency.EUR).toFixed(1);
        }
        if(name !== 'GBP') {
            this.gbp.value = (this.rub.value * this.state.currency.GBP).toFixed(1);
        }
        if(name !== 'NOK') {
            this.nok.value = (this.rub.value * this.state.currency.NOK).toFixed(1);
        }
        if(name !== 'CNY') {
            this.cny.value = (this.rub.value * this.state.currency.CNY).toFixed(1);
        }
        if(name !== 'SEK') {
            this.sek.value = (this.rub.value * this.state.currency.SEK).toFixed(1);
        }
        if(name !== 'MXN') {
            this.mxn.value = (this.rub.value * this.state.currency.MXN).toFixed(1);
        }
    }

    render() {

        return(
            <div className='Main_converter'>
                <form class="transparent">
                    <div class="form-inner">
                        <label for="nom">RUB</label>
                        <input type="number" name='RUB' ref={(input) => this.rub = input} onInput = {event => this.Converter(event.target.value, event.target.name)}/>

                        <label for="nom">EUR</label>
                        <input type="number" name='EUR' ref={(input) => this.eur = input} onInput = {event => this.Converter(event.target.value, event.target.name)}/>

                        <label for="nom">USD</label>
                        <input type="number" name='USD' ref={(input) => this.usd = input} onInput = {event => this.Converter(event.target.value, event.target.name)}/>

                        <label for="nom">GPB</label>
                        <input type="number" name='GBP' ref={(input) => this.gbp = input} onInput = {event => this.Converter(event.target.value, event.target.name)}/>

                        <label for="nom">NOK</label>
                        <input type="number" name='NOK' ref={(input) => this.nok = input} onInput = {event => this.Converter(event.target.value, event.target.name)}/>

                        <label for="nom">SEK</label>
                        <input type="number" name='SEK' ref={(input) => this.sek = input} onInput = {event => this.Converter(event.target.value, event.target.name)}/>

                        <label for="nom">MXN</label>
                        <input type="number" name='MXN' ref={(input) => this.mxn = input} onInput = {event => this.Converter(event.target.value, event.target.name)}/>

                        <label for="nom">CNY</label>
                        <input type="number" name='CNY' ref={(input) => this.cny = input} onInput = {event => this.Converter(event.target.value, event.target.name)}/>

                    </div>
                </form>
            </div>
        );
    }

    
}

export default MainConverter