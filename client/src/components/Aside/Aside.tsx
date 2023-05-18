import React, {useState} from "react";

import "./aside.css";
import axios from "axios";

const Aside = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [msg, setMsg] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8700/api/feedback/createFeedBack', {email: email, username: username, message: msg})
        alert('Ваше сообщение отправлено!')
        setMsg('')
        setUsername('')
        setEmail('')
    }

  return (
      <aside>
          <form onSubmit={handleSubmit}>
            <span>Свяжитесь с нами</span>
            <input placeholder='Ваш Email' value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
            <input placeholder='Ваш Username' value={username} onChange={(e) => setUsername(e.target.value)} type="text"/>
            <input placeholder='Ваше сообщение' value={msg} onChange={(e) => setMsg(e.target.value)} type="text"/>
            <button type='submit'>Отправить</button>
          </form>
      </aside>
  );
};

export default Aside;
