import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
function CarouselSlider({ imageData }) {
  return (
    <div>
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
        {imageData.map((item, index) => {
          return (
            <div className=" mr-3">
              <img src={item?.img} alt="caro1" className="h-80" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
