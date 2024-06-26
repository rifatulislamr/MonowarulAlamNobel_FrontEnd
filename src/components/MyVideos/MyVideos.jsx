import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const MyVideos = () => {
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videosData, setVideosData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent news from the server
        const allVideos = await axios.get("http://localhost:3000/all-videos");
        setVideosData(allVideos.data);
        console.log(allVideos.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const opts = {
    width: "100%",
    height: "236px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onPlayPause = () => {
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  const onStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const onProgress = () => {
    setCurrentTime(player.getCurrentTime());
  };

  const extractVideoId = (link) => {
    const match = link.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="container my-8 sm:my-16 mx-auto"
    >
      <h2 className="text-4xl ml-5 pb-4 border-b-2 border-black mb-8">ভিডিও</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {videosData?.slice(0, 4)?.map((item, i) => (
          <div className="aspect-video hover:scale-110 duration-700" key={i}>
            <YouTube
              videoId={extractVideoId(item.link)}
              opts={opts}
              onReady={onReady}
              onStateChange={onStateChange}
              onProgress={onProgress}
            />
            <h3 className="mt-2 text-slate-600 text-xl font-medium">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVideos;
