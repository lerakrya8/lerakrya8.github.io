import React, {Component} from 'react'
import './Line.css'

class Line extends Component {
    render() {
        const name = this.props.name
        const currency_id = this.props.currency_id
        const rub = this.props.rub
        return (
            <tr>
                <td className="Line">{name}</td>
                <td className="Line">1 {currency_id} = {(1 / rub).toFixed(2)} RUB</td>
            </tr>
        );
    }
}

export default Line