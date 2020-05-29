import React, {Component} from 'react'
import './Converter.css'
import Header1 from '../../components/Header1/Header1'
import MainConverter from '../../components/MainConverter/MainConverter'

class Converter extends Component {
    render() {
        return (
            <div className = 'Main_page'> 
                <Header1 />
                <MainConverter />
            </div>
        )
    }
}

export default Converter

