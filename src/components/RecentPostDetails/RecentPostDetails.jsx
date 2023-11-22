import axios from "axios";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecentPostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/recent-news/${id}`
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
      <div className="grid grid-cols-1 md:grid-cols-4 my-12  sm:my-20">
        <div className="md:col-span-3   w-4/5 mx-auto flex flex-col items-center justify-start">
          <img
            className="w-4/5 md:w-3/5 aspect-video mx-auto  mb-12 object-cover object-center"
            src={post.image}
            alt={post.title}
          />
          <h1 className="text-3xl sm:text-4xl  mb-8  max-w-md md:max-w-3xl font-semibold">
            {post.title}
          </h1>
          <p className="max-w-4xl text-xl leading-relaxed text-slate-600">
            {post.subtitle}
          </p>
        </div>
        <div className="flex items-start justify-end">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 1"
            />
            <div role="tabpanel" className="tab-content ">
              Tab content 1
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 2"
              checked
            />
            <div role="tabpanel" className="tab-content ">
              Tab content 2
            </div>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 3"
              checked
            />
            <div role="tabpanel" className="tab-content ">
              Tab content 3
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPostDetails;
