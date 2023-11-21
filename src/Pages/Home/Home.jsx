import Banner from "../../components/Banner/Banner";
import PersonalNews from "../../components/PersonalNews/PersonalNews";
import PoliticalNews from "../../components/PoliticalNews/PoliticalNews";
import RecentNews from "../../components/RecentNews/RecentNews";

import SocialNews from "../../components/SocialNews/SocialNews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentNews></RecentNews>
      <PersonalNews></PersonalNews>
      <SocialNews></SocialNews>
      <PoliticalNews></PoliticalNews>
    </div>
  );
};

export default Home;
