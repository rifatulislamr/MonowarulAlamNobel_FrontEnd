import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import MyVideos from "../../components/MyVideos/MyVideos";
import PersonalNews from "../../components/PersonalNews/PersonalNews";
import PoliticalNews from "../../components/PoliticalNews/PoliticalNews";
import RecentNews from "../../components/RecentNews/RecentNews";

import SocialNews from "../../components/SocialNews/SocialNews";

const Home = () => {
  useEffect(() => {
    // Scroll to the top-left corner (0,0) when the HomePage component is mounted
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <Banner></Banner>
      <RecentNews></RecentNews>
      <PersonalNews></PersonalNews>
      <SocialNews></SocialNews>
      <PoliticalNews></PoliticalNews>
      <MyVideos></MyVideos>
    </div>
  );
};

export default Home;
