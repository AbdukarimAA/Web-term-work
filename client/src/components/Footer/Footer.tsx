import React from "react";

import "./footer.css";

const Footer = () => {
  const year = new Date(Date.now());

  return (
    <footer>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Af839419e24d90a84c82f45f38bcdb2a1e78340c950997d651f94a8599f75abb0&amp;source=constructor"
        width="100%"
        height="300"
        frameBorder="0"
      ></iframe>
      <div className="copyright">@ Copyright {year.getFullYear()}</div>
    </footer>
  );
};

export default Footer;
