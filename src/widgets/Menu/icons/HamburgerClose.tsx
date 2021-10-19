import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.7 83.63"><title/><g data-name="Layer 2" id="Layer_2"><g data-name="Layer 1" id="Layer_1-2"><path d="M50.24,41.82,82.76,9.3a3.19,3.19,0,0,0,0-4.52L78.89.91a3.27,3.27,0,0,0-4.52,0L41.85,33.43,9.33.91A3.27,3.27,0,0,0,4.81.9L.93,4.77a3.2,3.2,0,0,0,0,4.52L33.46,41.82.94,74.34a3.19,3.19,0,0,0,0,4.52l3.87,3.87a3.27,3.27,0,0,0,4.52,0L41.85,50.21,74.37,82.73a3.27,3.27,0,0,0,4.52,0l3.87-3.87a3.2,3.2,0,0,0,0-4.52Z"/></g></g></Svg>
   
  );
};

export default Icon;
