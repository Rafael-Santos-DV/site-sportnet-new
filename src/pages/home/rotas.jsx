import { Route, Routes } from "react-router-dom";
import { ultimasNoticias } from "../../json/ultimas-noticias";
import { Contato } from "../contato";
import { Expediente } from "../expediente";
import { NotFound } from "../notfound";
import { PaginaInicial } from "../pagina-inicial";

export const Rotas = () => {

  return(
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      {/* Rotas geradas através do map */}
      {
        ultimasNoticias.map((item, i) => (
          <Route key={i} path={item.rota} element={<item.Component />} />
        ))
      }
      <Route path="expediente" element={<Expediente />} />
      <Route path="contato" element={<Contato />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
