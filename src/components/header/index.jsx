import { Link } from "react-router-dom";
import logo from "../../assets/sport-net-logo/logo-web-site.png";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { ButtonMobile } from "../menu-mobile";


export const RowHeader = () => {

  return(
    <div className="container-header">
      <ButtonMobile />
      <img src={logo} alt="logo sport-net" />
      <nav className="navigation-links">
        <ul className="list-menu">
          <li>
            <Link title="Notícias" className="links-menu" to="/">
              Notícias
            </Link>
          </li>
          <li>
            <Link title="Expediente" className="links-menu" to="expediente">
              Expediente
            </Link>
          </li>
          <li>
            <Link title="Contato" className="links-menu" to="contato">
              Contato
            </Link>
          </li>

          <li>
            <a style={{color: "#fff"}}title="Facebook" target="_blank" className="links-menu link-target-sociais" href="https://www.facebook.com/SportNet-News-100950125833333/" rel="noreferrer">
              <span className="icons">
                <BsFacebook />
              </span>
            </a>
          </li>
          <li>
            <a style={{color: "#f00d75"}} title="Instagram" target="_blank" className="links-menu link-target-sociais" href="https://www.sportnetnew.com/" rel="noreferrer">
              <span className="icons instagram">
                <AiOutlineInstagram />
              </span>
            </a>
          </li>
          <li>
            <a style={{color: "#25D366"}} title="Whatsapp" target="_blank" className="links-menu link-target-sociais" href="https://wa.me/message/DIEEQ3YFWEGJL1" rel="noreferrer">
              <span className="icons">
                <BsWhatsapp />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
