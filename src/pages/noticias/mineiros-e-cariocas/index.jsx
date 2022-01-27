import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import imagem1 from "../../../assets/mineiros-e-cariocas/imagem-galo.jpg";
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


export const MineirosECariocas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio"></aside>
        <article>
          <h1>Brasileirão 2022: Atlético-MG e Flamengo são Favoritos</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>19:30 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={imagem1} alt="imagem Estádio Murumbi" />
            <strong>Foto: Twitter/Atlético-MG</strong>
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
            <p>O Brasileirão da Série A começa em 10 de abril, mas você já pode dar os seus palpites e indicar quem será o grande campeão.</p>
            <h2><strong>Atlético MG</strong></h2>
            <p>
            Atual campeão nacional e da Copa do Brasil, o <strong>Atlético-MG</strong> é obviamente um dos grandes favoritos para mais uma conquista. Para a temporada de 2022, tem novidades no comando técnico da formação de Belo Horizonte. Saiu o técnico Cuca e chegou o argentino Antonio Mohamed, o “El Turco”, ex-Celta de Vigo, da Espanha, e Monterrey, do México.
            </p>
            <p>Em campo, o atacante Diego Costa não renovou o seu contato, porém Hulk, um dos principais jogadores alvinegros, se mantém.</p>

          </article>
          <article className="article-img-post">
            <div className="container-imagem" style={{display: "none"}}>
              <img src="" alt="" />
              <span></span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">
            <h2><strong>Flamengo</strong></h2>
            <p>O <strong>Flamengo</strong> segue firme e forte e vai para mais uma temporada com grandes chances de gritar “é campeão”. Os rubro-negros agora são treinados pelo português Paulo Souza e continuam com a sua forte espinha dorçal: Gabigol, Arrascaeta, Bruno Henrique, entre outros.  Há pelas quatro temporadas o Mengão está na briga pelo topo da tabela. Ano passado o time carioca foi vice-campeão depois de ter ficado com o troféu em 2019 e 2020.</p>

            <h2><strong>Palmeiras</strong></h2>
            <p>Bicampeão da Libertadores em 2021, o <strong>Palmeiras</strong> vai entrar no Campeonato Brasileiro com muita vontade de faturar o título nacional. O técnico Abel Ferreira continua no comando e é um reforço gigantesco para os palmeirenses. O português já conquistou além da Libertadores, a Copa do Brasil, porém, não dá para dizer o mesmo da competição mais importante do futebol brasileiro.</p>

            <h2><strong>Corinthians</strong></h2>
            <p>O <strong>Corinthians</strong> pode, sim, fazer uma campanha bem positiva no Campeonato Brasileiro. Os alvinegros de São Paulo, têm em seu elenco jogadores de alto talento como Roger Guedes, Paulinho, Giuliano, Renato Augusto e Willian. É um ótimo setor ofensivo, não é mesmo? Resta saber se até a hora de a bola rolar na competição nacional se o técnico Sylvinho estará no cargo.</p>

            <h2><strong>Fluminense</strong></h2>
            <p>O <strong>Fluminense</strong> também pode surpreender. O elenco tricolor para 2022 é bem qualificado. Mesmo que não seja campeão, chances de ficar na parte superior da tabela não faltam. O técnico Abel Braga está de volta ao clube das Laranjeiras. Junto com o veterano comandante chegaram os seguintes atletas: Felipe Melo, Fábio, David Duarte, Germán Cano e Willian Bigode. Estes são os principais nomes. A temporada da formação carioca promete ser boa. Agora vamos ver dentro das quatro linhas, que é o que interessa.</p>
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

export const page_MineirosECariocas = {
  rota: "mineiros-e-cariocas",
  thumb: imagem1,
  data: "27/01/2022",
  title: 'Brasileirão 2022: Atlético-MG e Flamengo São Favoritos',
  Component: MineirosECariocas,
}
