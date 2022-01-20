import { page_NoticiaCazares } from "../pages/noticias/cazares-atletico-mg";
import { page_contrato_perto_do_fim } from "../pages/noticias/contrato-perto-do-fim";
import { page_RelacionadosPalmeiras } from "../pages/noticias/palmeiras-relacionados-mundial";

export const ultimasNoticias = [
  {
    ...page_RelacionadosPalmeiras
  },
  {
    ...page_contrato_perto_do_fim
  },
  {
    ...page_NoticiaCazares
  },
];
