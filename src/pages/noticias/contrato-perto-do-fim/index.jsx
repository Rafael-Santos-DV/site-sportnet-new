import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import andreasTreino from "../../../assets/andreas-treino/andreas-treino.jpg";
import andreasEmJogo from "../../../assets/andreas-em-campo/andreas-em-campo.jpg";
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


export const ContratoPertoDoFim = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio" style={{width: "100%", height: "200px", border: "1px solid #fff"}}></aside>
        <article>
          <h1>Contrato perto do fim, fase do United e vontade do jogador: os argumentos do Flamengo para baratear Andreas</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>17:22 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={andreasTreino} alt="Andreas no treino"/>
            <strong>Andreas Pereira no treino do Flamengo no Ninho do Urubu — Foto: Marcelo Cortes/Flamengo</strong>
          </div>

        </article>
      </section>
      <section className="container-principal">
        <div className="box-redes-sociais">
          <div>
            <a title="Facebook" target="_blank" className="links-redes" href="https://www" rel="noreferrer">
              <span className="icons">
                <BsFacebook />
              </span>
            </a>

            <a title="Instagram" target="_blank" className="links-redes" href="https://www" rel="noreferrer">
              <span className="icons instagram">
                <AiOutlineInstagram />
              </span>
            </a>

            <a title="Whatsapp" target="_blank" className="links-redes" href="https://www" rel="noreferrer">
              <span className="icons">
                <BsWhatsapp />
              </span>
            </a>
          </div>
        </div>
        <main className="content-principal">
          <article className="article-texto">
            <p>Uma proposta bem abaixo do valor estipulado em contrato, mas com argumentos.
            Desta maneira, o <strong>Flamengo</strong> aguarda a resposta do Manchester United pela oferta de 8 milhões de euros (R$ 50 milhões) para ficar em definitivo com Andreas Pereira. E a matemática para definição do valor inclui o contrato perto do fim, a necessidade dos ingleses de ir ao mercado na janela de verão e, principalmente, o desejo do jogador.
            </p>
          </article>
          <article className="article-img-post">
            <div className="container-imagem">
              <img src={andreasEmJogo} alt="andreas em campo" />
              <span>FOTO: ALEXANDRE VIDAL / FLAMENGO</span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">
            <p>A proposta foi formalizada pelos rubro-negros na semana passada e desde então não houve contato de volta da diretoria do United. Intermediários que participaram das tratativas para o empréstimo monitoram a situação de perto e a percepção é de que o momento é de paciência, mas há otimismo no desfecho positivo com Andreas assinando até o fim de 2026 com o Flamengo.</p>
            <p>Se à primeira vista a proposta destoa muito dos 20 milhões de euros previstos na clausula de compra do contrato de empréstimo, o clube carioca entende que há fatores que indicam os 8 milhões de euros ofertados como dentro do valor de mercado. Há uma expectativa de que o Manchester faça uma contraproposta, dando início ao debate natural de toda negociação.</p>
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

export const page_contrato_perto_do_fim = {
  rota: "contrato-perto-do-fim",
  thumb: andreasTreino,
  data: "19/01/2022",
  title: "Contrato perto do fim, fase do United e vontade do jogador: os argumentos do Flamengo para baratear Andreas",
  Component: ContratoPertoDoFim,
}
