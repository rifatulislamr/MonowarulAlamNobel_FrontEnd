import { useEffect, useState } from "react";

const PersonalNews = () => {
  const [socialNewsData, setSocialNewsData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const news = await fetch("public/recentNews.json");
        const articles = await fetch("public/allArticles.json");

        const newsData = await news.json();
        const articlesData = await articles.json();

        setSocialNewsData(newsData);
        setArticlesData(articlesData);
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
          <div className=" md:flex md:justify-between md:gap-6 lg:col-span-full">
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

          {/* second item */}
          <div className="col-span-1">
            <img
              src={socialNewsData[1]?.image}
              className="mb-6 aspect-square"
              alt=""
            />
            <h3 className="text-lg mb-4">{socialNewsData[1]?.title}</h3>
            <p className="text-base leading-normal text-slate-600">
              {socialNewsData[1]?.subtitle}
            </p>
          </div>

          {/* third item */}
          <div className="col-span-2">
            <img
              src={socialNewsData[2]?.image}
              className="mb-6 aspect-video"
              alt=""
            />
            <h3 className="text-lg mb-4">{socialNewsData[2]?.title}</h3>
            <p className="text-base leading-normal text-slate-600">
              {socialNewsData[2]?.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNews;
