import { page_NoticiaCazares } from "../pages/noticias/cazares-atletico-mg";
import { page_contrato_perto_do_fim } from "../pages/noticias/contrato-perto-do-fim";
import { page_CorinthiansSilvinho } from "../pages/noticias/corinthians-silvinho";
import { page_flamengo_E_SantosMarinho } from "../pages/noticias/flamengo-marinho";
import { page_MineirosECariocas } from "../pages/noticias/mineiros-e-cariocas";
import { page_RelacionadosPalmeiras } from "../pages/noticias/palmeiras-relacionados-mundial";
import { page_BrunoMarquesSantosArouca } from "../pages/noticias/santos-arouca";
import { page_SantosFpf } from "../pages/noticias/sao-paulo-fpf";


export const ultimasNoticias = [
  {
    ...page_flamengo_E_SantosMarinho
  },
  {
    ...page_MineirosECariocas
  },
  {
    ...page_SantosFpf
  },
  {
    ...page_BrunoMarquesSantosArouca
  },
  {
    ...page_RelacionadosPalmeiras
  },
  {
    ...page_CorinthiansSilvinho
  },
  {
    ...page_contrato_perto_do_fim
  },
  {
    ...page_NoticiaCazares
  },
];
