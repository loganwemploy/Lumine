import React, { Component } from 'react';
import Link from 'next/link';

class CategoriesBanner extends Component {
    render() {
        return (
            <section className="categories-banner-area pt-100 pb-70">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src="https://images.pexels.com/photos/5857859/pexels-photo-5857859.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" style={{height:'420px'}} alt="image" />

                                <div className="content text-white">
                                    <span>Floral Collection</span>
                                    <h3>50% OFF</h3>

                                    <Link href="/products-right-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>

                                <Link href="/products-right-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/132564008_109893844332368_4206849337574408152_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=9XVZLh7LpiYAX8I2Ri6&_nc_ht=scontent.ford4-1.fna&oh=2b27080a3588478b913e96c947b24600&oe=602BC229" style={{height:'420px'}} alt="image" />

                                <div className="content">
                                    <span>New Collection</span>
                                    <h3>Need Now</h3>
                                    
                                    <Link href="/products-right-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="/products-right-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.15752-9/143870587_336062087562463_6205092068656424463_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=PRhFBZIvnbEAX8OmCpd&_nc_ht=scontent.ford4-1.fna&oh=b3f1df9908128f3cab3dcb3503fff46d&oe=6038B652" alt="image" />

                                <div className="content">
                                    <span>Your Looks</span>
                                    <h3>Must Haves</h3>
                                    
                                    <Link href="/products-right-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="/products-right-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-categories-box">
                                <img src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/133080369_109319764389776_135486688235336690_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Liz7nRRRbbkAX95-Qmi&_nc_ht=scontent.ford4-1.fna&oh=2cf5ec0b1302f6448718ce3dfc939e09&oe=602CD679" alt="image" />

                                <div className="content text-white">
                                    <span>Take 20% OFF</span>
                                    <h3>Winter Spring!</h3>
                                    
                                    <Link href="/products-right-sidebar">
                                        <a className="default-btn">Discover Now</a>
                                    </Link>
                                </div>
                                
                                <Link href="/products-right-sidebar">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CategoriesBanner;