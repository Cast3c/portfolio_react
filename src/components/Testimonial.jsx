import React from 'react';
import testimonial1 from './../assets/img/testimonial1.png';
import testimonial2 from './../assets/img/testimonial2.png';
import testimonial3 from './../assets/img/testimonial3.png';
import './../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

 


const Testimonial = () => { 

    const testimonialData = [
        {
            name: "Jhon Doe",
            image: testimonial1,
            testimonial: "A really good job, all aspects of the project were followed step by step and with good results."

        },
        {
            name: "Paula Vusy",
            image: testimonial2,
            testimonial: "A really good job, all aspects of the project were followed step by step and with good results."
        },
        {
            name: "Sara Cill",
            image: testimonial3,
            testimonial: "A really good job, all aspects of the project were followed step by step and with good results."
        }
    ];
    
    const settings = {
        infinite:true,
        slidesToShow: 1,
        slidesToScroll:3,
        autoplay:true,
        speed: 10000,
        autoplaySpeed: 10000,
        cssEase: "linear"
    }


    return (
      <section className="testimonial section">
        <span className="section__subtitle">My clients say</span>
        <h2 className="section__title">Testimonial</h2>

        <div className="" >
             
          <div className="testimonial-container">
            <Slider {...settings} className="testimonial__container">
                {testimonialData.map((item, index)=>{
                    return(
                        <div className="testimonial__card" key={index}>
                            <img
                                src={item.image}
                                alt=""
                                className="testimonial__img"
                            />
                            <h3 className="testimonial__name" >{item.name}</h3>
                            <p className="testimonial__description">
                                {item.testimonial}
                            </p>
                        </div>
                    )
                })}
            </Slider>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    );
}

export default Testimonial;