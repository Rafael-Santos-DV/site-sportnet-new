import { Link } from "react-router-dom";
import { ultimasNoticias } from "../../json/ultimas-noticias";

const threeNoticias = ultimasNoticias.slice(ultimasNoticias.length - 3, ultimasNoticias.length);

export const NoticiasAntigas = () => {
  return(
    threeNoticias && threeNoticias.map((item, i) => (
      <article key={i} className="box-noticia">
        <Link to={item.rota} className="router-notic">
          <img src={item.thumb} alt={item.title} />
          <div className="box-info-img">
            <span>{item.data}</span>
            <h1>{item.title}</h1>
          </div>
        </Link>
      </article>
    ))
  );
};
