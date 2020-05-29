import React, {Component} from 'react'
import './Registration.css'
import MainRegForm from '../../components/MainRegistration/MainRegistration'
import Header from '../../components/Header/Heager'

class Registration extends Component {
    render() {
        return (
            <div className = 'Main_page'> 
                <Header />
                <MainRegForm />
            </div>
        )
    }
}
export default Registration;