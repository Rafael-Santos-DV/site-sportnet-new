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
            <Link title="Sobre" className="links-menu" to="sobre">
                Sobre
            </Link>
          </li>
          <li>
            <Link title="Brasileirão" className="links-menu" to="brasileirao">
                Brasileirão
            </Link>
          </li>
          <li>
            <a title="Facebook" target="_blank" className="links-menu" href="https://www" rel="noreferrer">
              <span className="icons">
                <BsFacebook />
              </span>
            </a>
          </li>
          <li>
            <a title="Instagram" target="_blank" className="links-menu" href="https://www" rel="noreferrer">
              <span className="icons instagram">
                <AiOutlineInstagram />
              </span>
            </a>
          </li>
          <li>
            <a title="Whatsapp" target="_blank" className="links-menu" href="https://www" rel="noreferrer">
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
