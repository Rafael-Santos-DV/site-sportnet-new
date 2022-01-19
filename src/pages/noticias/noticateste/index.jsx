import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import thumbpalmeiras from "../../../assets/image-arrascaeta/arrascaeta-image.jpg";
import { three_notice_static as noticesThree } from "../../../json/three-noticias";
import { Div } from "../../../styles/article";


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


export const NoticaVar = () => {
  return(
    <Div>
      <section className="container-artigo">
        <aside className="box-anuncio" style={{width: "100%", height: "200px", border: "1px solid red"}}></aside>
        <article>
          <h1>SE QUEDA! Flamengo anuncia renovação contratual com Arrascaeta – saiba os detalhes</h1>
          <div className="escritor-artigo">
            <img src={thumbpalmeiras} alt="escritor Lorem ipsum" />
            <span>Por Antonio Mota <br/>9:53 AM GMT-3</span>
          </div>
          <div className="box-thumb">
            <img src={thumbpalmeiras} alt=""/>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, recusandae vitae, ad, eos id quae doloribus debitis voluptate praesentium eum ducimus repellendus! Quam enim sint expedita placeat debitis quia quaerat.</p>
          </article>
          <article className="article-img-post" style={{height: "400px", border: "1px solid red"}}>
            post / img
          </article>
          <article className="article-texto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cumque modi rem ab totam delectus. Omnis eligendi voluptas molestias nihil provident, doloremque quo ad doloribus velit maxime quibusdam unde animi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus ipsa quis nemo vel asperiores iste veritatis deleniti modi, corporis omnis voluptatibus commodi at excepturi voluptate voluptatem qui rem! Repudiandae.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis sit veniam, corrupti labore distinctio ipsum minima omnis autem, reiciendis magni sequi odit culpa velit illo vel voluptatibus! Perspiciatis, nihil.</p>
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

export const pageNoticiaVarmeiras = {
  rota: "noticia-palmeiras",
  thumb: thumbpalmeiras,
  data: "02/01/2022",
  title: "isso aqui é um teste de noticia fakLorem ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis sit veniam",
  Component: NoticaVar,
}
