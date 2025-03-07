import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';  
import { useSwiper } from 'swiper/react';

export default function Front() {
    const [isHorizontal, setIsHorizontal] = useState(false);
    const [isColor, setColor] = useState('blue');
    const [isIndex, setindex] = useState();
    const color = `ellips ${isColor}`;

    const handleSlideChange = (swiper) => {  
        setindex(swiper.activeIndex);  
    }; 

       useEffect(() => {
            if (isIndex === 0) {  
              setColor('blue');  
            } else if (isIndex === 1) {  
              setColor('red');  
            } else if (isIndex === 2) {  
              setColor('gray');  
            } 
             console.log(isIndex)
        }, [isIndex])

    const changeColorItem = (item) => {
        setColor(item);
    }

    useEffect(() => {  
        if (typeof window !== 'undefined') {  
            const handleResize = () => {  
                setIsHorizontal(window.innerWidth >= 768);  
            };  
            setIsHorizontal(window.innerWidth >= 768);  
            window.addEventListener('resize', handleResize);  
            return () => {  
                window.removeEventListener('resize', handleResize);  
            };  
        }  
    }, []); 

  
  return (
    <>
     <section id="front">
        <div className="front-img">
            <div className={color}></div>
        </div>
        <div className="container">
            <div className="front-section-wrapper">
                <div className="front-section-data">
                    <h1>Bring Your Leads to <br />
                        Our TOP Entertainment <br /> 
                        Brands
                    </h1>
                    <h2>Smart affiliate program</h2>
                    <div className="front-section-data-links">
                        <a href="" className="login-btn">Log in</a>
                        <a href="" className="registration-btn">Registration</a>
                        <p>Only for new users. +50% to income for 2 months</p>
                    </div>
                </div>
                <div className="front-section-items">
                   <Swiper
                        spaceBetween={10}
                        slidesPerView={isHorizontal ? '3' : '1'}
                        direction={isHorizontal ? 'vertical' : 'horizontal'}
                        onSlideChange={(swiper) => handleSlideChange(swiper)}
                    >
                        <SwiperSlide onMouseEnter={() => changeColorItem('blue')} >
                            <div className="front-section-item first-front-item">
                                <p>Casino</p>
                                <ul>
                                    <li>CPA - registration</li>
                                    <li>Location: Latin America</li>
                                    <li>1$/registration </li>
                                </ul>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet="../images/f1m.svg" />
                                    <img src="../images/f1.png" alt="logo" />
                                </picture>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={() => changeColorItem('red')}>
                            <div className="front-section-item second-front-item">
                                <p>AI Adult</p>
                                <ul>
                                    <li>CPA - registration</li>
                                    <li>Location: World Wid</li>
                                    <li>1$/registration </li>
                                </ul>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet="../images/f3m.svg" />
                                    <img src="../images/f2.png" alt="logo" />
                                </picture>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide onMouseEnter={() => changeColorItem('gray')}>
                            <div className="front-section-item third-front-item">
                                <p>Casino</p>
                                <ul>
                                    <li>CPA - registration</li>
                                    <li>Location: Latin America</li>
                                    <li>4$ - CPM</li>
                                </ul>
                                <picture>
                                    <source media="(max-width: 768px)" srcSet="../images/f2m.svg" />
                                    <img src="../images/f3.png" alt="logo" />
                                </picture>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
     </section>
    </>
  );
}