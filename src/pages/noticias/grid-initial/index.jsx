import React from "react";
import { Link } from "react-router-dom";
import { GoogleAds } from "../../../components/googleads";
import { Anuncio1 } from "../../../components/gooleadsAnuncios";
import { NoticiasAntigas } from "../../../components/noticias-antigas";
import { ultimasNoticias } from "../../../json/ultimas-noticias";

export const Noticias = () => {
  return(
    <React.Fragment>
      <article className="article-container">
        <Link to={ultimasNoticias[0].rota} className="router-notic">
          <img src={ultimasNoticias[0].thumb} alt={ultimasNoticias[0].title} />
          <div className="box-info-img">
            <span>{ultimasNoticias[0].data}</span>
            <h1>{ultimasNoticias[0].title}</h1>
          </div>
        </Link>
      </article>
      <aside className="container-anunc">
        <div >
          <GoogleAds>
            <Anuncio1 />
          </GoogleAds>
        </div>
      </aside>

      <section className="noticias-recentes">
        <NoticiasAntigas />
      </section>

    </React.Fragment>
  );
}
