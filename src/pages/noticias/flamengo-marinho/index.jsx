import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import imagem1 from "../../../assets/flamengo-marinho/flamengo-marinho.jpg";
// aqui pode vir a imagem2 de acordo com o article

// import do perfil do escritor
import perfilLeo from "../../../assets/dupla-leo-raf/perfil-leorion.jpg";


// Component com os 3 artigos relacionados
export const ThreeNotices = () => {
  return(
    noticesThree && noticesThree.map((item, i) => (
      <Link key={i} to={item.rota} className="link-noticia">
        <img src={item.thumb} alt={item.title} />
        <h4>{item.title}</h4>
      </Link>
    ))
  );
}


export const SantosEArouca = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio"></aside>
        <article>
          <h1>Flamengo e Santos avançam por Marinho; Peixe admite saída e pede mais;</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>19:30 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={imagem1} alt="imagem Foto Marinho Treino" />
            <strong> Foto: Ivan Storti/Santos FC</strong>
          </div>

        </article>
      </section>
      <section className="container-principal">
        <div className="box-redes-sociais">
          <div>
            <a title="Facebook" target="_blank" className="links-redes" href="https://www.facebook.com/SportNet-News-100950125833333/" rel="noreferrer">
              <span className="icons">
                <BsFacebook />
              </span>
            </a>

            <a title="Instagram" target="_blank" className="links-redes" href="/" rel="noreferrer">
              <span className="icons instagram">
                <AiOutlineInstagram />
              </span>
            </a>

            <a title="Whatsapp" target="_blank" className="links-redes" href="https://wa.me/message/DIEEQ3YFWEGJL1" rel="noreferrer">
              <span className="icons">
                <BsWhatsapp />
              </span>
            </a>
          </div>
        </div>
        <main className="content-principal">
          <article className="article-texto">
            <p>O <strong>Flamengo ofereceu 1,2 milhão de dólares (R$ 6,5 milhões)</strong> por Marinho. O Santos mantém a negociação aberta, mas quer mais. A distância entre o pedido e o sugerido diminuiu nas últimas horas. O Santos quer receber "limpa" a sua parte, sem dividir com Grêmio e empresários (donos de 10% cada). O Peixe também quer garantir um percentual de futura venda.</p>
            <p>
              O <strong>Santos</strong> priorizava uma negociação para o exterior, mas não recebeu nada concreto até então. O atacante sonha em atuar nos Emirados Árabes Unidos, porém, gosta da possibilidade do Flamengo. As sondagens de clubes da Arábia Saudita ainda não viraram propostas. O Santos sabe do risco de vender Marinho e vê-lo brilhar no Flamengo como ocorreu com Bruno Henrique, mas vê poucas opções e está disposto a negociar o camisa 11 com o Rubro-Negro se as condições melhorarem. Os cariocas afirmam que não podem pagar muito mais para quem tem apenas um ano de vínculo. Marinho tem contrato até dezembro de 2022 e fará 32 anos em maio. A partir de julho, ele pode assinar um pré-acordo com qualquer. proposta de renovação a ele.
            </p>
          </article>
          <article className="article-img-post" styel={{display: "none"}}>
            <div className="container-imagem">
              <img src="" alt=""/>
              <span></span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">

            <p>
              No Flamengo, Marinho receberia mais do que no Santos e menos que no mundo árabe. Depois de um 2021 de baixo rendimento após ser o "Rei da América" em 2020, o atacante crê que precisa de um bom contrato em busca da independência financeira
            </p>

          </article>
          <section className="artigos-relacionados">
            <h3>Artigos relacionados</h3>
            <div className="box-noticias">
              <ThreeNotices />
            </div>
          </section>
        </main>
        <aside className="box-anuncio">
          <div className="container-anuncio"></div>
        </aside>
      </section>
    </Div>
  );
}

// Sempre mude o nome da constante abaixo
export const page_flamengo_E_SantosMarinho = {
  rota: "flamengo-e-santos-avancam-por-marinho",
  thumb: imagem1,
  data: "27/01/2022",
  title: 'Flamengo e Santos avançam por Marinho; Peixe admite saída e pede mais;',
  Component: SantosEArouca,
}
