import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './register.css'
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const {data}: any = await axios.post('http://localhost:8700/api/auth/register', {email, username, password})
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
            <form onSubmit={handleRegister} className="login-container">
                <span>Создайте аккаунт</span>
                <input placeholder='Email' onChange={e => setEmail(e.target.value)} type="email"/>
                <input placeholder='Username' onChange={e => setUsername(e.target.value)} type="text"/>
                <input placeholder='Пароль' onChange={e => setPassword(e.target.value)} type="password"/>
                <button>Создать</button>

                <div className="login-container-div">
                    <h4>Есть аккаунт?</h4>
                    <Link to='/authorize'>
                        <h5>Войдите!</h5>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;