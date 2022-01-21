import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import jogadoresPalmeirasTreino from "../../../assets/palmeiras-mundial/palmeiras-mundial.jpg";
import imagemPalmeirasCampeao from "../../../assets/palmeiras-mundial/palmeiras-campeao.jpeg";
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


export const ListaRelacionadosPalmeiras = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio" style={{width: "100%", height: "200px", border: "1px solid #fff"}}></aside>
        <article>
          <h1>Palmeiras pode ter duas novas inscrições e cortará jogadores na lista do Mundial; veja panorama</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>19:30 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={jogadoresPalmeirasTreino} alt="Abel ferreira conversando com elenco no treino"/>
            <strong>Foto: Cesar Greco</strong>
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
            <p>Weverton, Vinicius Silvestre e Marcelo Lomba estão garantidos diante do regulamento que obriga a equipe a ter três goleiros.</p>
            <p>Os jogadores de linha na final da Copa Libertadores, também, não devem entrar no corte - Mayke, Luan, Gustavo Gómez, Piquerez, Danilo, Zé Rafael, Gustavo Scarpa, Raphael Veiga, Dudu e Rony.</p>
          </article>
          <article className="article-img-post">
            <div className="container-imagem">
              <img src={imagemPalmeirasCampeao} alt="imagem Palmeiras campeão" />
              <span>Foto: Ettore Chiereguini/AGIF </span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">

            <p>Restariam, portanto, dez vagas para 14 nomes: Marcos Rocha, Renan, Murilo, Kuscevic, Patrick de Paula, Jailson, Jorge, Deyverson, Wesley, Breno Lopes, Atuesta, Gabriel Menino, Gabriel Veron e Rafael Navarro. Deste grupo há nomes que jogaram com frequência em 2021 e são importantes para Abel, como Rocha, Patrick, Deyverson e Wesley.</p>
            <p>
            Nesta quarta está previsto um novo trabalho assim, mas desta vez entre duas equipes formadas pelo próprio elenco do Palmeiras. O Verdão fará sua estreia na temporada na véspera do fechamento da lista para o Mundial, domingo, dia 23, contra o Novorizontino, pelo Campeonato Paulista.</p>
            <strong>Veja a pré-lista do Palmeiras e os números para o Mundial de Clubes:</strong>
             <ol>
              1 - Vinicius <br/>
              2 - Marcos Rocha <br/>
              3 - Renan <br/>
              4 - Kuscevic <br/>
              5 - Patrick de Paula <br/>
              6 - Jorge <br/>
              7 - Dudu <br/>
              8 - Zé Rafael <br/>
              9 - Deyverson <br/>
              10 - Rony <br/>
              11 - Wesley <br/>
              12 - Mayke <br/>
              13 - Luan <br/>
              14 - Gustavo Scarpa <br/>
              15 - Gustavo Gómez <br/>
              19 - Breno Lopes <br/>
              20 - Atuesta <br/>
              21 - Weverton <br/>
              22 - Piquerez <br/>
              23 - Raphael Veiga <br/>
              25 - Gabriel Menino <br/>
              27 - Gabriel Veron <br/>
              28 - Danilo <br/>
              29 - Rafael Navarro <br/>
              31 - Mateus <br/>
              34 - Lucas Freitas <br/>
              35 - Fabinho <br/>
              37 - Michel <br/>
              38 - Matheus Fernandes <br/>
              40 - Alan <br/>
              41 - Giovani <br/>
              42 - Marcelo Lomba <br/>
              46 - Vanderlan <br/>
              49 - Gabriel Silva <br/>
             </ol>

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
export const page_RelacionadosPalmeiras = {
  rota: "relacionados-para-o-mundial-palmeiras",
  thumb: jogadoresPalmeirasTreino,
  data: "19/01/2022",
  title: "Palmeiras pode ter duas novas inscrições e cortará jogadores na lista do Mundial; veja panorama",
  Component: ListaRelacionadosPalmeiras,
}
