import React, { useEffect } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";

// esse imports têm que mudar de acordo com a notícia
import imagem1 from "../../../assets/imagem-silvinho-campo/imagem-silvinho-campo.jpg";
import imagem2 from "../../../assets/imagem-silvinho-campo/treinador_sylvinho_no_ultimo_treinamento_do_6a4w.jpg";

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


export const SilvinhoNaoCrava = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio"></aside>
        <article>
          <h1>Sylvinho ainda não crava Paulinho titular e admite tropeço na estreia do Paulistão: "A bola não entrou"</h1>
          <div className="escritor-artigo">
            <img src={perfilLeo} alt="escritor Léorion Lucena" />
            <span>Por Lérion Lucena <br/>19:30 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={imagem1} alt="imagem Silvinho em campo" />
            <strong>Foto: Marcos Ribolli</strong>
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
            <p>Paulinho foi o grande nome do <strong>empate sem gols do Corinthians</strong> contra a Ferroviária, na estreia do       Campeonato Paulista. O meio-campista entrou na etapa final, finalizou seis vezes a gol e ficou próximo de marcar em sua reestreia.</p>
            <p>
              Em entrevista coletiva, o técnico Sylvinho elogiou as qualidades do jogador, mas prefere ainda não cravar a entrada dele na equipe titular diante do Santo André, domingo, no Bruno José Daniel.
            </p>
          </article>
          <article className="article-img-post">
            <div className="container-imagem">
              <img src={imagem2} alt="imagem Silvinho em campo" />
              <span>foto: Rodrigo Coca/Agência Corinthians </span>
            </div>
            <div className="container-post"></div>
          </article>
          <article className="article-texto">

            <p>Tivemos chance de trabalhar com ele na seleção brasileira. Multicampeão no <strong>Corinthians</strong>. É o que nós imaginávamos. Meia, saudável e chegada boa de segunda linha. Tem gols. Vem de período grande inativo não só de jogos, mas de treinos. Oscilou. Mas é saudável, boa genética, cuida-se bem. Vamos levá-lo o máximo possível, otimizando minutos. Não gosto de cravar titularidade. Todos vão jogar. Uns mais, outros menos. Ainda estamos em momentos de pré-temporada, ficar no CT, dormir, treinar em dois períodos. Baixa intensidade, mas mantém o crescimento – afirmou o treinador.</p>
            <p>
            – Pouco a pouco, vai adquirindo forma. Não sei responder hoje, não sei as condições do Paulo, se tem condições de começar o jogo. Pensamos no elenco para prazo grande. Saúde do atleta é o melhor para todo mundo. Estamos falando de 15 dias. Se vai demorar sete, dez ou 15 não importa. Vamos pouco a pouco para ter o melhor – acrescentou.</p>
            <p>O Timão começou o jogo com Du Queiroz como primeiro volante. Com a entrada de Paulinho, Renato Augusto ficou mais na função, o que deixou o time ainda mais técnico.</p>
            <p>– Os rivais vão diminuindo as possibilidades de construção nossa. O desafio é fazer o time ter mobilidade melhor, qualidade no passe, gols, cruzamentos. Do outro lado, também há rival que vai te impedindo. O melhor é a qualidade do atleta em lances individuais. Queremos essa saída. Escolhemos o Du Queiroz como primeiro, vamos buscar passos para melhorá-la. Renato também pode fazer e otimizou entrada do Paulo. São alternativas para melhorar a qualidade de jogo.</p>
            <p>O resultado, claro, não foi o esperado. Mas o técnico acredita que não exista pressão neste momento:
            – Tropeço, sim. Merecíamos ganhar, mas não ganhamos. A bola não entrou. Tivemos rendimento melhor do que esperávamos. Hoje, Fagner, Gil, João... Todos extremamente cansados. Risco até de saúde, micro-lesão. Tivemos bom rendimento, não tivemos bom resultado. Saulo fez grande jogo. Com relação ao que queremos, é seguir crescendo. Pressão, não. Desejo e vontade de seguir melhorando. O campeonato é difícil, mas bonito. É bonito chegar e ganhar. Tive essa experiência três vezes. Eles sabem disso e estão com desejo. Clube projeta demais. Sabemos das nossas responsabilidades.</p>

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
export const page_CorinthiansSilvinho = {
  rota: "corinthians-silvinho-nao-crava-paulinho",
  thumb: imagem1,
  data: "26/01/2022",
  title: 'Sylvinho ainda não crava Paulinho titular e admite tropeço na estreia do Paulistão: "A bola não entrou"',
  Component: SilvinhoNaoCrava,
}
