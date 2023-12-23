import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TabBar = () => {
  // active state for tab
  const [selectedTab, setSelectedTab] = useState("recent");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const [recentNewsData, setRecentNewsData] = useState([]);
  const [personalNewsData, setPersonalNewsData] = useState([]);
  const [socialNewsData, setSocialNewsData] = useState([]);
  // const [politicalNewsData, setPoliticalNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent news from the server
        const newsResponse = await axios.get(
          "http://localhost:3000/social-news"
        );
        setSocialNewsData(newsResponse.data);

        // get all recent news
        const recentNewsResponse = await axios.get(
          "http://localhost:3000/recent-news"
        );
        setRecentNewsData(recentNewsResponse.data);

        // get all political news
        // const politicalNews = await axios.get(
        //   "http://localhost:3000/political-news"
        // );
        // setPoliticalNewsData(politicalNews.data);

        //get all personal news
        const personalNews = await axios.get(
          "http://localhost:3000/personal-news"
        );
        setPersonalNewsData(personalNews.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-start justify-end">
      <div role="tablist" className="tabs tabs-bordered">
        {/* recent */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          id="recent_tab"
          className="tab text-slate-600 text-lg font-semibold"
          aria-label="সম্প্রতিক"
          onChange={() => handleTabChange("recent")}
        />
        {selectedTab === "recent" && (
          <div role="tabpanel" className="tab-content my-6">
            <div className="px-4">
              <div className=" bg-white p-4 rounded border border-gray-300 shadow">
                {recentNewsData?.slice(0, 6)?.map((item, i) => (
                  <div key={i}>
                    <Link to={`/recent-news/${item?._id}`}>
                      <h4 className=" border border-gray-300 shadow p-4 mt-5">
                        {item?.title}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* personal */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          id="personal_tab"
          className="tab text-slate-600 text-lg font-semibold "
          aria-label="ব্যক্তিগত"
          onChange={() => handleTabChange("personal")}
        />

        {selectedTab === "personal" && (
          <div role="tabpanel" className="tab-content my-6">
            <div className="px-4">
              <div className=" bg-white p-4 rounded border border-gray-300 shadow">
                {personalNewsData?.slice(0, 6)?.map((item, i) => (
                  <div key={i}>
                    <Link to={`/personal-news/${item?._id}`}>
                      <h4 className=" border border-gray-300 shadow p-4 mt-5">
                        {item?.title}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* social */}
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          id="social_tab"
          className="tab text-slate-600 text-lg font-semibold"
          aria-label="সামাজিক"
          onChange={() => handleTabChange("social")}
        />

        {selectedTab === "social" && (
          <div role="tabpanel" className="tab-content my-6">
            <div className="px-4">
              <div className=" bg-white p-4 rounded border border-gray-300 shadow">
                {socialNewsData?.slice(0, 6)?.map((item, i) => (
                  <div key={i}>
                    <Link to={`/social-news/${item?._id}`}>
                      <h4 className=" border border-gray-300 shadow p-4 mt-5">
                        {item?.title}
                      </h4>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabBar;
