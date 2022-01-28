import { Link } from "react-router-dom";
import { ultimasNoticias } from "../../json/ultimas-noticias";


export const DinamicNews = () => {
  let orderStyle = 1;
  return(
    ultimasNoticias.slice(1, 8).map((item, i) => {
      orderStyle++;
      if (orderStyle === 5) {
        orderStyle = 6;
      }
      return(
        <div key={i} className="box-noticia" style={{order: orderStyle}}>
          <Link to={item.rota} className="router-notic">
            <img src={item.thumb} alt={item.title} />
            <div className="box-info-img">
              <span>{item.data}</span>
              <h1>{item.title}</h1>
            </div>
          </Link>
        </div>
      );
    })
  );
};
