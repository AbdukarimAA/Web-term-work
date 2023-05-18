import React, {useState} from 'react';
import './login.css'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data}: any = await axios.post('http://localhost:8700/api/auth/login', {email, password})
                .catch(() => alert('Что-то пошло не так...'))
            const { token, ...payload } = data;
            localStorage.setItem('currentUser', JSON.stringify(payload));
            localStorage.setItem('token', token)
            navigate('/')
        } catch (e) {
            alert('Ошибка')
        }
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className="login-container">
                <span>Авторизируйтесь</span>
                <input placeholder='Email' onChange={e => setEmail(e.target.value)} type="email"/>
                <input placeholder='Пароль' onChange={e => setPassword(e.target.value)} type="password"/>
                <button>Войти</button>

                <div className="login-container-div">
                    <h4>Нет аккаунта?</h4>
                    <Link to='/register'>
                        <h5>Создайте!</h5>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;