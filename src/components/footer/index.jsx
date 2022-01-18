import { Link } from "react-router-dom";
import logo from "../../assets/sport-net-logo/logo-web-site.png";

export const ContainerFooter = () => {
  return(
    <div className="container-footer">
      <div className="box-img">
        <img alt="logo sportnet" src={logo} />
        <p> <a className="links" rel="noreferrer" target="_blank" href="https://sportnetnew.com">sportnetnew.com</a>, o site com as melhores notícias do Brasileirão!</p>
      </div>
      <div className="container-sportnet">
        <h4>SportNet</h4>
        <Link className="links" to="">Expediente</Link>
        <Link className="links" to="">Contato</Link>
      </div>
    </div>
  );
}
