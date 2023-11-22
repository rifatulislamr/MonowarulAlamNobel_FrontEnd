import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SocialNews = () => {
  const [socialNewsData, setSocialNewsData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent news from the server
        const newsResponse = await axios.get(
          "http://localhost:3000/social-news"
        );
        setSocialNewsData(newsResponse.data);

        // Fetch all articles from the server
        const articlesResponse = await axios.get(
          "http://localhost:3000/all-articles"
        );
        setArticlesData(articlesResponse.data);
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
        সামাজিক কর্মকান্ড
      </h2>
      <div className="px-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* News */}
        <div className="px-4 md:col-span-full lg:col-span-1">
          {/* Fourth column with news content */}
          <div className=" bg-white p-4 rounded border border-gray-300 shadow">
            {/* <h2 className="text-xl font-bold text-center border-b-2 border-black">সম্প্রতি বার্তা</h2> */}
            {articlesData?.map((item, i) => (
              <div key={i}>
                <h4 className=" border border-gray-300 shadow p-4 mt-5">
                  {item?.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* content */}
        <div className="lg:col-span-3 lg:grid lg:grid-cols-3 gap-6">
          {/* first item */}
          <div className="lg:col-span-full">
            <Link to={`/social-news/${socialNewsData[0]?._id}`}>
              <div className=" md:flex md:justify-between md:gap-6 ">
                <img
                  src={socialNewsData[0]?.image}
                  alt=""
                  className="mb-6 md:w-1/2 object-cover object-top"
                />
                <div className="md:w-1/2">
                  <h3 className="text-2xl sm:text-3xl mb-4">
                    {socialNewsData[0]?.title}
                  </h3>
                  <p className="text-base leading-normal text-slate-600">
                    {" "}
                    {socialNewsData[0]?.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* second item */}
          <div className="col-span-1">
            <Link to={`/social-news/${socialNewsData[1]?._id}`}>
              <img
                src={socialNewsData[1]?.image}
                className="mb-6 aspect-square"
                alt=""
              />
              <h3 className="text-lg mb-4">{socialNewsData[1]?.title}</h3>
              <p className="text-base leading-normal text-slate-600">
                {socialNewsData[1]?.subtitle}
              </p>
            </Link>
          </div>

          {/* third item */}
          <div className="col-span-2">
            <Link to={`/social-news/${socialNewsData[2]?._id}`}>
              <img
                src={socialNewsData[2]?.image}
                className="mb-6 aspect-video  object-cover object-center"
                alt=""
              />
              <h3 className="text-lg mb-4">{socialNewsData[2]?.title}</h3>
              <p className="text-base leading-normal text-slate-600">
                {socialNewsData[2]?.subtitle}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialNews;
