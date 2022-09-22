import { useEffect } from "react";
import Mole2 from "../images/mole2.png";

const EmptySlot = (props) => {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randomSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "25vw" }} src={Mole2} />
    </div>
  );
};

export default EmptySlot;