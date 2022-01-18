import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import treinoflamengoct from "../../assets/flamengo-treinamento/flamengo-treinamento.jpeg";


export const UltimasNoticias = () => {
  return(
    <React.Fragment>
      <main className="content-main">
        <div className="heading-lv2">
          <h2>Últimas notícias</h2>
        </div>
        <article className="container-noticias">
          <aside className="box-anuncio">

          </aside>
          <div className="box-noticia">
            <Link to="" className="router-notic">
              <img src={treinoflamengoct} alt="thumb flamengo" />
              <div className="box-info-img">
                <span>02/11/2022</span>
                <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
              </div>
            </Link>
          </div>
          <div className="box-noticia">
            <Link to="" className="router-notic">
              <img src={treinoflamengoct} alt="thumb flamengo" />
              <div className="box-info-img">
                <span>02/11/2022</span>
                <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
              </div>
            </Link>
          </div>
          <div className="box-noticia">
            <Link to="" className="router-notic">
              <img src={treinoflamengoct} alt="thumb flamengo" />
              <div className="box-info-img">
                <span>02/11/2022</span>
                <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
              </div>
            </Link>
          </div>
          <div className="box-noticia">
            <Link to="" className="router-notic">
              <img src={treinoflamengoct} alt="thumb flamengo" />
              <div className="box-info-img">
                <span>02/11/2022</span>
                <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
              </div>
            </Link>
          </div>
          <div className="box-noticia">
            <Link to="" className="router-notic">
              <img src={treinoflamengoct} alt="thumb flamengo" />
              <div className="box-info-img">
                <span>02/11/2022</span>
                <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
              </div>
            </Link>
          </div>
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
            <Link to="" className="link-target-sociais">
              <BsFacebook title="Facebook"/>
            </Link>
            <Link to="" className="link-target-sociais">
              <AiOutlineInstagram title="Instagram"/>
            </Link>
            <Link to="" className="link-target-sociais">
              <BsWhatsapp title="Whatsapp"/>
            </Link>
          </div>
        </div>

      </aside>

    </React.Fragment>
  );
};
