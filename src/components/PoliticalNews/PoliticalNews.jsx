import { useState } from "react";
// import './RecentNews.css'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..
AOS.init();

const RecentNews = () => {
  const [politicalNewsData, setPoliticalNewsData] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const news = await fetch("public/recentNews.json");
        const articles = await fetch("public/allArticles.json");

        const newsData = await news.json();
        const articlesData = await articles.json();

        setPoliticalNewsData(newsData);
        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching data:", error);
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
        <div className="px-6 border-r border-gray-300 lg:col-span-2">
          <img
            className="w-full mb-6 object-cover object-center"
            src={politicalNewsData[0]?.image}
          />
          <h1 className="text-3xl  mt-2 mb-2">{politicalNewsData[0]?.title}</h1>
          <p>{politicalNewsData[0]?.subtitle}</p>
        </div>

        {/* second column */}
        <div className="px-6 border-r border-gray-300">
          {politicalNewsData?.slice(1, 4).map((item, index) => (
            <div className="mb-4" key={index}>
              <div className="bg-white  rounded">
                <img
                  className="w-full aspect-square object-cover object-center"
                  src={item?.image}
                />
                <h1 className="text-lg  mt-2 mb-2">{item?.title}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* third column */}
        <div className="px-6">
          {politicalNewsData?.slice(4, 7).map((item, index) => (
            <div className="mb-4" key={index}>
              <div className="bg-white  rounded">
                <img
                  className="w-full aspect-square object-cover object-center"
                  src={item?.image}
                />
                <h1 className="text-lg  mt-2 mb-2">{item?.title}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* News */}
        <div className="px-4 md:col-span-full lg:col-span-1">
          {/* Fourth column with news content */}
          <div className=" bg-white p-4 rounded border border-gray-300 shadow">
            {/* <h2 className="text-xl font-bold text-center border-b-2 border-black">সম্প্রতি বার্তা</h2> */}
            {articles?.map((item, i) => (
              <div key={i}>
                <h4 className=" border border-gray-300 shadow p-4 mt-5">
                  {item?.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
