import { UltimasNoticias } from "../../components/ultimas-noticias";
import { ContainerMaster, MainGrid, SectionGrid } from "../../styles";
import { Noticias } from "../noticias/grid-initial";

export const PaginaInicial = () => {
  return (
    <ContainerMaster>
      <MainGrid>
        <Noticias />
      </MainGrid>
      <SectionGrid>
        <UltimasNoticias />
      </SectionGrid>
    </ContainerMaster>
  );
}
