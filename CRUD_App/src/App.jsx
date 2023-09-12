import "./App.css";
import { useState, useReducer } from "react";
import VideoDB from "./data/Video_data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./Context/ThemeContext";
import VideosContext from "./Context/VideosContext";
import VideoDispatchContext from "./Context/VideoDispatch";

// ----------------------------------------------------------------------------------

function App() {
  const videosReducer = (videos, action) => {
    switch (action.type) {
      case "Add":
        return [...videos, { ...action.payload, id: videos.length + 1 - 1 }];

      case "Delete":
        return videos.filter((vide, index) => index !== action.payload);

      case "Update":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        return newVideos;

      default:
        return videos;
    }
  };

  // ----------------------------------------------------------------------------------

  const [videos, dispatch] = useReducer(videosReducer, VideoDB); // this is use reducer

  const [theme, setTheme] = useState(
    //  this is set use sate for theme change
    localStorage.getItem("themeMode") === null
      ? "DarkMode"
      : localStorage.getItem("themeMode")
  );

  const [editableVideos, setEditableVideos] = useState(null); //  this is use state

  // ----------------------------------------------------------------------------------

  const EditedVideo = (id) => {
    // this is a function
    setEditableVideos(videos.find((vide) => vide.id === id));
  };

  // ----------------------------------------------------------------------------------

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <VideosContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>
            <div className={`flex ${theme}`}>
              <VideoList EditedVideo={EditedVideo} />
              <AddVideo
                setTheme={setTheme}
                theme={theme}
                editableVideos={editableVideos}
                setEditableVideos={setEditableVideos}
              ></AddVideo>
            </div>
          </VideoDispatchContext.Provider>
        </VideosContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
