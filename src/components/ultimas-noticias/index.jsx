import React from "react";
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
        <div className="box-anunc">
        </div>
      </aside>

    </React.Fragment>
  );
};
