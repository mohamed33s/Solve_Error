import React from "react";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Carousel fade className="m-5 ">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nF97CSsqJIjQQuBJX5M0wHU4zQYfKsQX2A&usqp=CAU"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.mydomaine.com/thmb/XAFH8Wi4BBHceWeMA-wmJgK5eWA=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__253245__most-beautiful-flowers-253245-1522430144413-main.700x0c-54d089becbe64976827e9ed0461e3f24.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7x7iY0hEgCvbE0qrDw3hA_Eu7cIc1yCVPg&usqp=CAU"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.mydomaine.com/thmb/XAFH8Wi4BBHceWeMA-wmJgK5eWA=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/cdn.cliqueinc.com__cache__posts__253245__most-beautiful-flowers-253245-1522430144413-main.700x0c-54d089becbe64976827e9ed0461e3f24.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
