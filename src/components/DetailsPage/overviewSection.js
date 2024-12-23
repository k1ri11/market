import React, {useState} from 'react';

import overviewSectionStyles from './overviewSection.module.scss';
import styles from "../Catalog/index.module.scss";
import RenderAccordion from "./accordion";
import {Link} from "react-router-dom";

function RenderOverviewSection(props) {

    const [selectedColor, setSelectedColor] = useState(null);
    const [activeMemButton, setActiveMemButton] = useState(null);
    const [quantity, setQuantity] = useState(1); // Начальное количество

    const handleMemButtonClick = (buttonId) => {
        setActiveMemButton(buttonId);
    }

    const handleColorClick = (color) => {
        setSelectedColor(color); // Устанавливаем выбранный цвет
    }

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1); // Увеличить количество
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Уменьшить, но не меньше 1
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} items to cart!`); // Логика добавления в корзину
    };

    const colors = [
        {name: 'Light pink', src: '/assets/light_pink.svg'},
        {name: 'Sky blue', src: '/assets/sky_blue.svg'},
        {name: 'Black', src: '/assets/black.svg'},
        {name: 'White', src: '/assets/white.svg'},
    ];

    const warrantyDetails = [
        'Warranty includes repairs and replacements for 1 year.',
        'Extended warranty options available for additional cost.',
        'Warranty coverage excludes physical damage caused by misuse.',
        'Free technical support included for the duration of the warranty.'
    ]

    const deliveryDetails = [
        'Standard delivery within 5-7 business days.',
        'Express delivery available for an additional charge.',
        'Free shipping on orders over $50.',
        'Track your delivery with real-time updates.'
    ];

    const paymentDetails = [
        'We accept Visa, MasterCard, and American Express.',
        'Secure payment options powered by SSL encryption.',
        'Installment plans available for purchases over $200.',
        'Refunds processed within 5-7 business days.'
    ];


    return (
        <section className={overviewSectionStyles.overviewSection}>
            {/* Product overview and main details */}

            <div className={overviewSectionStyles.contentWrapper}>
                <nav className={overviewSectionStyles.breadcrumb}>
                    {/* Navigation breadcrumb */}
                    <a className={overviewSectionStyles.homeLink}>
                        <Link to="/Home">Home</Link>
                    </a>
                    <img
                        className={overviewSectionStyles.chevronIcon}
                        src={'/assets/right_arrow.svg'}
                        alt="alt text"
                    />
                    <p className={overviewSectionStyles.currentPage}>Product page</p>
                </nav>

                <div className={overviewSectionStyles.ratingBox}>
                    <div
                        className={overviewSectionStyles.reviewContainer}
                        style={{
                            '--src': `url(${'/assets/373a17f4e9e450351d55eb9faafca6e0.png'})`
                        }}>
                        <div className={overviewSectionStyles.ratingDisplay}>
                            <p className={overviewSectionStyles.ratingScore}>4,5</p>
                            <img
                                className={overviewSectionStyles.starIcon}
                                src={'/assets/09c06b48fe6efa0ce73823039a042d73.svg'}
                                alt="alt text"
                            />
                            <p className={overviewSectionStyles.reviewCount}>68 reviews</p>
                        </div>
                    </div>

                    <div className={overviewSectionStyles.divider}/>
                </div>

                <div className={overviewSectionStyles.productMain}>
                    {/* Main product content area */}

                    <figure className={overviewSectionStyles.galleryBox}>
                        {/* Product image gallery */}
                        <img
                            className={overviewSectionStyles.mainProductImg}
                            src={'/assets/6ba775abdf8797ffd7ff54fc1c8cdb47.png'}
                            alt="alt text"
                        />

                        <div className={overviewSectionStyles.thumbnailContainer}>
                            <img
                                className={overviewSectionStyles.image7}
                                src={'/assets/5b73749b90f66e0c8a4ed50059cb4fe3.png'}
                                alt="alt text"
                            />
                            <img
                                className={overviewSectionStyles.image9}
                                src={'/assets/03def7bfc143ce78af3e921ff89b7663.png'}
                                alt="alt text"
                            />
                            <img
                                className={overviewSectionStyles.image9}
                                src={'/assets/668817a190b07dce7941f3e0da66e0f7.png'}
                                alt="alt text"
                            />
                            <img
                                className={overviewSectionStyles.image9}
                                src={'/assets/d6182c3673b96cc6f63bae0b79836493.png'}
                                alt="alt text"
                            />
                            <img
                                className={overviewSectionStyles.image9}
                                src={'/assets/8ebb6f4cf87c12322e443525baba41fe.png'}
                                alt="alt text"
                            />
                            <div
                                className={overviewSectionStyles.block4}
                                style={{
                                    '--src': `url(${'/assets/0bff4764f0a3651d3ec61ed67f3cbcee.png'})`
                                }}
                            />
                        </div>
                    </figure>

                    <article className={overviewSectionStyles.productInfo}>
                        <div className={overviewSectionStyles.specGroup}>
                            <div className={overviewSectionStyles.modelInfo}>
                                <div className={overviewSectionStyles.info3}>Model</div>
                                <div className={overviewSectionStyles.info5}>V00273124</div>
                            </div>

                            <div className={overviewSectionStyles.storageOptions}>
                                <button className={`${overviewSectionStyles.storageBtn} ${
                                    activeMemButton === '256' ? styles.active_btn : ''
                                }`}
                                        onClick={() => handleMemButtonClick('256')}
                                >
                                    256 GB
                                </button>
                                <button className={`${overviewSectionStyles.storageBtn} ${
                                    activeMemButton === '512' ? styles.active_btn : ''
                                }`}
                                        onClick={() => handleMemButtonClick('512')}
                                >
                                    512 GB
                                </button>
                            </div>

                            <div className={overviewSectionStyles.flex_row1}>
                                {colors.map((color) => (

                                    <img
                                        key={color.name}
                                        className={`${overviewSectionStyles.image2}
                        ${
                                            selectedColor === color.name ? overviewSectionStyles.active : ''
                                        }`}
                                        onClick={() => handleColorClick(color.name)}
                                        src={color.src}
                                        alt={color.name}
                                    />
                                ))}

                            </div>

                            <div className={overviewSectionStyles.info7}>$940.00</div>
                        </div>

                        <div className={overviewSectionStyles.purchaseBox}>
                            <div className={overviewSectionStyles.content_box1}>
                                <div className={overviewSectionStyles.flex_row2}>
                                    <img
                                        className={overviewSectionStyles.image4}
                                        src={'/assets/minus.svg'}
                                        alt="minus"
                                        onClick={handleDecrease}
                                    />

                                    <div className={overviewSectionStyles.info8}>
                                        <div className={overviewSectionStyles.info81}>{quantity}</div>
                                    </div>

                                    <div className={overviewSectionStyles.wrapper1} onClick={handleIncrease}>
                                        <img
                                            className={overviewSectionStyles.wrapper11}
                                            src={'/assets/plus.svg'}
                                            alt="Increase quantity"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button className={overviewSectionStyles.addCartBtn} onClick={handleAddToCart}>
                                <img
                                    className={overviewSectionStyles.btn_icon}
                                    src={'/assets/c8a9e487abca9b701295b917be2d40bd.svg'}
                                    alt="Cart Icon"
                                />
                                <div className={overviewSectionStyles.btn_text}>
                                    Add to cart
                                </div>
                            </button>

                            <button className={overviewSectionStyles.block1}>
                                <img
                                    className={overviewSectionStyles.wrapper5}
                                    src={'/assets/heart.svg'}
                                    alt="heart"
                                />
                            </button>

                            <button className={overviewSectionStyles.block1}>
                                <img
                                    className={overviewSectionStyles.wrapper5}
                                    src={'/assets/repeat.svg'}
                                    alt="Wishlist"
                                />
                            </button>
                        </div>


                        {/* аккардеон*/}
                        <div className={` ${overviewSectionStyles.additionalInfo} `}>
                            <RenderAccordion title='Warranty options' params={warrantyDetails}/>

                            <RenderAccordion title='Delivery options' params={deliveryDetails}/>

                            <RenderAccordion title='Payment options' params={paymentDetails}/>


                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default RenderOverviewSection;
