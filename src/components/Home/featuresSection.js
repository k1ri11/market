import React from 'react';
import cn from 'classnames';

import featuresSectionStyles from './featuresSection.module.scss';
import popularItemsSectionStyles from "./popularItemsSection.module.scss";
import {Link} from "react-router-dom";
import Slider from "./Slider";

function renderFeaturesSection(props) {

    const categories = [
        {name: 'Computers & Accessories', icon: '/assets/laptop.svg'},
        {name: 'Smartphones & Tablets', icon: '/assets/smartphone-2.svg'},
        {name: 'TV, Video & Audio', icon: '/assets/monitor-2.svg'},
        {name: 'Speakers & Home Music', icon: '/assets/speaker-2.svg'},
        {name: 'Cameras, Photo & Video', icon: '/assets/camera-2.svg'},
        {name: 'Printers & Ink', icon: '/assets/printer-2.svg'},
        {name: 'Charging Stations', icon: '/assets/battery-2.svg'},
        {name: 'Headphones', icon: '/assets/headphones-2.svg'},
        {name: 'Wearable Electronics', icon: '/assets/watch-2.svg'},
        {name: 'Powerbanks', icon: '/assets/powerbank.svg'},
        {name: 'HDD/SSD Data Storage', icon: '/assets/hard-drive-2.svg'},
        {name: 'Video Games', icon: '/assets/game.svg'},
    ]


    return (
        <section className={featuresSectionStyles.featuresSection}>
            {/* Features and benefits showcase */}

            <div className={featuresSectionStyles.highlightContainer}>
                {/* Features and benefits showcase */}

                <div className={featuresSectionStyles.wrapperContent}>
                    <div className={featuresSectionStyles.menuWrapper}>
                        {/* Category navigation menu */}

                        <nav className={featuresSectionStyles.categoryNav}>
                            {categories.map((category, index) => (
                                <a className={featuresSectionStyles.categoryLink} key={index}>
                                    <img
                                        className={featuresSectionStyles.iconCategory}
                                        src={category.icon}
                                        alt={`${category.name} icon`}
                                    />
                                    <Link
                                        className={popularItemsSectionStyles.categoriesLink}
                                        to="/Catalog"
                                    >
                                        {category.name}
                                    </Link>
                                    <img
                                        className={featuresSectionStyles.iconArrow}
                                        src={'/assets/right_arrow.svg'}
                                        alt="Arrow icon"
                                    />
                                </a>
                            ))}
                        </nav>
                    </div>

                    <Slider className={featuresSectionStyles.imgBanner} />
                    {/*<img*/}
                    {/*    className={featuresSectionStyles.imgBanner}*/}
                    {/*    src={'/assets/slider_item_1.jpg'}*/}
                    {/*    alt="alt text"*/}
                    {/*/>*/}
                </div>

                <div className={featuresSectionStyles.benefitsGrid}>
                    {/* Grid of service benefits */}

                    <article className={featuresSectionStyles.cardFeature}>
                        <img
                            className={featuresSectionStyles.iconFeature}
                            src={'/assets/7d1a2eba147780e5b3996fceb555f9fa.svg'}
                            alt="alt text"
                        />

                        <div className={featuresSectionStyles.contentFeature}>
                            <p
                                className={
                                    featuresSectionStyles.titleFeature
                                }>{`Free Shipping & Returns`}</p>
                            <p className={featuresSectionStyles.descFeature}>
                                For all orders over $199.00
                            </p>
                        </div>
                    </article>

                    <div className={featuresSectionStyles.rowFeature}>
                        <img
                            className={featuresSectionStyles.iconFeature}
                            src={'/assets/card_icon.svg'}
                            alt="alt text"
                        />

                        <div className={featuresSectionStyles.colFeature}>
                            <p className={featuresSectionStyles.titleFeature}>
                                Secure Payment
                            </p>
                            <p className={featuresSectionStyles.descFeature1}>
                                We ensure secure payment
                            </p>
                        </div>
                    </div>

                    <div className={featuresSectionStyles.rowFeature}>
                        <img
                            className={featuresSectionStyles.iconFeature}
                            src={'/assets/7946801bf686e224e1f85dd50549e03b.svg'}
                            alt="alt text"
                        />

                        <div className={featuresSectionStyles.colFeature}>
                            <p className={featuresSectionStyles.titleFeature}>
                                Money Back Guarantee
                            </p>
                            <p className={featuresSectionStyles.descFeature2}>
                                Returning money 30 days
                            </p>
                        </div>
                    </div>

                    <div className={featuresSectionStyles.rowFeature1}>
                        <img
                            className={featuresSectionStyles.iconFeature}
                            src={'/assets/50e94a4199a3c5db3412a66e713e00e7.svg'}
                            alt="alt text"
                        />

                        <div className={featuresSectionStyles.colFeature1}>
                            <p className={featuresSectionStyles.titleFeature}>
                                24/7 Customer Support
                            </p>
                            <p className={featuresSectionStyles.descFeature3}>
                                Friendly customer support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default renderFeaturesSection;
