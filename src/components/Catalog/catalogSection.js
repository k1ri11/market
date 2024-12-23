import styles from './index.module.scss';
import ProductItem from "../ProductItem";
import React from "react";
import {Link} from "react-router-dom";

function renderCatalogSection(props) {
    return (
        <div className={styles.flex_col}>
            <div className={styles.flex_col1}>
                <div className={styles.flex_row}>
                    <a className={styles.info}>
                        <Link to="/Home">Home</Link>
                    </a>
                    <img
                        className={styles.image}
                        src={'/assets/right_arrow.svg'}
                        alt="alt text"
                    />
                    <div className={styles.info1}>Catalog with sidebar filters</div>
                </div>

                <div className={styles.info2}>Shop catalog</div>

                <div className={styles.flex_row1}>
                    <div className={styles.info5_box}>
              <span className={styles.info5}>
                <span className={styles.info5_span0}>Found </span>
                <span className={styles.info5_span1}>732</span>
                <span className={styles.info5_span2}> items</span>
              </span>
                    </div>

                    <div className={styles.flex_row2}>
                        <div className={styles.info3}>Sort by:</div>
                        <div className={styles.info4}>Most popular</div>
                        <img
                            className={styles.image1}
                            src={'/assets/bottom_arrow.svg'}
                            alt="alt text"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.flex_row3}>
                <div className={styles.flex_col2}>
                    <div className={styles.content_box}>
                        <div className={styles.flex_col3}>
                            <div className={styles.info6}>Status</div>

                            <div className={styles.flex_col4}>
                                <div className={styles.flex_row4}>
                                    <button className={styles.btn}>
                                        {/* TODO */}
                                        <img
                                            className={styles.btn_icon}
                                            src={'/assets/de686681c22eb0335d366ce0fd6b62df.svg'}
                                            alt="alt text"
                                        />
                                        <div className={styles.btn_text}>Sale</div>
                                    </button>

                                    <button className={styles.btn1}>
                                        {/* TODO */}
                                        Same Day Delivery
                                    </button>
                                </div>

                                <button className={styles.btn2}>
                                    {/* TODO */}
                                    Available to Order
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.content_box1}>
                        <div className={styles.flex_col5}>
                            <div className={styles.info6}>Categories</div>

                            <div className={styles.flex_col6}>
                                <div className={styles.flex_row5}>
                                    <div className={styles.info9}>Smartphones</div>
                                    <div className={styles.info10}>218</div>
                                </div>

                                <div className={styles.flex_row5}>
                                    <div className={styles.info9}>Accessories</div>
                                    <div className={styles.info10}>372</div>
                                </div>

                                <div className={styles.flex_row5}>
                                    <div className={styles.info9}>Tablets</div>
                                    <div className={styles.info10}>110</div>
                                </div>

                                <div className={styles.flex_row5}>
                                    <div className={styles.info91}>Wearable Electronics</div>
                                    <div className={styles.info10}>142</div>
                                </div>

                                <div className={styles.flex_row5}>
                                    <div className={styles.info9}>{`Computers & Laptops`}</div>
                                    <div className={styles.info10}>205</div>
                                </div>

                                <div className={styles.flex_row5}>
                                    <div
                                        className={styles.info9}>{`Cameras, Photo & Video`}</div>
                                    <div className={styles.info10}>78</div>
                                </div>

                                <div className={styles.flex_row5}>
                                    <div className={styles.info9}>Headphones</div>
                                    <div className={styles.info10}>121</div>
                                </div>

                                <div className={styles.flex_row5}>
                                    <div className={styles.info91}>Video Games</div>
                                    <div className={styles.info10}>89</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.content_box4}>
                        <div className={styles.flex_col5}>
                            <div className={styles.info6}>Price</div>

                            <div className={styles.flex_row6}>
                                <div className={styles.content_box2}>
                                    <img
                                        className={styles.image1}
                                        src={'/assets/dollar.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info4}>340</div>
                                </div>

                                <img
                                    className={styles.wrapper3}
                                    src={'/assets/minus.svg'}
                                    alt="alt text"
                                />

                                <div className={styles.content_box2}>
                                    <img
                                        className={styles.image1}
                                        src={'/assets/dollar.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info4}>1250</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.content_box6}>
                        <div className={styles.flex_col7}>
                            <div className={styles.info6}>Brand</div>

                            <div className={styles.flex_row7}>
                                <div className={styles.flex_row8}>
                                    <img
                                        className={styles.image2}
                                        src={'/assets/b10370b348985af7526d432b4d3db8ab.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info11}>Apple</div>
                                </div>

                                <div className={styles.info10}>12</div>
                            </div>

                            <div className={styles.flex_row9}>
                                <div className={styles.flex_row10}>
                                    <img
                                        className={styles.image2}
                                        src={'/assets/87489f38f52aa301ddded553dfdae1a0.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info11}>Asus</div>
                                </div>

                                <div className={styles.info10}>47</div>
                            </div>

                            <div className={styles.flex_row9}>
                                <div className={styles.flex_row11}>
                                    <img
                                        className={styles.image2}
                                        src={'/assets/87489f38f52aa301ddded553dfdae1a0.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info11}>Cobra</div>
                                </div>

                                <div className={styles.info10}>52</div>
                            </div>

                            <div className={styles.flex_row9}>
                                <div className={styles.flex_row12}>
                                    <img
                                        className={styles.image2}
                                        src={'/assets/87489f38f52aa301ddded553dfdae1a0.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info11}>Dell</div>
                                </div>

                                <div className={styles.info10}>48</div>
                            </div>

                            <div className={styles.flex_row9}>
                                <div className={styles.flex_row13}>
                                    <img
                                        className={styles.image2}
                                        src={'/assets/87489f38f52aa301ddded553dfdae1a0.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info11}>Lenovo</div>
                                </div>

                                <div className={styles.info10}>112</div>
                            </div>

                            <div className={styles.flex_row9}>
                                <div className={styles.flex_row14}>
                                    <img
                                        className={styles.image2}
                                        src={'/assets/87489f38f52aa301ddded553dfdae1a0.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info111}>2E Gambing</div>
                                </div>

                                <div className={styles.info10}>13</div>
                            </div>

                            <div className={styles.flex_row9}>
                                <div className={styles.flex_row15}>
                                    <img
                                        className={styles.image2}
                                        src={'/assets/87489f38f52aa301ddded553dfdae1a0.svg'}
                                        alt="alt text"
                                    />
                                    <div className={styles.info11}>AsRock</div>
                                </div>

                                <div className={styles.info10}>35</div>
                            </div>

                            <div className={styles.flex_row16}>
                                <div className={styles.info12}>Show all</div>
                                <img
                                    className={styles.wrapper31}
                                    src={'/assets/4db636f892a526221f1b399974652a34.svg'}
                                    alt="alt text"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.color8}/>

                    <div className={styles.content_box5}>
                        <div className={styles.flex_col8}>
                            <div className={styles.info6}>Color</div>

                            <div className={styles.flex_row17}>
                                <img
                                    className={styles.image3}
                                    src={'/assets/green.svg'}
                                    alt="alt text"
                                />
                                <div className={styles.info11}>Green</div>
                            </div>

                            <div className={styles.flex_row18}>
                                <img
                                    className={styles.image3}
                                    src={'/assets/red.svg'}
                                    alt="alt text"
                                />
                                <div className={styles.info11}>Coral red</div>
                            </div>

                            <div className={styles.flex_row18}>
                                <img
                                    className={styles.image3}
                                    src={'/assets/light_pink.svg'}
                                    alt="alt text"
                                />
                                <div className={styles.info11}>Light pink</div>
                            </div>

                            <div className={styles.flex_row18}>
                                <img
                                    className={styles.image3}
                                    src={'/assets/sky_blue.svg'}
                                    alt="alt text"
                                />
                                <div className={styles.info11}>Sky blue</div>
                            </div>

                            <div className={styles.flex_row18}>
                                <img
                                    className={styles.image3}
                                    src={'/assets/black.svg'}
                                    alt="alt text"
                                />
                                <div className={styles.info11}>Black</div>
                            </div>

                            <div className={styles.flex_row18}>
                                <img
                                    className={styles.image3}
                                    src={'/assets/white.svg'}
                                    alt="alt text"
                                />
                                <div className={styles.info11}>White</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.flex_col9}>
                    <div className={styles.flex_row19}>
                        <ProductItem
                            className={styles.color9}
                            basePrice={`$430.00`}
                            image={'/assets/9c9db9d5158e22c7ad62bb015ef7de53.png'}
                            name={`VRB01 Virtual Reality Glasses`}
                            reviewCount={`(14)`}
                            sellPrice={`$340.99`}
                        />
                        <ProductItem
                            className={styles.color9}
                            basePrice={`$430.00`}
                            image={'/assets/9c9db9d5158e22c7ad62bb015ef7de53.png'}
                            name={`VRB01 Virtual Reality Glasses`}
                            reviewCount={`(14)`}
                            sellPrice={`$340.99`}
                        />
                        <ProductItem
                            className={styles.color9}
                            basePrice={`$430.00`}
                            image={'/assets/9c9db9d5158e22c7ad62bb015ef7de53.png'}
                            name={`VRB01 Virtual Reality Glasses`}
                            reviewCount={`(14)`}
                            sellPrice={`$340.99`}
                        />
                    </div>

                    <hr className={styles.line} size={1}/>

                    <div className={styles.flex_row20}>
                        <img
                            className={styles.image7}
                            src={'/assets/2559dee6affbdd7cf4677aea6ccb4193.svg'}
                            alt="alt text"
                        />

                        <div className={styles.flex_row21}>
                            <button className={styles.btn3}>{/* TODO */}1</button>
                            <button className={styles.btn4}>{/* TODO */}2</button>
                            <div className={styles.info19}>3</div>
                            <div className={styles.info19}>4</div>
                            <div className={styles.info19}>...</div>
                            <div className={styles.info19}>16</div>
                        </div>

                        <img
                            className={styles.image7}
                            src={'/assets/815176223f057a921b78283285a8f4b0.svg'}
                            alt="alt text"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default renderCatalogSection;