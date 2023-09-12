import { useContext } from "react";
import "./Video.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import ThemeContext from "../Context/ThemeContext";
import useVideoDispatch from "../Hooks/VideosDispatch";

// -----------------------------------------------------------------------------------

function Video({
  title,
  id,
  channel,
  views,
  time,
  verified,
  children,
  EditedVideo,
}) {
  const themeContext = useContext(ThemeContext);
  const dispatch = useVideoDispatch(); // this is context for dispatch

  return (
    <>
      <div className={`container ${themeContext}`}>
        <div className={`card ${themeContext}`}>
          <div className="pic">
            <img src={`https://picsum.photos/id/${id}/0/0`} alt="random_img" />
          </div>
          <h1 className={`title`}>{title}</h1>
          <div className="channel">
            {channel}
            {verified && <span>✅</span>}
          </div>
          <div className="views">
            <span className="view">{views} views</span>
            <span className="time">{time}</span>
          </div>
          <div className="btn">{children}</div>
          <div className={`delete ${themeContext}`}>
            <AiOutlineDelete
              className=""
              onClick={() => dispatch({ type: "Delete", payload: id })}
            />
            <BiEdit className="Edited" onClick={() => EditedVideo(id)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
