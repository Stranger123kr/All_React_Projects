import { useContext } from "react";
import VideosContext from "../Context/VideosContext";

function useVideosHooks() {
  return useContext(VideosContext); // this is context for dispatch
}

export default useVideosHooks;
