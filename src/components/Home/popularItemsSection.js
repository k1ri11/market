import React from 'react';
import cn from 'classnames';
import ProductItem from 'components/ProductItem';

import popularItemsSectionStyles from './popularItemsSection.module.scss';
import {Link} from "react-router-dom";

function renderPopularItemsSection(props) {
    return (
        <section className={popularItemsSectionStyles.popularItemsSection}>
            {/* Product showcase section displaying trending items */}

            <div className={popularItemsSectionStyles.trendingContainer}>
                {/* Popular products section */}

                <div className={popularItemsSectionStyles.sectionHeader}>
                    <p className={popularItemsSectionStyles.sectionTitle}>
                        Trending products
                    </p>

                    <div className={popularItemsSectionStyles.viewAllWrapper}>
                            <Link className={popularItemsSectionStyles.viewAllLink} to="/Catalog">View all</Link>
                        <img
                            className={popularItemsSectionStyles.arrowIcon}
                            src={'/assets/5986effbede65a0d72c2189852743896.svg'}
                            alt="alt text"
                        />
                    </div>
                </div>

                <hr className={popularItemsSectionStyles.divider} size={1}/>

                <div className={popularItemsSectionStyles.productGrid}>
                    {/* Grid container for product cards */}
                    <ProductItem
                        className={popularItemsSectionStyles.productCard}
                        basePrice={`$430.00`}
                        image={'/assets/9c9db9d5158e22c7ad62bb015ef7de53.png'}
                        name={`VRB01 Virtual Reality Glasses`}
                        reviewCount={`(14)`}
                        sellPrice={`$340.99`}
                    />
                    <ProductItem
                        className={popularItemsSectionStyles.productSlot}
                        basePrice={`$430.00`}
                        image={'/assets/9c9db9d5158e22c7ad62bb015ef7de53.png'}
                        name={`VRB01 Virtual Reality Glasses`}
                        reviewCount={`(14)`}
                        sellPrice={`$340.99`}
                    />
                    <ProductItem
                        className={popularItemsSectionStyles.productSlot}
                        basePrice={`$430.00`}
                        image={'/assets/9c9db9d5158e22c7ad62bb015ef7de53.png'}
                        name={`VRB01 Virtual Reality Glasses`}
                        reviewCount={`(14)`}
                        sellPrice={`$340.99`}
                    />
                    <ProductItem
                        className={popularItemsSectionStyles.productSlot}
                        basePrice={`$430.00`}
                        image={'/assets/9c9db9d5158e22c7ad62bb015ef7de53.png'}
                        name={`VRB01 Virtual Reality Glasses`}
                        reviewCount={`(14)`}
                        sellPrice={`$340.99`}
                    />
                </div>
            </div>
        </section>
    );
}

export default renderPopularItemsSection;
