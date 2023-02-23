import React from "react";
import classes from "./carousel.module.css";
import Carousel from "react-multi-carousel";

function Carousel(props: any) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="full-product-sku">
      {/* Convert it to a carousel */}
      {skuProduct && skuProduct.images && skuProduct.images.length > 1 ? (
        <Carousel
          className="carousel"
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          slidesToSlide={1}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {skuProduct.images.map((elem, index) => {
            return (
              <img
                src={elem}
                key={index}
                className="img-product-sku"
                alt={`Carousel ${index}`}
              ></img>
            );
          })}
        </Carousel>
      ) : (
        <img
          src={skuProduct.thumbnail}
          className="imgonly-product-sku"
          alt={skuProduct.slug}
        ></img>
      )}
      <div className="details-product-sku">
        <span className="name-product-sku">
          {skuProduct && skuProduct.name && skuProduct.name}
        </span>
        <span className="price-product-sku">
          {skuProduct && skuProduct.price && price(skuProduct.price)}
        </span>
        {/* Check for address */}
        <button
          className="add-product-sku"
          onClick={() => {
            skuProduct && cartChange(skuProduct, "increase");
            setCollectAddress(true);
          }}
        >
          Ajouter un article
        </button>
      </div>
    </div>
  );
}

export default Carousel;
