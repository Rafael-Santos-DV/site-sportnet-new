import { ContainerNotFound } from "./style";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return(
    <ContainerNotFound className="container-page-notfound">
      <Link to="/">
        <div>
            <span className="number">
              4
            </span>
            <span className="number">
              0
            </span>
            <span className="number">
              4
            </span>
            <div className="container-text-notfound">
              <h1>Página não encontrada</h1>
              <FaSearch className="icon"/>
            </div>
        </div>
      </Link>
    </ContainerNotFound>
  )
};
