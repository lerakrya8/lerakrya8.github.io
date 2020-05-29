import React, { Component } from 'react';
import './Header.css';
import unnamed from '../../images/unnamed.png'
import {
    Link
} from 'react-router-dom';
import { withFirebase } from '../firebase/indexfile'


class HeaderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? this.setState({ authUser })
                : this.setState({ authUser: null })
        });
    }

    render() {
        return (
            <div className='Header'>
                <div className='Buttons'>
                    {this.state.authUser ? <But1 /> : <But /> }
                </div>
                <br />
                <div className='Topic'>
                    <div>
                        <img src={unnamed} alt='name' width="60" height="60" className='Picture' />
                    </div>
                    <div className='Name'>
                        Курс валют
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}

const But = () => (
    <div>
        <Link to="/" className='MainList' >Главная</Link>
        <Link to="/Auto" className='SingIn' >Войти</Link>
    </div>
)

const But1 = withFirebase(({firebase}) => (
    <div>
        <Link to="/Converter" className='MainList' >Конвертер</Link>
        <div  className='SingIn' onClick={firebase.doSignOut}>Выйти</div>
    </div>
))

const Header = withFirebase(HeaderForm);

export default Header
