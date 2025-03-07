import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';  

export default function Front() {
    const [isHorizontal, setIsHorizontal] = useState(false);
    const [isColor, setColor] = useState('blue');
    const [isBorder, setBorder] = useState('blue');
    const color = `glow ${isColor}`;
    const border = `border ${isBorder}`

    const changeColorItem = (item) => {
        setColor(item);
        setBorder(`${item}-item`);
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
            <svg width="745" height="800" viewBox="0 0 745 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="ellipse-item">
                <mask id="path-1-inside-1_28_2276" fill="white">
                    <path d="M-82.0002 -294C374.739 -294 745 16.9383 745 400.5C745 784.062 374.739 1095 -82.0001 1095L-82.0002 -294Z" />
                </mask>
                <path d="M-82.0002 -294C374.739 -294 745 16.9383 745 400.5C745 784.062 374.739 1095 -82.0001 1095L-82.0002 -294Z" fill="#0D0D0D" />
                <g clip-path="url(#paint0_angular_28_2276_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_28_2276)">
                    <g transform="matrix(0.4135 1.24543e-08 -2.60673e-08 -0.6945 331.5 400.5)">
                    <foreignObject x="-1004.84" y="-1004.84" width="2009.67" height="2009.67">
                        <div xmlns="http://www.w3.org/1999/xhtml" className={border}></div>
                    </foreignObject>
                    </g>
                </g>
                <path d="M-82.0002 -294L-84.0002 -294L-84.0002 -296L-82.0002 -296L-82.0002 -294ZM-82.0001 1095L-82.0001 1097L-84.0001 1097L-84.0001 1095L-82.0001 1095ZM743 400.5C743 18.3557 373.976 -292 -82.0002 -292L-82.0002 -296C375.503 -296 747 15.5208 747 400.5L743 400.5ZM-82.0001 1093C373.976 1093 743 782.644 743 400.5L747 400.5C747 785.479 375.503 1097 -82.0001 1097L-82.0001 1093ZM-84.0001 1095L-84.0002 -294L-80.0002 -294L-80.0001 1095L-84.0001 1095Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.71764707565307617,&#34;g&#34;:0.15686275064945221,&#34;b&#34;:0.15686275064945221,&#34;a&#34;:1.0},&#34;position&#34;:0.079999998211860657},{&#34;color&#34;:{&#34;r&#34;:0.050980392843484879,&#34;g&#34;:0.050980392843484879,&#34;b&#34;:0.050980392843484879,&#34;a&#34;:1.0},&#34;position&#34;:0.14000000059604645},{&#34;color&#34;:{&#34;r&#34;:0.050980392843484879,&#34;g&#34;:0.050980392843484879,&#34;b&#34;:0.050980392843484879,&#34;a&#34;:1.0},&#34;position&#34;:0.79000002145767212}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.71764707565307617,&#34;g&#34;:0.15686275064945221,&#34;b&#34;:0.15686275064945221,&#34;a&#34;:1.0},&#34;position&#34;:0.079999998211860657},{&#34;color&#34;:{&#34;r&#34;:0.050980392843484879,&#34;g&#34;:0.050980392843484879,&#34;b&#34;:0.050980392843484879,&#34;a&#34;:1.0},&#34;position&#34;:0.14000000059604645},{&#34;color&#34;:{&#34;r&#34;:0.050980392843484879,&#34;g&#34;:0.050980392843484879,&#34;b&#34;:0.050980392843484879,&#34;a&#34;:1.0},&#34;position&#34;:0.79000002145767212}],&#34;transform&#34;:{&#34;m00&#34;:827.00006103515625,&#34;m01&#34;:-5.2134513680357486e-05,&#34;m02&#34;:-82.00012207031250,&#34;m10&#34;:2.4908573323045857e-05,&#34;m11&#34;:-1389.0,&#34;m12&#34;:1095.0},&#34;opacity&#34;:0.33000001311302185,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_28_2276)" />
                <defs>
                    <clipPath id="paint0_angular_28_2276_clip_path">
                    <path d="M-82.0002 -294L-84.0002 -294L-84.0002 -296L-82.0002 -296L-82.0002 -294ZM-82.0001 1095L-82.0001 1097L-84.0001 1097L-84.0001 1095L-82.0001 1095ZM743 400.5C743 18.3557 373.976 -292 -82.0002 -292L-82.0002 -296C375.503 -296 747 15.5208 747 400.5L743 400.5ZM-82.0001 1093C373.976 1093 743 782.644 743 400.5L747 400.5C747 785.479 375.503 1097 -82.0001 1097L-82.0001 1093ZM-84.0001 1095L-84.0002 -294L-80.0002 -294L-80.0001 1095L-84.0001 1095Z" mask="url(#path-1-inside-1_28_2276)" />
                    </clipPath>
                </defs>
            </svg>
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
                    >
                        <SwiperSlide onMouseEnter={() => changeColorItem('blue')}>
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