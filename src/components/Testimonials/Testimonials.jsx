import React from "react";
import "./Testimonials.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';
import "swiper/css/pagination";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import {ImQuotesLeft} from 'react-icons/im'
// import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials_text">
        <div className="testimonials_text_h5"></div>
        <h2 className=" testimonials_text_h2">
          Testimonials <div className="span"></div>
        </h2>
      </div>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="testimonial_text">
            <p className="">
            <ImQuotesLeft className="quote"/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              incidunt nostrum, nihil cupiditate vitae laudantium omnis ullam
              adipisci sint reiciendis explicabo eveniet voluptates.
            </p>
          </div>
          <div className="flex items-center mt-8 ml-5">
            <img
              className="w-[70px] h-[70px] object-cover  rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU"
              alt=""
            />
            <div className="ml-2">
              <h3 className="text-xl">Mohammad Joshim</h3>
              <div className="flex text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <FaStarHalf />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="testimonial_text">
            <p className="">
            <ImQuotesLeft className="quote"/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              incidunt nostrum, nihil cupiditate vitae laudantium omnis ullam
              adipisci sint reiciendis explicabo eveniet voluptates.
            </p>
          </div>
          <div className="flex items-center mt-8 ml-5">
            <img
              className="w-[70px] h-[70px] object-cover  rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZP89LgtXNvfdWmCmKsJCWi_cza3IIdy__xAXGl7FaXryTRwAFonUE88DoBOeiSlhbRnQ&usqp=CAU"
              alt=""
            />
            <div className="ml-2">
              <h3 className="text-xl">Walid Anower</h3>
              <div className="flex text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <FaStarHalf />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="testimonial_text">
            <p className="">
            <ImQuotesLeft className="quote"/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              incidunt nostrum, nihil cupiditate vitae laudantium omnis ullam
              adipisci sint reiciendis explicabo eveniet voluptates.
            </p>
          </div>
          <div className="flex items-center mt-8 ml-5">
            <img
              className="w-[70px] h-[70px] object-cover  rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-LJaTp0HFRT2GHznf3n7iSAzu-z7och7Vc0GsJkTHWEk67OjQ0t0o6piSTpTv9sr7UI&usqp=CAU"
              alt=""
            />
            <div className="ml-2">
              <h3 className="text-xl">Sohel Khan</h3>
              <div className="flex text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <FaStarHalf />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="testimonial_text">
            <p className="">
            <ImQuotesLeft className="quote"/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              incidunt nostrum, nihil cupiditate vitae laudantium omnis ullam
              adipisci sint reiciendis explicabo eveniet voluptates.
            </p>
          </div>
          <div className="flex items-center mt-8 ml-5">
            <img
              className="w-[70px] h-[70px] object-cover  rounded-full"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="ml-2">
              <h3 className="text-xl">Alia</h3>
              <div className="flex text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <FaStarHalf />
              </div>
            </div>
          </div>
        </SwiperSlide>
      

        {/* <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            impedit praesentium aut fugit at nihil unde deleniti, ex voluptates
            doloribus accusamus adipisci aspernatur laudantium perspiciatis
            quaerat, ut omnis accusantium. Ullam?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            impedit praesentium aut fugit at nihil unde deleniti, ex voluptates
            doloribus accusamus adipisci aspernatur laudantium perspiciatis
            quaerat, ut omnis accusantium. Ullam?
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={img} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            impedit praesentium aut fugit at nihil unde deleniti, ex voluptates
            doloribus accusamus adipisci aspernatur laudantium perspiciatis
            quaerat, ut omnis accusantium. Ullam?
          </small>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Testimonials;
