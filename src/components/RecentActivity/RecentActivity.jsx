import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentActivity = () => {
  const [recentNewsData, setRecentNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recent news from the server
        const newsResponse = await axios.get(
          "http://localhost:3000/recent-news"
        );
        setRecentNewsData(newsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="container mx-auto p-8 sm:p-16 min-h-[80vh]"
    >
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recentNewsData.map((item, i) => (
          <Link key={i}
            to={`/recent-news/${item?._id}`}
            className="border border-gray-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition duration-300 hover:scale-105 w-full rounded-md"
          >
            <div>
              <img
                src={item?.image}
                alt="Me on personal activity"
                className=" object-cover object-center aspect-square"
              />

              <h2 className="text-lg font-semibold leading-normal text-slate-700 mt-3 ">
                {item?.title}
              </h2>
            </div>
            <p className="text-slate-500 text-sm leading-normal mt-5">
              {item?.subtitle.slice(0, 80)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
