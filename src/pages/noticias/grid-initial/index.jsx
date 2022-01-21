import React from "react";
import { Link } from "react-router-dom";
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
          <ins
            class="adsbygoogle"
            style={{display: "block"}}
            data-ad-format="fluid"
            data-ad-layout-key="-7k+ex-1g-2s+as"
            data-ad-client="ca-pub-7901381333117251"
            data-ad-slot="6880621048">
          </ins>
        </div>
      </aside>

      <section className="noticias-recentes">
        <NoticiasAntigas />
      </section>

    </React.Fragment>
  );
}
