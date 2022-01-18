import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { DinamicNews } from "../dynamic-news";


export const UltimasNoticias = () => {
  return(
    <React.Fragment>
      <main className="content-main">
        <div className="heading-lv2">
          <h2>Últimas notícias</h2>
        </div>
        <article className="container-noticias">
          <aside className="box-anuncio" style={{order: 1}}>

          </aside>
            <DinamicNews />
          <aside className="box-anuncio" style={{order: 5}}>
          </aside>
        </article>
      </main>
      <aside className="column-side">
        <div className="box-anunc-redes-sociais">
          <div className="container-redes-anunc">
            anuncio
          </div>
          <h3>Siga a <em>SportNet</em></h3>
          <div className="container-redes-sociais">
            <a target="_blank" href="https://www.sportnetnew.com" className="link-target-sociais" rel="noreferrer">
              <BsFacebook title="Facebook"/>
            </a>
            <a target="_blank" href="https://www.sportnetnew.com" className="link-target-sociais" rel="noreferrer">
              <AiOutlineInstagram title="Instagram"/>
            </a>
            <a target="_blank" href="https://www.sportnetnew.com" className="link-target-sociais" rel="noreferrer">
              <BsWhatsapp title="Whatsapp"/>
            </a>
          </div>
        </div>

      </aside>

    </React.Fragment>
  );
};
