import React from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                <input type="text" placeholder="Nome de usuario" required />
                <FaUser className="icon"/>
                </div>
                <div className="input-box">
                <input type="password" placeholder="Senha" required />
                <FaLock className="icon"/>
                </div>

                <div className="remenber-forgot">
                <label><input type="checkbox" />Lembrar-me</label>
                <a href="#">Esqueceu sua senha?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                <p>Não possue uma conta? <a href="#">Resgistre-se agora</a></p>
                </div>
            </form>
      </div>

    );
};

export default LoginForm;