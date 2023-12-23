import axios from "axios";

import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TabBar from "../TabBar/TabBar";

const SocialPostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/social-news/${id}`
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
          <div className="md:col-span-3   w-4/5 mx-auto flex flex-col items-center justify-start">
            <img
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
          <TabBar></TabBar>
        </div>
      </div>
    </>
  );
};

export default SocialPostDetails;
