import React, { FormEvent, useState } from 'react';

import "../styles/pages/login.css"
import logo from '../images/logo-above-text.svg'
import api from '../services/api';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleFormSubmission(event: FormEvent) {
        event.preventDefault();
        const credentials ={
            email: email,
            password: password
        }
        
        await api.post('/users/login', credentials).then(response => {
            console.log(response.data);
        });

    }

    return (
        <div id="login-page">
            
            <div className="header">
            <img src={logo} alt="Happy" id="logo"/>
            <p>
                <span>Belém</span><br/>
                Pará
            </p>
            </div>

            <aside>

                <div className="form-wrapper">

                    <form onSubmit={handleFormSubmission}>
                        <h2>Fazer login</h2>


                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                id="email"
                                onChange={
                                    event => {
                                        setEmail(event.target.value);
                                    }}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                onChange={
                                    event => {
                                        setPassword(event.target.value);
                                    }}
                            />
                        </div>

                        <div id="remember-or-forgotten">
                            <div>
                                <input
                                type="checkbox"
                                id="remember-me"
                                />
                                <label htmlFor="remember-me">&#09;Lembrar-me</label>
                            </div>
                            <a href="/" id="forget-password">Esqueci minha senha</a>
                        </div>
                        <button type="submit" id="login-button">Entrar</button>
                    </form>
                </div>

            </aside>
            
        </div>
    );
}

export default Login;