import { TiThMenuOutline } from "react-icons/ti";
import { FiX } from "react-icons/fi";
import { MenuMobile } from "../../styles";
import { useState } from "react";

export const ButtonMobile = () => {
  const [getPermi, setPermi] = useState(false);

  const handleChangePermi = () => {
    setPermi(v => !v);
  };

  return(
    <MenuMobile className="button-icon-mobile" permi={getPermi}>
        <TiThMenuOutline onClick={handleChangePermi} className="buttons-mobile"/>
        <FiX className="buttons-mobile" onClick={handleChangePermi} />
    </MenuMobile>
  );
};
