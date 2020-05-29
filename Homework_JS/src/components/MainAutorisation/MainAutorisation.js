import React, { Component } from 'react'
import './MainAutorusation.css'
import {
    Link, withRouter
} from 'react-router-dom'
import { withFirebase } from '../firebase/indexfile'

class MainAutorisationForm extends Component {

    constructor() {
        super();
        this.Aunten = this.Aunten.bind(this);

    }

    Aunten(e) {
        this.props.firebase
            .doSignInWithEmailAndPassword(this.email.value, this.password.value)
            .then(authUser => {
                this.props.history.push("/");
            })
            .catch(error => {
                alert(error);
            });
        e.preventDefault();
    }
    render() {

        return (
            <div className="transparent">
                <form onSubmit={this.Aunten}>
                    <div className="form-inner">
                        <h3>Авторизация</h3>
                        <label for="username">Почта</label>
                        <input type="text" id="username" ref={(value) => this.email = value} />
                        <label for="password">Пароль</label>
                        <input id="password" type="password" ref={(value) => this.password = value} />
                        <br />
                        <input type="submit" value="Войти" />
                        <div className="Regg">
                            <p>Не зарегистрированы?</p>
                            <Link to="/Reg" className="Linkk" type="submit">Регистрация</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const MainAutorisation = withFirebase(withRouter(MainAutorisationForm));

export default MainAutorisation