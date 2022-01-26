import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import imagem1 from "../../../assets/sao-paulo-fpf/imagem-murumbi.jpg";
// aqui vem a imagem2, mas nesse artigo não será preciso


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


export const SantosFpf = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio"></aside>
        <article>
          <h1>FPF cogitou levar final da copinha para o Morumbi, mas São Paulo recusou</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>19:30 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={imagem1} alt="imagem Estádio Murumbi" />
            <strong>Fernando Dantas/Gazeta Press</strong>
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
            <p>A Federação Paulista de Futebol (FPF) cogitou levar a final da Copinha, entre Palmeiras e Santos, para o Morumbi. A opção, no entanto, foi descartada pelo São Paulo, dono do estádio. Com isso, a decisão acontecerá no Allianz Parque, casa do time alviverde, amanhã (25), às 10h (de Brasília). O Morumbi era visto como uma opção com segurança e neutralidade para o duelo entre Palmeiras e Santos. O São Paulo, contudo, optou por recusar a oferta, segundo pessoas do clube e da FPF ouvidas pela reportagem. O motivo da decisão tricolor foi o gramado. O estádio está em fase final de preparação para voltar a receber jogos e o time tricolor não queria adiantar o processo.</p>
            <p>
            O primeiro compromisso do São Paulo no Morumbi na temporada está marcado para o próximo domingo (30). A equipe de Rogério Ceni receberá o Ituano, às 16h (de Brasília), pela segunda rodada do Paulistão. As finais da Copinha aconteciam tradicionalmente no Pacaembu, mas o estádio tem previsão de retorno apenas em outubro do próximo ano. O local passa por obras após ter sido concedido à iniciativa privada. O Canindé também chegou a ser consultado, mas a FPF optou pelo Allianz Parque. A decisão gerou críticas do Santos. O time alvinegro emitiu uma nota após o anúncio da decisão e afirmou que o local privilegiaria o Palmeiras e "não atende o princípio da isonomia".
            </p>

          </article>
          <article className="article-img-post">
            <div className="container-imagem" style={{display: "none"}}>
              <img src={imagem1} alt="imagem Estádio Murumbi" />
              <span></span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">
            <p>"O Santos FC lamenta e repudia a decisão da Federação Paulista de Futebol (FPF) de marcar a final da Copa São Paulo de Futebol Júnior, nesta terça-feira (25/01) para o Allianz Parque. O Peixe considera que tal decisão, que no regulamento da competição está sob responsabilidade do Departamento de Competições da FPF, privilegia o outro finalista e não atende ao princípio de isonomia. Desde o término das semifinais, na noite de sábado, o presidente do Santos, Andres Rueda, manteve contato com o presidente da FPF, Reinaldo Carneiro Bastos, argumentando que nosso adversário tinha o direito de jogar com torcida, mas que o estádio deveria ser neutro.</p>
            <p>Historicamente, as finais da Copa SP ocorrem no Pacaembu, como o próprio regulamento deixa claro. Rueda apontou diversas alternativas para que a final ocorresse seguindo o tradicional princípio da neutralidade nesta competição de base e reitera seu descontentamento com a decisão", publicou.</p>
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
export const page_SantosFpf = {
  rota: "sao-paulo-fpf",
  thumb: imagem1,
  data: "26/01/2022",
  title: 'FPF cogitou levar final da copinha para o Morumbi, mas São Paulo recusou',
  Component: SantosFpf,
}
