import React from "react";
import classes from "./carousel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// interface props {
//   data: any[];
// }

function MyCarousel(props: any) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { data } = props;

  return (
    <Carousel
      className={classes.carousel}
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      slidesToSlide={3}
      autoPlay={true}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      partialVisible={false}
    >
      {data.map((e: any, i: number) => {
        return (
          <img
            src={e.logoPath}
            key={i}
            className={classes.companylogo}
            alt={`${e.name} logo`}
          ></img>
        );
      })}
    </Carousel>
  );
}

export default MyCarousel;
