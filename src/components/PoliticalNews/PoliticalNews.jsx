import axios from "axios";
import { useState } from "react";
// import './RecentNews.css'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { Link } from "react-router-dom";
// ..
AOS.init();

const PoliticalNews = () => {
  const [politicalNewsData, setPoliticalNewsData] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent news from the server
        const newsResponse = await axios.get(
          "http://localhost:3000/political-news"
        );
        setPoliticalNewsData(newsResponse.data);

        // Fetch all articles from the server
        const articlesResponse = await axios.get(
          "http://localhost:3000/all-articles"
        );
        setArticles(articlesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="container mx-auto py-8 md:py-16"
    >
      <h2 className="text-4xl ml-5 pb-4 border-b-2 border-black mb-8">
        রাজনৈতিক কর্মকান্ড
      </h2>
      {/* First column */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-0">
        <div className="px-6 border-r border-gray-300 lg:col-span-2 ">
          <Link to={`/political-news/${politicalNewsData[0]?._id}`}>
            <img
              className="w-full mb-6 object-cover object-center hover:brightness-75 transition"
              src={politicalNewsData[0]?.image}
              alt={politicalNewsData[0]?.title}
            />

            <h1 className="text-3xl mt-2 mb-2">
              {politicalNewsData[0]?.title}
            </h1>
            <p>{politicalNewsData[0]?.subtitle}</p>
          </Link>
        </div>

        {/* second column */}
        <div className="px-6 border-r border-gray-300">
          {politicalNewsData?.slice(1, 4).map((item, index) => (
            <div className="mb-4" key={index}>
              <Link to={`/political-news/${item?._id}`}>
                <div className="bg-white  rounded">
                  <img
                    className="w-full aspect-square object-cover object-center hover:brightness-75 transition"
                    src={item?.image}
                  />
                  <h1 className="text-lg  mt-2 mb-2">{item?.title}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* third column */}
        <div className="px-6">
          {politicalNewsData?.slice(4, 7).map((item, index) => (
            <div className="mb-4" key={index}>
              <Link to={`/political-news/${item?._id}`}>
                <div className="bg-white  rounded">
                  <img
                    className="w-full aspect-square object-cover object-center hover:brightness-75 transition"
                    src={item?.image}
                  />
                  <h1 className="text-lg  mt-2 mb-2">{item?.title}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* News */}
        <div className="px-4 md:col-span-full lg:col-span-1">
          {/* Fourth column with news content */}
          <div className=" bg-white p-4 rounded border border-gray-300 shadow">
            {/* <h2 className="text-xl font-bold text-center border-b-2 border-black">সম্প্রতি বার্তা</h2> */}
            {articles?.slice(22, 29).map((item, i) => (
              <div key={i}>
                <Link
                  to={`/all-articles/${item?._id}`}
                  className="cursor-pointer"
                >
                  <h4 className=" border border-gray-300 shadow p-4 mt-5">
                    {item?.title}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticalNews;
