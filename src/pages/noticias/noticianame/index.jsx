import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import thumbnoticetwo from "../../../assets/flamengo-treinamento/flamengo-treinamento.jpeg";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";


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


export const NameNoticia = () => {
  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio" style={{width: "100%", height: "200px", border: "1px solid red"}}></aside>
        <article>
          <h1>SE QUEDA! Flamengo anuncia renovação contratual com Arrascaeta – saiba os detalhes</h1>
          <div className="escritor-artigo">
            <img src={thumbnoticetwo} alt="escritor Lorem ipsum" />
            <span>Por Antonio Mota <br/>9:53 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={thumbnoticetwo} alt=""/>
            <strong>Eurasia Sport Images/GettyImages</strong>
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
            <p>Agora é oficial. <strong>O Flamengo anunciou, no início da manhã desta terça-feira (18), a renovação de contrato do meio-campista Giorgian de Arrascaeta até o final de 2026.</strong> Em redes sociais, o Rubro-Negro Carioca oficializou o acordo com o uruguaio e colocou um ponto final nas negociações que se arrastavam há quase um ano.</p>
            <p>Flamengo e Arrascaeta iniciaram as conversas acerca da renovação do vínculo no começo do ano passado. Contudo, o negócio se arrastou por um imbróglio relacionado à uma exigência do empresário do camisa 14, que exigia que o clube comprasse os 25% dos direitos econômicos do meia pertencentes ao Defensor Sporting, do Uruguai. Por isso, o acordo demorou a sair.   </p>
          </article>
          <article className="article-img-post" style={{height: "400px", border: "1px solid red"}}>
            post / img
          </article>
          <article className="article-texto">
            <p>Nesta direção, para fechar o novo contrato, o Flamengo alinhou com o agente de “Arrasca” um trato para comprar os direitos econômicos do meia que pertencem ao clube do Uruguai, mas com cláusulas de performance. O Fla vai pagar à vista por uma fração do percentual desejado, que, conforme o “ge”, poderá chegar aos 12,5% caso o atleta alcance metas nos próximos cinco anos.  </p>
            <p>Em outras palavras, o Flamengo vai adquirir de imediato apenas uma fatia do percentual que pertence ao Defensor. O restante o Fla vai comprar apenas caso o camisa 14 bata metas individuais e coletivas. Vale notar que o reajuste salarial e luvas estavam acertados desde o ano passado.</p>
            <p>Formado no Defensor e com passagem vitoriosa pelo Cruzeiro, Arrascaeta chegou ao Flamengo no início de 2019 e, desde então, disputou 135 partidas pela equipe, com 38 gols e 46 assistências. No clube, o meia ganhou nove títulos, incluindo uma Conmebol Libertadores e dois Campeonatos Brasileiros.</p>
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

export const pageNameNew = {
  rota: "noticia-arrascaeta",
  thumb: thumbnoticetwo,
  data: "02/01/2022",
  title: "Nesta direção, para fechar o novo contrato, o Flamengo alinhou com o agente de “Arrasca”",
  Component: NameNoticia,
}
