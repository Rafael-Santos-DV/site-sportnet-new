import { Link } from "react-router-dom";
import thumbflamengo from "../../../assets/image-arrascaeta/arrascaeta-image.jpg";

export const PalmeirasSemMundial = () => {
  return(
    <div className="box-noticia">
      <Link to="" className="router-notic">
        <img src={thumbflamengo} alt="thumb flamengo" />
        <div className="box-info-img">
          <span>02/11/2022</span>
          <h1>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h1>
        </div>
      </Link>
    </div>
  );
}

export const pageFlamengo = {
  rota: "fla",
  thumb: thumbflamengo,
  data: "02/01/2022",
  title: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
  component: PalmeirasSemMundial,
}

