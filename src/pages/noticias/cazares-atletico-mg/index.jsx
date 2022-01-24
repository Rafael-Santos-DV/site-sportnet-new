import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import cazaresAtletico from "../../../assets/cazares-atletico/cazares-atletico.jpg";
import cazaresFlu from "../../../assets/cazares-atletico/cazares-fluminense.webp";
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


export const CazaresAtleFlu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section id="teste" className="container-artigo">
        <aside className="box-anuncio" style={{width: "100%", height: "200px", border: "1px solid #fff"}}></aside>
        <article>
          <h1>Cazares exalta trajetória no Atlético ao se despedir do futebol brasileiro</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>18:47 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={cazaresAtletico} alt="Cazares tempo de atlético"/>
            <strong>foto: Bruno Cantini/Atlético</strong>
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
            <p>Estrangeiro com o maior número de jogos pelo Atlético, Cazares vai deixar o futebol brasileiro após seis anos. O meia equatoriano está de saída do Fluminense para defender o Metalist, da Ucrânia.</p>
          </article>
          <article className="article-img-post">
            <div className="container-imagem">
              <img src={cazaresFlu} alt="Cazares Fluminense" />
              <span>Foto: Mailson Santana</span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">
            <p>Com a negociação quase finalizada, o jogador publicou uma mensagem em suas redes sociais, nessa quarta-feira (19), se despedindo do Brasil. Ele agradeceu o apoio e exaltou sua trajetória no Galo.</p>
            <p>"Quero agradecer a todos que de alguma forma me ajudaram e me apoiaram durante o período em que estive no Brasil. Desde o início fui muito acolhido e aqui vivi momentos incríveis. Foi tudo muito intenso, marquei gols, assistências, conquistei títulos e convocações. Joguei em três dos maiores clubes do Brasil. Marquei história entre os estrangeiros do Galo, joguei com ídolos e conheci a Massa atleticana. Senti toda a energia da torcida corinthiana e fui mais um louco no bando, e por fim, não menos importante joguei no Tricolor das Laranjeiras. Obrigado a todos os torcedores, funcionários e aos meus representantes pelos grandes momentos. Agora é hora de novos desafios! (SIC)", escreveu.</p>
            <p>Cazares chegou ao Atlético no início de 2016 após se destacar no Independiente del Valle, do Equador. No clube mineiro, marcou 41 gols e deu 47 assistências em 205 partidas.</p>
            <p>O meia é o segundo maior artilheiro estrangeiro da história do Galo, atrás apenas do atacante argentino Lucas Pratto, que tem 42 gols. Pelo alvinegro, Cazares conquistou o Campeonato Mineiro de 2017 e foi vice-campeão da Copa do Brasil no ano seguinte.</p>
            <p>Pouco utilizado pelo técnico Jorge Sampaoli em 2020, o jogador deixou o Atlético para vestir a camisa do Corinthians em setembro daquele ano. Pelo Timão, foram 27 jogos disputados, com dois gols e cinco assistências.</p>
            <p>Aos 29 anos, Cazares se despede do Fluminense após entrar em campo 37 vezes. Ele marcou um gol e deu quatro assistências.</p>
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
export const page_NoticiaCazares = {
  rota: "cazares-seu-fim-no-futebol-brasileiro",
  thumb: cazaresAtletico,
  data: "19/01/2022",
  title: "Cazares exalta trajetória no Atlético ao se despedir do futebol brasileiro",
  Component: CazaresAtleFlu,
}
