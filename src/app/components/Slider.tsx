"use client";

import * as React from "react";
import { List } from "./List";
import { SliderItem } from "./SliderItem";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlickSlider, { Settings } from "react-slick";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 1, // optional, default to 1.
//     // partialVisibilityGutter: 40,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

const settings: Settings = {
  dots: true,
  infinite: false,
  speed: 500,
  centerMode: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "0px",
  // centerMode: true,
  // centerPadding: "100px",
  dotsClass: "slider-dots",
  arrows: false,
  responsive: [
    // {
    //   breakpoint: 1300,
    //   settings: {
    //     // slidesToShow: 3,
    //     // slidesToScroll: 1,
    //     // slidesToScroll: 2,
    //     dots: true,
    //     centerMode: true,
    //   },
    // },
    {
      breakpoint: 600,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        // slidesToScroll: 1,
      },
    },
  ],
};

export const Slider: React.FC = () => {
  return (
    // <Carousel
    //   // centerMode={true}
    //   swipeable={true}
    //   draggable={true}
    //   showDots={true}
    //   responsive={responsive}
    //   ssr={true} // means to render carousel on server-side.
    //   infinite={false}
    //   autoPlay={false}
    //   autoPlaySpeed={1000}
    //   keyBoardControl={true}
    //   customTransition="all 1"
    //   transitionDuration={500}
    //   containerClass="carousel-container"
    //   // removeArrowOnDeviceType={["tablet", "mobile"]}
    //   deviceType={"tablet"}
    //   dotListClass="custom-dot-list-style"
    //   itemClass="carousel-item-padding-40-px"
    // >
    <SlickSlider className="slider" {...settings}>
      {/* <div className="slider-item-stub"></div> */}
      <SliderItem
        body={
          <List
            type="bulleted"
            items={[
              "Новосибирск, Гоголя, 15, торговый центр «Юпитер»",
              "Екатеринбург, Московская, 25а",
              "Нижний Новгород, Варварская, 27/8",
              "Уфа, Ростовская, 18 лит К",
              "Тюмень, Амурская, 150",
              "Воронеж, Героев Сибиряков, 79",
            ]}
          />
        }
        title="Куда можно заказать"
        index={1}
      />
      <SliderItem
        body={
          <>
            <List
              marginBottom="22px"
              type="ordered"
              items={[
                "Нажмите на адрес доставки на главном экране приложения — потом на кнопку «Новый адрес» ",
                "Нажмите на кнопку «Ввести другой адрес»",
                "Выберите город и введите адрес",
                "Нажмите на кнопку «Да, всё верно»",
              ]}
            />
          </>
        }
        title="Как поменять адрес"
        index={2}
      />
      <SliderItem
        body={
          <List
            marginBottom="22px"
            type="ordered"
            items={[
              "Откройте подборку «Заказ в помощь детям»: её можно найти в сторис на главном экране приложения",
              "Добавьте любые товары в заказ",
            ]}
          />
        }
        title="Как собрать заказ"
        index={3}
      />
      <SliderItem
        body={
          <List
            marginBottom="22px"
            type="ordered"
            items={[
              "Перейдите в корзину и нажмите на адрес доставки",
              "Выберите «Комментарий» и напишите «Помогаем вместе» — так всё точно доставят в фонд",
              "Проверьте и оплатите заказ",
            ]}
          />
        }
        title="Как оформить заказ"
        index={4}
      />
      <SliderItem
        body={
          <>
            <List
              marginBottom="15px"
              type="bulleted"
              items={[
                "80 ₽ при заказе от 250 ₽ до 399 ₽",
                "120 ₽ при заказе от 400 ₽ до 549 ₽",
                "160 ₽ при заказе от 550 ₽ до 699 ₽",
                "200 ₽ при заказе от 700 ₽ до 899 ₽",
                "250 ₽ при заказе от 1000 ₽",
              ]}
            />
            Начислим скидку в течение пяти дней после покупки. Она сработает
            автоматически, когда будете оплачивать следующий заказ.
          </>
        }
        title="Какую скидку вы получите"
        index={5}
      />
    </SlickSlider>
    // </Carousel>
  );
};
