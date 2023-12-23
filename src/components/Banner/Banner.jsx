import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s1 from "../../assets/images/slider5.jpg";
import s2 from "../../assets/images/slider6.jpg";
import s3 from "../../assets/images/slider-8.jpg";
import s4 from "../../assets/images/slider7.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      autoPlay={true}
      interval={4000}
      transitionTime={1000}
      swipeScrollTolerance={50}
      className="mb-12 md:mb-24 px-6"
    >
      <div className="image-container rounded-lg overflow-hidden aspect-ratio">
        <img
          className="object-cover object-center BbaHubBanner"
          src={s1}
          loading="lazy"
          alt="Banner 1"
        />
      </div>
      <div className="image-container rounded-lg overflow-hidden aspect-ratio">
        <img
          className="object-cover object-center BbaHubBanner"
          src={s2}
          loading="lazy"
          alt="Banner 2"
        />
      </div>
      <div className="image-container rounded-lg overflow-hidden aspect-ratio">
        <img
          className="object-cover object-center BbaHubBanner"
          src={s3}
          loading="lazy"
          alt="Banner 3"
        />
      </div>
      <div className="image-container rounded-lg overflow-hidden aspect-ratio">
        <img
          className="object-cover object-center BbaHubBanner"
          src={s4}
          loading="lazy"
          alt="Banner 4"
        />
      </div>
    </Carousel>
  );
};

export default Banner;
