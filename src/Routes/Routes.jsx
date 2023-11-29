import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ArticlesDetails from "../components/ArticlesDetails/ArticlesDetails";
import PersonalPostDetails from "../components/PersonalPostDetails/PersonalPostDetails";
import PoliticalPostDetails from "../components/PoliticalPostDetails/PoliticalPostDetails";
import RecentPostDetails from "../components/RecentPostDetails/RecentPostDetails";
import SocialPostDetails from "../components/SocialPostDetails/SocialPostDetails";
import DashBoardHome from "../Pages/DashBoard/DashBoardHome/DashBoardHome";

import VideoSection from "../Pages/DashBoard/VideoSection/VideoSection";
import RecentNewsSection from "../Pages/DashBoard/ContentSection/RecentNewsSection";
import PersonalNewsSection from "../Pages/DashBoard/ContentSection/PersonalNewsSection";
import SocialNewsSection from "../Pages/DashBoard/ContentSection/SocialNewsSection";
import PoliticalNewsSection from "../Pages/DashBoard/ContentSection/PoliticalNewsSection";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/recent-news/:id",
        element: <RecentPostDetails></RecentPostDetails>,
      },
      {
        path: "/political-news/:id",
        element: <PoliticalPostDetails></PoliticalPostDetails>,
      },
      {
        path: "/personal-news/:id",
        element: <PersonalPostDetails></PersonalPostDetails>,
      },
      {
        path: "/social-news/:id",
        element: <SocialPostDetails></SocialPostDetails>,
      },
      {
        path: "/all-articles/:id",
        element: <ArticlesDetails></ArticlesDetails>,
      },
      
    ],
  },
  {
    path: "dashboard",
    element: <DashBoardHome></DashBoardHome>,
    children:[
      {
        path: 'recentNews-section',
        element: <RecentNewsSection></RecentNewsSection>
      },
      {
        path: 'personalNews-section',
        element: <PersonalNewsSection></PersonalNewsSection>
      },
      {
        path:'socialNews-section',
        element:<SocialNewsSection></SocialNewsSection>
      },
      {
        path:'politicalNews-section',
        element:<PoliticalNewsSection></PoliticalNewsSection>
      },
      {
        path:'video-section',
        element:<VideoSection></VideoSection>,
      }
    ]
  }
]);
