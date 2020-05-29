import React, { Component } from 'react';
import './Header1.css';
import unnamed from '../../images/unnamed.png'
import {
    Link
} from 'react-router-dom';
import { withFirebase } from '../firebase/indexfile'

class Header1Form extends Component {

    render() {
        return (
            <div className='Header'>
                <div className='Buttons'>
                    <Link to="/" className='MainList' >Главная</Link>
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

const Header1 = withFirebase(Header1Form);


export default Header1
