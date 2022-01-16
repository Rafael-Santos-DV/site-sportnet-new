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
            <Link title="Notícias" className="links-menu" to="">
              Notícias
            </Link>
          </li>
          <li>
            <Link title="Sobre" className="links-menu" to="">
                Sobre
            </Link>
          </li>
          <li>
            <Link title="Brasileirão" className="links-menu" to="">
                Brasileirão
            </Link>
          </li>
          <li>
            <Link title="Facebook" className="links-menu" to="">
              <span className="icons">
                <BsFacebook />
              </span>
            </Link>
          </li>
          <li>
            <Link title="Instagram" className="links-menu" to="">
              <span className="icons instagram">
                <AiOutlineInstagram />
              </span>
            </Link>
          </li>
          <li>
            <Link title="Whatsapp" className="links-menu" to="">
              <span className="icons">
                <BsWhatsapp />
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
