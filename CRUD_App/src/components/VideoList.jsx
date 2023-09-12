import Video from "./Video";
import Play_Button from "./PlayButton";
import useVideosHooks from "../Hooks/VideosHooks";
const VideoList = ({ EditedVideo }) => {
  const videos = useVideosHooks(); // this is a context for videos data sharing
  // ----------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------
  return (
    <>
      {videos.map((video_data, index) => (
        <Video
          key={index}
          title={video_data.title}
          id={index}
          channel={video_data.channel}
          views={video_data.views}
          time={video_data.time}
          verified={video_data.verified}
          EditedVideo={EditedVideo}
        >
          <Play_Button
            onPlay={() => console.log("play")}
            onPause={() => console.log("pause")}
          >
            Play
          </Play_Button>
        </Video>
      ))}
    </>
  );
};

export default VideoList;
