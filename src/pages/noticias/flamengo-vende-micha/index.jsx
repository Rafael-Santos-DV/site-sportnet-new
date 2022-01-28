import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import imagem1 from "../../../assets/imagem-micha/imagem-micha.jpg";
import imagem2 from "../../../assets/imagem-micha/imagem-micha2.png";


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


export const FlaVendaDeMichael = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio"></aside>
        <article>
          <h1>Flamengo acerta a venda de Michael ao Al Hilal, da Arábia Saudita</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>8:00 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={imagem1} alt="imagem Michael" />
            <strong>Foto: Jorge Rodrigues / Gazeta Press</strong>
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
            <h2>Time carioca vai embolsar cerca de R$ 46 milhões com a saída do atacante</h2>
            <p>O Flamengo acertou a venda de Michael para o Al Hilal da Arábia Saudita. Depois de pouco mais de 15 dias de negociação, o time carioca aceitou oferta e vai embolsar cerca de R$ 46 milhões para contar com o atacante.</p>

          </article>
          <article className="article-img-post">
            <div className="container-imagem" >
              <img src={imagem2} alt="imagem Michael" />
              <span>FOTO: DIVULGAÇÃO/CONMEBOL</span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">
            <p>Aos 25 anos, Michael assinou um contrato de três anos. O brasileiro vai receber cerca de três vezes mais do que recebia no Flamengo. O novo reforço chega com status de estrela, e <strong>o Al Hilal corre para inscrever o jogador no Mundial de Clubes</strong>, que acontece neste mês de fevereiro, nos Emirados Árabes.</p>
            <p>Conforme havia trazido a <strong>GOAL</strong>, Michael aceitou a proposta do Al Hilal na semana passada e deu entrada nos trâmites enquanto os clubes se acertavam. O jogador deve embarcar para Riade já neste final de semana.</p>
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
export const page_FlaVendaDeMichael = {
  rota: "flamengo-oficializa-venda-de-michael",
  thumb: imagem1,
  data: "28/01/2022",
  title: 'Flamengo acerta a venda de Michael ao Al Hilal, da Arábia Saudita',
  Component: FlaVendaDeMichael,
}
