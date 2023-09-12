import { useContext } from "react";
import VideoDispatchContext from "../Context/VideoDispatch";

function useVideoDispatch() {
  return useContext(VideoDispatchContext); // this is context for dispatch
}

export default useVideoDispatch;
