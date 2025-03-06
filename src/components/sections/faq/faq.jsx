import { Collapse } from 'react-collapse';  
import React, {useState} from 'react';
import {Faqdata, Faqdata2} from './faq.data.jsx'


const Faq = () => {  
       const [openIndex1, setOpenIndex1] = useState(null);  
    const [openIndex2, setOpenIndex2] = useState(null);  

    const handleClick1 = (index) => {  
         setOpenIndex2(null)
        setOpenIndex1(openIndex1 === index ? null : index);  
    };  

    const handleClick2 = (index) => {  
        setOpenIndex1(null)
        setOpenIndex2(openIndex2 === index ? null : index);  
    };  

    return (  
        <section>  
            <div className="container">  
                <div className="faq-wrapper">  
                    <h3 className="section-title">  
                        Frequently asked questions  
                    </h3>  
                    <div className="faq-items-wrapper">  
                        <div className='faq-items'>  
                            {Faqdata.map((item, index) => {  
                                const className = openIndex1 === index ? 'faq-item active' : 'faq-item';  
                                return (  
                                    <div key={index} className={className} onClick={() => handleClick1(index)}>  
                                        <div className="faq-item-head">  
                                            <p>{item.question}</p>  
                                            <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">  
                                                <path d="M24 21L18 15L12 21" stroke="white" strokeLinecap="round" />  
                                            </svg>  
                                        </div>  
                                        <Collapse isOpened={openIndex1 === index}>  
                                            <div className='faq-answer'>{item.answer}</div>  
                                        </Collapse>  
                                    </div>  
                                )  
                            })}  
                        </div>  
                        <div className='faq-items'>  
                            {Faqdata2.map((item, index) => {  
                                const className = openIndex2 === index ? 'faq-item active' : 'faq-item';  
                                return (  
                                    <div key={index} className={className} onClick={() => handleClick2(index)}>  
                                        <div className="faq-item-head">  
                                            <p>{item.question}</p>  
                                            <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">  
                                                <path d="M24 21L18 15L12 21" stroke="white" strokeLinecap="round" />  
                                            </svg>  
                                        </div>  
                                        <Collapse isOpened={openIndex2 === index}>  
                                            <div className='faq-answer'>{item.answer}</div>  
                                        </Collapse>  
                                    </div>  
                                )  
                            })}  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </section>  
    );  
}; 

export default Faq; 