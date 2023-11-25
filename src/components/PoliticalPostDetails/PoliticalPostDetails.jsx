import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// ..
AOS.init();

const PoliticalPostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/political-news/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPostDetails();
  }, [id]);

  return (
    <>
      <div className="px-8 md:px-16 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div data-aos="fade-up"
     data-aos-duration="2000" className="md:col-span-3   w-4/5 mx-auto flex flex-col items-center justify-start">
            <img 
         data-aos="zoom-out"
            data-aos-duration="2000"
              className="w-4/5 md:w-4/5 aspect-video mx-auto  mb-12 object-cover object-center"
              src={post.image}
              alt={post.title}
            />
            <h1 className="text-3xl   mb-8  max-w-md md:max-w-3xl font-semibold">
              {post.title}
            </h1>
            <p className="max-w-4xl text-xl leading-relaxed text-slate-600">
              {post.subtitle}
            </p>
          </div>

          {/* Tab-bar */}
          <div className="flex items-start justify-end">
            <div role="tablist" className="tabs tabs-bordered">
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-slate-600 text-lg font-semibold"
                aria-label="সম্প্রতিক"
              />
              <div role="tabpanel" className="tab-content my-6">
                সম্প্রতিক
              </div>

              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-slate-600 text-lg font-semibold "
                aria-label="ব্যক্তিগত"
                checked
              />
              <div role="tabpanel" className="tab-content my-6">
                ব্যক্তিগত
              </div>
              <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab text-slate-600 text-lg font-semibold"
                aria-label="সামাজিক"
                checked
              />
              <div role="tabpanel" className="tab-content my-6">
                সামাজিক
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PoliticalPostDetails;
