import React from "react";
import { BrowserRouter,  } from "react-router-dom";
import { RowHeader } from "../../components/header";
import { GlobalStyle, Header, MainGrid, ContainerMaster } from "../../styles";
import { Noticias } from "../noticias/flamengo-teste";

export const Home = () => {
    return(
          <BrowserRouter>
              <GlobalStyle />
              <Header>
                <RowHeader />
              </Header>
              <ContainerMaster>
                <MainGrid>
                  <Noticias />
                </MainGrid>
              </ContainerMaster>
          </BrowserRouter>
    );
}
