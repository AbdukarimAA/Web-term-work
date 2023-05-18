import React from "react";
import './section.css'

const Section = ({data}: any) => {

    console.log(data)
  return (
      <section className='section'>
          <div className="section-header">
              title
          </div>
          <div className="section-article">
              <div className="section-article-left">
                <img src="https://diamondelectric.ru/images/1853/1852897/pylsometr_s_fynkciei_shagomera_mad_wave_pulsewatch_1.jpg" alt=""/>
              </div>
              <div className="section-article-right">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta est et eveniet exercitationem id ipsum maiores optio perspiciatis reprehenderit! Ab consectetur cum doloremque ducimus facere ipsam odio quae quod.
              </div>
          </div>
          <div className="section-footer">
              footer
          </div>
      </section>
  );
};

export default Section;
