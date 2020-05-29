import React, {Component} from 'react'
import './Autorisation.css'
import MainAutorisation from '../../components/MainAutorisation/MainAutorisation'
import Header from '../../components/Header/Heager'

class Autorisation extends Component {
    render() {
        return (
            <div className = 'Main_page'> 
                <Header />
                <MainAutorisation />
            </div>
        )
    }
}
export default Autorisation;