import React, { Component } from 'react'
import './MainRegistration.css'
import {
    Link, withRouter
} from 'react-router-dom'
import { withFirebase } from '../firebase/indexfile'

class MainRegistration extends Component {

    constructor() {
        super();
        this.Change = this.Change.bind(this);
        this.state = {
            passwordsEquel: true,
            filePut: true,
            filevalid: true
        }
    }

    Change(e) {
        let passwordsEqualB = true;
        let photoUploaded = true;
        let photoValidB = true;


        if (this.password.value !== this.passwordsecond.value) {
            passwordsEqualB = false;
        }
        if (this.file.files.length === 0) {
            photoUploaded = false;
        }
        else {
            const fileRE = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
            if (!fileRE.test(this.file.files[0].name)) {
                photoValidB = false;
            }
        }
        this.setState({
            passwordsEquel: passwordsEqualB,
            filePut: photoUploaded,
            filevalid: photoValidB
        });
        if (passwordsEqualB & photoUploaded & photoValidB) {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(this.email.value, this.password.value)
                .then(authUser => {
                    this.props.firebase
                        .storageRef(authUser.user.uid)
                        .put(this.file.files[0]);
                    this.props.history.push("/");
                })
                .catch(error => {
                    alert(error);
                });
        }
        e.preventDefault();
    }



    render() {

        return (
            <form className="transparent" onSubmit={this.Change}>
                <div className="form-inner">
                    <h3>Регистрация</h3>
                    <label for="username">Имя*</label>
                    <input type="text" id="username" required pattern='[А-ЯA-Zа-яa-z]+' ref={(value) => this.username = value} />
                    <label for="username">Фамилия*</label>
                    <input type="text" id="surname" required pattern='[А-ЯA-Zа-яa-z]+' ref={(value) => this.usersurname = value} />
                    <label for="email">Почта*</label>
                    <input id="email" type="email" required ref={(value) => this.email = value} />
                    <label for="password">Пароль*</label>
                    <input id="password" type="password" required ref={(value) => this.password = value} />
                    <label for="password_1">Повторите пароль*</label>
                    <p className='Alert'>
                        {this.state.passwordsEquel ? "" : "Пароли не сопадают"}
                    </p>
                    <input type="password" id="password_1" ref={(value) => this.passwordsecond = value} />
                    <p className='Alert'>
                        {this.state.filePut ? "" : "Нет фото!"}
                    </p>
                    <p className='Alert'>
                        {this.state.filevalid ? "" : "Фото должно быть в формате .png/.jpg/.jpeg/.gif!"}
                    </p>
                    <input type="file" name="f" ref={(value) => this.file = value}></input>

                    <br />
                    <input type="submit" value="Зарегистрироваться" />
                    <div className="Dod">
                        <p>Зарегистрированы?</p>
                        <Link to="Auto" type="submit" className="Bob">Вход</Link>
                    </div>
                </div>
            </form>
        );
    }
}

const MainregForm = withFirebase(withRouter(MainRegistration));

export default MainregForm