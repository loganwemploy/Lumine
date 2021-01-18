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
                                    <span>Don’t Miss Today</span>
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
                                <img src="https://images.pexels.com/photos/811575/pexels-photo-811575.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" style={{height:'420px'}} alt="image" />

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
                                <img src="https://images.pexels.com/photos/811575/pexels-photo-811575.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image" />

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
                                <img src="https://images.pexels.com/photos/811575/pexels-photo-811575.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="image" />

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