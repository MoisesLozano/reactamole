import { useEffect } from "react";
import mole1 from "../images/mole1.png";

function Mole(props) {
  useEffect(() => {
    // Feel free to adjust this number as you see fit.
    // It is your game to tune!
    let randomSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randomSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "25vw" }} src={mole1} onClick={props.handleClick} />
    </div>
  );
}

export default Mole;