
import Banner from "../../components/Banner/Banner";
import RecentNews from "../../components/RecentNews/RecentNews";
// import RecentNewsItems from "../../components/RecentNews/RecentNewsItems";
import PersonalNews from "../../components/PersonalNews/PersonalNews";
import PoliticalNews from "../../components/PoliticalNews/PoliticalNews";

import SocialNews from "../../components/SocialNews/SocialNews";


const Home = () => {
   
    return (
        <div >
            
            <Banner></Banner>
         <RecentNews></RecentNews>
         {/* <RecentNewsItems></RecentNewsItems> */}
            {/* <PersonalNews></PersonalNews>
            <SocialNews></SocialNews>
            <PoliticalNews></PoliticalNews> */}
            
        
        </div>
    );
};

export default Home;