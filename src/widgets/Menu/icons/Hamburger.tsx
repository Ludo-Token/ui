import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <Svg xmlns="http://www.w3.org/2000/svg" {...props} data-name="Layer 1" id="Layer_1" viewBox="0 0 52 52"><path d="M50,12.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/><path d="M50,28H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/><path d="M50,43.5H2a2,2,0,0,1,0-4H50a2,2,0,0,1,0,4Z"/></Svg>
    
  );
};

export default Icon;
