import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import imagem1 from "../../../assets/fla-compra-marinho/fla-compra-marinho.jpg";
import imagem2 from "../../../assets/fla-compra-marinho/fla-compra-marinho2.jpg";


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


export const FlaCompraMarinho = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio"></aside>
        <article>
          <h1>Marinho é o primeiro reforço do Flamengo em 2022; veja detalhes</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>7:30 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={imagem1} alt="Imagem Marinho" />
            <strong>foto: Ivan Storti/SantosFCs</strong>
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
            <h2>O atacante é esperado no Rio de Janeiro até o final de semana e deve ser anunciado em breve</h2>
            <p>O Flamengo acertou a contratação do seu primeiro reforço para 2022. Trata-se do atacante Marinho, que pertencia ao Santos, que irá custar <strong>R$ 7 milhões</strong> junto ao Peixe. Apenas detalhes burocráticos separam o anúncio oficial.</p>

          </article>
          <article className="article-img-post">
            <div className="container-imagem" >
              <img src={imagem2} alt="imagem Marinho em campo" />
              <span>foto: Ivan Storti/SantosFCs</span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">
            <p>Desde o primeiro contato do Flamengo, Marinho deixou claro o desejo de jogar no clube. O atacante, inclusive, pediu ao Peixe para ser negociado com o Rubro-Negro. Além disso, abriu mão da dívida que o Santos tinha com ele para tornar viável o negócio.</p>
            <p>Marinho vai assinar um contrato de dois anos com o Flamengo, com a opção de renovar por mais um e receberá quase o dobro do salário que recebia no Santos, cerca de R$ 600 mil entre luvas e salários.</p>
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
export const page_Fla_Compra_Marinho = {
  rota: "flamengo-compra-marinho",
  thumb: imagem1,
  data: "28/01/2022",
  title: 'Marinho é o primeiro reforço do Flamengo em 2022; veja detalhes',
  Component: FlaCompraMarinho,
}
