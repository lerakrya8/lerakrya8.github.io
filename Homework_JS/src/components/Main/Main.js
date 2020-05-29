import React, {Component} from 'react'
import './Main.css'
import DateNow from '../Date/DateNow';
import Ttable from '../Table/Ttable'

class Main extends Component {
    render() {
        return(
            <div className='Main'>
                <DateNow />
                <Ttable />
            </div>
        );
    }
}

export default Main