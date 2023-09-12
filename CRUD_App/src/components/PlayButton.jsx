import { useState } from "react";
import "./PlayButton.css";

function Play_Button({ children, onPlay, onPause }) {
  const [Playing, setPlaying] = useState(false);
  // let Playing = false // don't use this approach
  function handleClick() {
    if (Playing) onPause();
    onPlay();
    setPlaying(!Playing);
  }

  return (
    <>
      <button onClick={handleClick}>{Playing ? children : "Pause"}</button>
    </>
  );
}

export default Play_Button;
