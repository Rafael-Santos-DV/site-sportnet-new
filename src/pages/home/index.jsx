import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ContainerFooter } from "../../components/footer";
import { RowHeader } from "../../components/header";
import { Footer, GlobalStyle, Header } from "../../styles";
import { Rotas } from "./rotas";

export const Home = () => {
    return(
          <BrowserRouter>
            <GlobalStyle />
            <Header>
              <RowHeader />
            </Header>
              <Rotas />
            <Footer>
              <ContainerFooter />
            </Footer>
          </BrowserRouter>
    );
}
