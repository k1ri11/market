import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';
import {Link} from "react-router-dom";

function ProductItem(props) {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive((prevState) => !prevState); // Переключение состояния
    }

    return (
        <div className={cn(styles.content_box2, props.className, 'product-item')}>
            <div className={styles.unnamed}>
                <div className={styles.unnamed1}>
                    <div className={styles.content_box1}>
                        <div className={styles.info13}>-21%</div>
                    </div>
                    <Link to="/DetailsPage">
                        <img className={styles.image} src={props.image} alt="alt text"/>
                    </Link>
                </div>

                <div className={styles.content_box}>
                    <div className={styles.unnamed2}>
                        <div className={styles.unnamed3}>
                            <img
                                className={styles.image20}
                                src={'/assets/review_stars.svg'}
                                alt="alt text"
                            />
                            <div className={styles.reviewCount}>{props.reviewCount}</div>
                        </div>

                        <a className={styles.name}>{props.name}</a>

                        <div className={styles.unnamed4}>
                            <div className={styles.sellPrice}>{props.sellPrice}</div>
                            <div className={styles.basePrice}>{props.basePrice}</div>
                            <div className={`${styles.cartBg} ${isActive ? styles.active : ''}`}
                                 onClick={handleButtonClick}>
                                <img
                                    className={`${styles.cartImg} ${isActive ? styles.active : ''}`}
                                    src={'/assets/cart.svg'}
                                    alt="Cart Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string.isRequired,
    reviewCount: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sellPrice: PropTypes.string.isRequired,
    basePrice: PropTypes.string.isRequired
};

export default ProductItem;
