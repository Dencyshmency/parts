import React, { useState, useEffect } from "react";

export default function Products () {


    return (
        <>
        <section>
            <div className="container">
                <div className="products-wrapper">
                    <p className="section-title">Our products</p>
                    <div className="products-items">
                        <div className="products-item products-item--casino">
                            <div className="products-item-text">
                                <img src="../images/products/form1.svg" alt="cards-icon" />
                                <div>
                                <h5>Casino</h5>
                                <p>Best offers from world wide casinos</p>
                                </div>
                                <a href="">Join now</a>
                            </div>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="../images/products/form1-bg-m.svg" />
                                <img src="../images/products/form1-bg.png" alt="cards-img" />
                            </picture>
                        </div>
                        <div className="products-item products-item--betting">
                            <div className="products-item-text">
                                <img src="../images/products/form2.svg" alt="cards-icon" />
                                <div>
                                <h5>Betting</h5>
                                <p>Earn money from betting platforms</p>
                                </div>
                                <a href="">Join now</a>
                            </div>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="../images/products/form2-bg-m.svg" />
                                <img src="../images/products/form2-bg.png" alt="cards-img" />
                            </picture>
                        </div>
                        <div className="products-item products-item--porn">
                            <div className="products-item-text">
                                <img src="../images/products/form3.svg" alt="cards-icon" />
                                <div>
                                <h5>Adult</h5>
                                <p>World best porn sites</p>
                                </div>
                                <a href="">Join now</a>
                            </div>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="../images/products/form3-bg-m.svg" />
                                <img src="../images/products/form3-bg.png" alt="cards-img" />
                            </picture>
                        </div>
                        <div className="products-item products-item--crypto">
                            <div className="products-item-text">
                                <img src="../images/products/form3.svg" alt="cards-icon" />
                                <div>
                                <h5>Crypto</h5>
                                <p>Promote the best crypto tokens</p>
                                </div>
                                <a href="">Join now</a>
                            </div>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="../images/products/form4-bg-m.svg" />
                                <img src="../images/products/form4-bg.png" alt="cards-img" />
                            </picture>
                        </div>
                        <div className="products-item products-item--dating">
                            <div className="products-item-text">
                                <img src="../images/products/form4.svg" alt="cards-icon" />
                                <div>
                                <h5>Dating</h5>
                                <p>Lorem ipsum</p>
                                </div>
                                <a href="">Join now</a>
                            </div>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="../images/products/form5-bg-m.svg" />
                                <img src="../images/products/form5-bg.png" alt="cards-img" />
                            </picture>
                        </div>
                        <div className="products-item products-item--webcam">
                            <div className="products-item-text">
                                <img src="../images/products/form5.svg" alt="cards-icon" />
                                <div>
                                <h5>Webcam</h5>
                                <p>Lorem ipsum</p>
                                </div>
                                <a href="">Join now</a>
                            </div>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="../images/products/form6-bg-m.svg" />
                                <img src="../images/products/form6-bg.png" alt="cards-img" />
                            </picture>
                        </div>
                        <div className="products-item products-item--others">
                            <div className="products-item-text">
                                <img src="../images/products/form6.svg" alt="cards-icon" />
                                <div>
                                <h5>Other</h5>
                                <p>You can find any offer in our platform</p>
                                </div>
                                <a href="">Join now</a>
                            </div>
                            <picture>
                                <source media="(max-width: 768px)" srcSet="../images/products/form7-bg-m.svg" />
                                <img src="../images/products/form7-bg.png" alt="cards-img" />
                            </picture>
                        </div>
                        <div className="products-item products-item--registration">
                            <picture>
                                <source media="(max-width: 768px)" srcSet="../images/products/form8-bg-m.png" />
                                <img src="../images/products/form8-bg.png" alt="cards-img" />
                            </picture>
                            <h5>Only for new users</h5>
                            <span>+50% to income for 2 months</span>
                            <a href="#">Registration</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}