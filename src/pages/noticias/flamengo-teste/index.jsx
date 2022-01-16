import React from "react";
import { Link } from "react-router-dom";
import treinoflamengoct from "../../../assets/flamengo-treinamento/flamengo-treinamento.jpeg";

export const Noticias = () => {
  return(
    <React.Fragment>
      <article className="article-container">
        <Link to="" className="router-notic">
          <img src={treinoflamengoct} alt="thumb flamengo" />
          <div className="box-info-img">
            <span>02/11/2022</span>
            <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
          </div>
        </Link>
      </article>
      <aside className="container-anunc">
        <div style={{width: "100%", height: "200px", backgroundColor: "blue"}}>
          teste
        </div>
      </aside>

      <section className="noticias-recentes">
        <article className="box-noticia">
          <Link to="" className="router-notic">
            <img src={treinoflamengoct} alt="thumb flamengo" />
            <div className="box-info-img">
              <span>02/11/2022</span>
              <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
            </div>
          </Link>
        </article>

        <article className="box-noticia">
          <Link to="" className="router-notic">
            <img src={treinoflamengoct} alt="thumb flamengo" />
            <div className="box-info-img">
              <span>02/11/2022</span>
              <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
            </div>
          </Link>
        </article>

        <article className="box-noticia">
          <Link to="" className="router-notic">
            <img src={treinoflamengoct} alt="thumb flamengo" />
            <div className="box-info-img">
              <span>02/11/2022</span>
              <h1>Com foco na preparação física, Flamengo encerra treinamento neste sábado</h1>
            </div>
          </Link>
        </article>

      </section>

    </React.Fragment>
  );
}

// const MenuMobile = () => {
//   const [opButton, setButton] = useState(false);

//   const JsxButton = () => (
//     opButton ?

//     (
//       <nav>ola</nav>
//     ) :

//     (
//       <nav>ola</nav>
//     )

//   );

//   return "";
// }
