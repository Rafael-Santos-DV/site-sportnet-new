import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { DivContato } from "./style";

export const Contato = () => {
  return(
    <DivContato className="container-contato">
      <div className="container-contato">
        <h1>ENTRE EM CONTATO</h1>
        <div className="box-contato">
          <div className="box--horario">
            <h2>Horário</h2>
            <span>Segunda - Sexta</span>
            <span>9:00 às 19:00</span>
          </div>
          <div className="box--dices">
            <h2>Contato</h2>
            <span>(93) 999999999</span>
            <span>sportnetnew@gmail.com</span>
          </div>
          <div className="redes--sociais">
            <h2>Redes Sociais</h2>
            <div>
              <a target="_blank" href="https://www.facebook.com/SportNet-News-100950125833333/" className="link-target-sociais" rel="noreferrer">
                <BsFacebook title="Facebook"/>
              </a>
              <a target="_blank" href="/" className="link-target-sociais" rel="noreferrer">
                <AiOutlineInstagram title="Instagram"/>
              </a>
              <a target="_blank" href="https://wa.me/message/DIEEQ3YFWEGJL1" className="link-target-sociais" rel="noreferrer">
                <BsWhatsapp title="Whatsapp"/>
              </a>
            </div>
          </div>
        </div>

      </div>
    </DivContato>
  )
};
