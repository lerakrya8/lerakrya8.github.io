import React, {Component} from 'react'
import './Inputs.css'


class Inputs extends Component {

    render() {
        
        return(
            <form class="transparent">
                <div class="form-inner">
                    <label for="nom">Номинал</label>
                    <input type="number" id="nom" required/>

                    <label for="nom">Результат</label>
                    <input id="result" readOnly/>

                    <br/>
                    <input type="submit" value="Рассчитать" />
                </div>
            </form>
        );
    }
}

export default Inputs