import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name:'Tina Snow',
        review:'Modi ipsum dolor sit amet consectetur, adipisicing elit. Molestias minima maxime possimus vero. Et similique at culpa? Quo eos eum earum dolorem doloribus provident cumque sapiente animi obcaecati! Temporibus, harum!'
    },
    {
        avatar: AVTR2,
        name:'Shatta Wale',
        review:'Modi ipsum dolor sit amet consectetur, adipisicing elit. Molestias minima maxime possimus vero. Et similique at culpa? Quo eos eum earum dolorem doloribus provident cumque sapiente animi obcaecati! Temporibus, harum!'
    },
    {
        avatar: AVTR3,
        name:'Kwame Despite',
        review:'Modi ipsum dolor sit amet consectetur, adipisicing elit. Molestias minima maxime possimus vero. Et similique at culpa? Quo eos eum earum dolorem doloribus provident cumque sapiente animi obcaecati! Temporibus, harum!'
    },
    {
        avatar: AVTR4,
        name:'Spartacus',
        review:'Modi ipsum dolor sit amet consectetur, adipisicing elit. Molestias minima maxime possimus vero. Et similique at culpa? Quo eos eum earum dolorem doloribus provident cumque sapiente animi obcaecati! Temporibus, harum!'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'
               // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
              {
                data.map(({avatar, name, review}, index ) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                            <div className="client__avatar">
                                <img src={avatar} alt="Avatar One" />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                      </SwiperSlide>
                    )
                })
              }
            </Swiper>
        </section>
    );
}

export default Testimonials;
