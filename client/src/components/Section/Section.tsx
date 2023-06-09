import React from "react";
import "./section.css";

const Section = ({ data }: any) => {
  return (
    <section className="section">
      {data &&
        data.map((item) => (
          <div className="section-wrapper">
            <div className="section-header">{item.name}</div>
            <div className="section-article">
              <div className="section-article-left">
                <img src={item.imgURL} alt="" />
              </div>
              <div className="section-article-right">{item.desc}</div>
            </div>
            <div className="section-footer">
              <span>Цена: {item.price}</span>
              <span>Брэнд: {item.brand}</span>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Section;
