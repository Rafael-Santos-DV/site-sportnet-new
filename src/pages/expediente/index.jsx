import { Div } from "../../styles/style-expediente";
import perfilLeo from "../../assets/dupla-leo-raf/perfil-leorion.jpg";
import perfilRaf from "../../assets/dupla-leo-raf/perfil-rafael.jpg";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { useEffect } from "react";

export const Expediente = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <Div className="container-expediente">
      <div className="title-container">
        <div>
          <h1>Expediente</h1>
          <p>Conheça abaixo a dupla que traz para você a melhor, e mais atualizada notícia do seu time do coração!</p>
        </div>
      </div>
      <div className="galery-pessoas">
        <div className="box-one">
          <h4>Redação</h4>
          <div className="box-img-infos">
            <img className="perfil-leo" src={perfilLeo} alt="perfil Léorion Lucena" />
            <strong>Léorion Lucena</strong>
            <span>Cronista /  Jornalista / Desenvolvedor</span>
            <div className="redes-sociais">
              <a style={{color: "#1778F2"}} href="www" className="links-icons" rel="noreferrer" title="facebook" target="_blank">
                <BsFacebook />
              </a>
              <a style={{color: "#f00d75"}} href="https://www.instagram.com/leorion_traderfx/" className="links-icons" rel="noreferrer" title="instagram" target="_blank">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="box-one">
          <h4>Desenvolvedor</h4>
          <div className="box-img-infos">
            <img className="perfil-rafa" src={perfilRaf} alt="perfil Rafael Santos" />
            <strong>Rafael Santos</strong>
            <span>Devenvolvedor / ReactJS / NodeJS</span>
            <div className="redes-sociais">
              <a style={{color: "#f00d75"}} href="https://www.instagram.com/rafaelrdscoding/" className="links-icons" rel="noreferrer" title="instagram" target="_blank">
                <BsInstagram />
              </a>
              <a style={{color: "#000000"}} href="https://github.com/Rafael-Santos-Dv/" className="links-icons" rel="noreferrer" title="github" target="_blank">
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
      <aside className="box-anuncio">
      </aside>
    </Div>
  )
};
