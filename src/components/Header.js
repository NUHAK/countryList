import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Header = ({ selectedContinent, setSelectedContinent }) => {
    const slides = [
        { title: 'Explore the World', image: '/img/pic1.png' },
        { title: 'Discover Asia', image: '/img/pic1.png' },
        { title: 'Welcome to Europe', image: '/img/pic1.png' },
    ];

    const continents = ['All', 'Asia', 'Europe'];

    return (
        <div className='container'>
            <div className="header">
                <p>Countries</p>
                <ul className='country_list'>
                    {continents.map((continent) => (
                        <li
                            key={continent}
                            onClick={() => setSelectedContinent(continent)}
                            className={`country_tab ${selectedContinent === continent ? 'active' : ''}`}
                        >
                            {continent}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="header-bottom">
                <h1 className='country_header'>WELCOME</h1>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1.5}
                    spaceBetween={30}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="slide"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    borderRadius: '8px',
                                    height: '480px'
                                }}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Header;
