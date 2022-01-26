import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import imagem1 from "../../../assets/imagem-arouca-santos/imagem-arouca-santos.jpg";
import imagem2 from "../../../assets/imagem-arouca-santos/imagem-arouca-2.jpeg";

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
          <h1>Bruno Marques, do Santos, viaja a Portugal para acertar empréstimo ao Arouca</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>19:30 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={imagem1} alt="imagem Bruno Marques Santos" />
            <strong>Foto: Arquivo pessoal</strong>
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
            <p>Bruno Marques chegou a Portugal nesta terça-feira. O atacante do Santos será emprestado ao Arouca, que disputa a primeira divisão do país. O jogador ficará no clube europeu até junho de 2023, com opção de compra fixada em 1 milhão de euros (cerca de R$ 6,1 milhões).
            O empréstimo foi aprovado pelo Comitê de Gestão do clube na última semana. O trâmite, com tudo, sofreu um atraso porque Bruno Marques testou positivo para Covid-19 e precisou cumprir o período de isolamento.</p>
            <p>
              Dentro do Peixe, o empréstimo é visto com bons olhos, uma vez que o jogador não estava nos planos do técnico Fábio Carille. O desejo do estafe do atacante também era encaixá-lo em um clube na Europa.
            </p>
          </article>
          <article className="article-img-post">
            <div className="container-imagem">
              <img src={imagem2} alt="imagem Bruno Marques Santos"/>
              <span>Foto: Ivan Storti/Santos FC</span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">

            <p>
              Bruno Marques pouco jogou na última temporada. Pelo time profissional do Santos, foram apenas 15 partidas e um gol marcado. Sem espaço, o atacante foi para a equipe sub-23, pela qual atuou seis vezes e também fez um gol.
            </p>

            <p>
              No fim de 2020, após destaque, Bruno Marques foi adquirido definitivamente pelo Santos por R$ 600 mil, por 70% dos direitos econômicos. O centroavante havia chegado ao Peixe por empréstimo pelo Lagarto, do Sergipe, time do atacante Diego Costa. Ele tem contrato até dezembro de 2024 com o Peixe.
            </p>

            <p>
              Desde então, porém, Bruno Marques não conseguiu se firmar no time profissional do Santos e vê com bons olhos uma liberação para a Europa em 2022.
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
export const page_BrunoMarquesSantosArouca = {
  rota: "bruno-marques-santos-arouca",
  thumb: imagem1,
  data: "26/01/2022",
  title: 'Bruno Marques, do Santos, viaja a Portugal para acertar empréstimo ao Arouca"',
  Component: SantosEArouca,
}
