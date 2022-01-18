import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContainerFooter } from "../../components/footer";
import { RowHeader } from "../../components/header";
import { Footer, GlobalStyle, Header } from "../../styles";
import { NameNoticia } from "../noticias/noticianame";
import { PaginaInicial } from "../pagina-inicial";

export const Home = () => {
    return(
          <BrowserRouter>
            <GlobalStyle />
            <Header>
              <RowHeader />
            </Header>
            <Routes>
              <Route path="/" element={<PaginaInicial />} />
              <Route path="fla" element={<NameNoticia />} />
            </Routes>
            <Footer>
              <ContainerFooter />
            </Footer>
          </BrowserRouter>
    );
}
