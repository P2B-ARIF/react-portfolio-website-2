import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import image1 from "./../../assets/l-image-1.png";
import image2 from "./../../assets/l-image-2.png";
import image3 from "./../../assets/l-image-3.png";





const Portfolio = () => {
  // let img =
  //   "https://cdn.dribbble.com/userupload/2849058/file/original-207a16d7c7d74cae1f1e4f60a0dace93.png?compress=1&resize=450x338&vertical=top";


   return (
    <section id="portfolio">
      <div className="portfolio_text">
        <div className="portfolio_text_h5"></div>
        <h2 className="portfolio_text_h2">
          Portfolio <div className="span"></div>
        </h2>
      </div>

      <div className="container portfolio__container">
        {/* <div className="card">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            <h3>Black Diamond Photography</h3>
            <h4>#React Projects</h4>
            <p>
              <strong>Technology Usage: </strong>
              Tailwind CSS | React Js | Node Js | Express Js | MongoDB
            </p>
          </div>
          <div className="btn-details">
            <Link to={"/FirstModal"} className="button_details">
              <span>Details</span>
              <i></i>
            </Link>
          </div>
        </div> */}

        <Card className="card">
          <CardHeader color="pink" className="relative h-56">
            <img
              src={image1}
              alt="img-blur-shadow"
              className="longImage rounded-xl red"
              
              // className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-center pb-1  pt-2">
            <Typography variant="h6">Black Diamond Photography</Typography>
            {/* <Typography> */}
            {/* <h4>#React Projects</h4> */}
            <p className="text-sm mb-0 pb-0 text-left mt-2">
              <strong>Technology Usage: </strong>
              Tailwind CSS | React Js | Node Js | Express Js | MongoDB
            </p>
            {/* </Typography> */}
          </CardBody>
          <CardFooter>
            {/* <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography> */}
            <div className="btn-details">
              <Link to={"/FirstModal"} className="button_details">
                <span>Details</span>
                <i></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card red">
          <CardHeader color="purple" className="relative h-56">
            <img
              src={image2}
              alt="img-blur-shadow"
              className="longImage rounded-xl purple"
              // className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-center pb-1  pt-2">
            <Typography variant="h5">Mobile Resell Service</Typography>
            {/* <Typography> */}
            {/* <h4>#React Projects</h4> */}
            <p className="text-sm mb-0 pb-0 text-left mt-2">
              <strong>Technology Usage: </strong> React Js | Node Js | Express
              Js | Firebase | MongoDB | (TanStack, Flowbite, Axios, Stripe)
            </p>
            {/* </Typography> */}
          </CardBody>
          <CardFooter>
            {/* <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography> */}
            <div className="btn-details">
              <Link to={"/SecondModal"} className="button_details">
                <span>Details</span>
                <i></i>
              </Link>
            </div>
          </CardFooter>
        </Card>
        <Card className="card blue">
          <CardHeader color="blue" className="relative h-56">
            <img
              src={image3}
              alt="img-blur-shadow"
              className="longImage rounded-xl blue"
              // className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-center pb-1  pt-2">
            <Typography variant="h5">ZerOne-School</Typography>
            {/* <Typography> */}
            {/* <h4>#React Projects</h4> */}
            <p className="text-sm mb-0 pb-0 text-left mt-2">
              <strong>Technology Usage: </strong>
              Tailwind CSS | React Js | Node Js | Express Js | MongoDB
            </p>
            {/* </Typography> */}
          </CardBody>
          <CardFooter>
            {/* <Typography variant="small">$899/night</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography> */}
            <div className="btn-details">
              <Link to={"/ThirdModal"} className="button_details">
                <span>Details</span>
                <i></i>
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* 
        <div className="card">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            <h3 className="second">Mobile Resell Service</h3>
            <h4>#React Projects</h4>
            <p>
              <strong>Technology Usage: </strong> React Js | Node Js | Express
              Js | Firebase | MongoDB | (TanStack, Flowbite, Axios, Stripe)
            </p>
          </div>
          <div className="btn-details">
            <Link to={"/SecondModal"} className="button_details">
              <span>Details</span>
              <i></i>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            <h3 className="third">ZerOne-School</h3>
            <h4>#React Projects</h4>
            <p>
              <strong>Technology Usage: </strong>
              Tailwind CSS | React Js | Node Js | Express Js | MongoDB
            </p>
          </div>
          <div className="btn-details">
            <Link to={"/ThirdModal"} className="button_details">
              <span>Details</span>
              <i></i>
            </Link>
          </div>
        </div> */}

        {/* <article data-aos="fade-up"  className="portfolio__item">
          <div className="portfolio__item-image black_diamond">
            <img src={img3} alt="" />
          </div>
          <h3>Black Diamond Photography</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/P2B-ARIF/black-diamond-photography-client-a11" className="btn_p" target="__blank">
              Github
            </a>
            <a href="https://black-diamond-photography.web.app/" className="btn_p btn-primary_p" target="__blank">
              Live Demo
            </a>
          </div>
        </article>
        <article data-aos="fade-up" data-aos-delay="100"  className="portfolio__item">
          <div className="portfolio__item-image mobile_resell">
            <img src={img5} alt="" />
          </div>
          <h3>Mobile Resell Service</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/P2B-ARIF/mobile-resell-service-client-a12" className="btn_p" target="__blank">
              Github
            </a>
            <a href="https://mobile-resell-service.web.app/" className="btn_p btn-primary_p" target="__blank">
              Live Demo
            </a>
          </div>
        </article>
        <article data-aos="fade-up" data-aos-delay="200"  className="portfolio__item">
          <div className="portfolio__item-image zerone">
            <img src={img7} alt="" />
          </div>
          <h3>ZerOne School</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/P2B-ARIF/learning-platform-client-a10.git" className="btn_p" target="__blank">
              Github
            </a>
            <a href="https://zerone-school.web.app/" className="btn_p btn-primary_p" target="__blank">
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
