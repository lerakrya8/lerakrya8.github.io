import React, {Component} from 'react'
import './MainPage.css'
import Header from '../../components/Header/Heager'
import Main from '../../components/Main/Main'

class MainPage extends Component {
    render() {
        return (
            <div className = 'Main_page'> 
                <Header />
                <Main />
            </div>
        )
    }
}
export default MainPage;