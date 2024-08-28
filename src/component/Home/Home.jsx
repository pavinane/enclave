import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import casros1 from "../../assets/caros1.png";
import casros2 from "../../assets/caros2.png";
// import casros3 from "../../assets/caros3.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Home() {
  return (
    <div className=" text-3xl text-red-500 underline">
      <div className="my-8 px-4 ">
        <Carousel
          draggable
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite
          autoPlaySpeed={500}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          arrows={false}
          autoPlay
          slidesToSlide={1}
          swipeable
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          centerMode={false}
          customTransition="all 0.5s linear"
        >
          <div className=" mr-3">
            <img src={casros1} alt="caro1" className="h-80" />
          </div>
          <div className=" mr-3">
            <img src={casros2} alt="caro2" className="h-80" />
          </div>

          <div className=" mr-3">
            <img src={casros2} alt="caro2" className="h-80" />
          </div>
          <div className=" mr-3">
            <img src={casros1} alt="caro1" className="h-80" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
