import React, {Component} from 'react'
import './Selects.css'

class Selects extends Component {

    render() {

        return(
            <section class="container">
                <div class="dropdown">
                <select name="one" class="dropdown-select">
                    <option value="">From</option>
                    <option value="1">EUR</option>
                    <option value="2">USD</option>
                    <option value="3">GPB</option>
                    <option value="4">RUS</option>
                    <option value="5">CNY</option>
                    <option value="6">NOK</option>
                    <option value="7">SEK</option>
                    <option value="8">MXN</option>

                </select>
                </div>
                <div class="dropdown dropdown-dark">
                    <select name="two" class="dropdown-select">
                        <option value="">To</option>
                        <option value="1">EUR</option>
                        <option value="2">USD</option>
                        <option value="3">GPB</option>
                        <option value="4">RUS</option>
                        <option value="5">CNY</option>
                        <option value="6">NOK</option>
                        <option value="7">SEK</option>
                        <option value="8">MXN</option>
                    </select>
                </div>
            </section> 
        );
    }
}

export default Selects