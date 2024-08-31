import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselSlider({ imageData, responsive, className }) {
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
            <div className={className}>
              <img src={item?.img} alt="caro1" className="h-80 w-screen" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
