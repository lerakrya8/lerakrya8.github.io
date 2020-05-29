import React, {Component} from 'react'
import './DateNow.css'

class DateNow extends Component {
    
    constructor() {
        super()
        this.state = {date: new Date()}
    }
    render(){
        return(
            <div className='DateNow'>
                {this.state.date.toLocaleString("ru", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </div>
        );
    }
}

export default DateNow