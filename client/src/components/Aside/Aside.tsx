import React from "react";

import "./aside.css";

const Aside = () => {
  return (
      <aside>
        <span>Свяжитесь с нами</span>
        <input placeholder='Ваш Email' type="text"/>
        <input placeholder='Ваш Username' type="text"/>
        <input placeholder='Ваше сообщение' type="text"/>
        <button>Отправить</button>
      </aside>
  );
};

export default Aside;
