import styles from './index.module.scss';
import {useState} from "react";

const RenderSidebar = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);

    }
    const handleColorClick = (color) => {
        setSelectedColor(color); // Устанавливаем выбранный цвет
    }

    const colors = [
            { name: 'Green', src: '/assets/green.svg' },
            { name: 'Coral red', src: '/assets/red.svg' },
            { name: 'Light pink', src: '/assets/light_pink.svg' },
            { name: 'Sky blue', src: '/assets/sky_blue.svg' },
            { name: 'Black', src: '/assets/black.svg' },
            { name: 'White', src: '/assets/white.svg' },
        ];

    return (
        <div className={styles.flex_col2}>

            {/* Status */}
            <div className={styles.content_box}>
                <div className={styles.flex_col3}>
                    <div className={styles.info6}>Status</div>

                    <div className={styles.flex_col4}>

                        <button
                            className={`${styles.btn2} ${
                                activeButton === 'sale' ? styles.active_btn : ''
                            }`}
                            onClick={() => handleButtonClick('sale')}
                        >
                            Sale
                        </button>

                        <button
                            className={`${styles.btn2} ${
                                activeButton === 'delivery' ? styles.active_btn : ''
                            }`}
                            onClick={() => handleButtonClick('delivery')}
                        >
                            Same Day Delivery
                        </button>


                        <button
                            className={`${styles.btn2} ${
                                activeButton === 'order' ? styles.active_btn : ''
                            }`}
                            onClick={() => handleButtonClick('order')}
                        >
                            Available to Order
                        </button>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className={styles.content_box1}>
                <div className={styles.flex_col5}>
                    <div className={styles.info6}>Categories</div>

                    {/* Categories */}
                    <div className={styles.flex_col6}>
                        <div className={styles.flex_row5}>
                            <a className={styles.info9}>Smartphones</a>
                            <div className={styles.info10}>218</div>
                        </div>

                        <div className={styles.flex_row5}>
                            <a className={styles.info9}>Accessories</a>
                            <div className={styles.info10}>372</div>
                        </div>

                        <div className={styles.flex_row5}>
                            <a className={styles.info9}>Tablets</a>
                            <div className={styles.info10}>110</div>
                        </div>

                        <div className={styles.flex_row5}>
                            <a className={styles.info91}>Wearable Electronics</a>
                            <div className={styles.info10}>142</div>
                        </div>

                        <div className={styles.flex_row5}>
                            <a className={styles.info9}>Computers & Laptops</a>
                            <div className={styles.info10}>205</div>
                        </div>

                        <div className={styles.flex_row5}>
                            <a
                                className={styles.info9}>CamerasPhoto & Video</a>
                            <div className={styles.info10}>78</div>
                        </div>

                        <div className={styles.flex_row5}>
                            <a className={styles.info9}>Headphones</a>
                            <div className={styles.info10}>121</div>
                        </div>

                        <div className={styles.flex_row5}>
                            <a className={styles.info91}>Video Games</a>
                            <div className={styles.info10}>89</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className={styles.content_box4}>
                <div className={styles.flex_col5}>
                    <div className={styles.info6}>Price</div>

                    <div className={styles.flex_row6}>
                        <div className={styles.content_box2}>
                            <div className={styles.icon_wrapper}>
                                <img
                                    className={styles.icon}
                                    src={'/assets/dollar.svg'}
                                    alt="$"
                                />
                            </div>
                            <input
                                type="text"
                                className={styles.input_field}
                                defaultValue="340"
                            />
                        </div>

                        <img
                            className={styles.wrapper3}
                            src={'/assets/minus.svg'}
                            alt="alt text"
                        />

                        <div className={styles.content_box2}>
                            <div className={styles.icon_wrapper}>
                                <img
                                    className={styles.icon}
                                    src={'/assets/dollar.svg'}
                                    alt="$"
                                />
                            </div>
                            <input
                                type="text"
                                className={styles.input_field}
                                defaultValue="1250"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Brand */}
            <div className={styles.content_box6}>
                <div className={styles.flex_col7}>
                    <div className={styles.info6}>Brand</div>

                    <div className={styles.flex_row7}>
                        <label className={styles.checkbox_label}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                value="Apple"
                            />
                            <span className={styles.checkbox_custom}></span>
                            <div className={styles.info11}>Apple</div>
                        </label>
                        <div className={styles.info10}>12</div>
                    </div>

                    <div className={styles.flex_row9}>
                        <label className={styles.checkbox_label}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                value="Asus"
                            />
                            <span className={styles.checkbox_custom}></span>
                            <div className={styles.info11}>Asus</div>
                        </label>
                        <div className={styles.info10}>47</div>
                    </div>

                    <div className={styles.flex_row9}>
                        <label className={styles.checkbox_label}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                value="Cobra"
                            />
                            <span className={styles.checkbox_custom}></span>
                            <div className={styles.info11}>Cobra</div>
                        </label>
                        <div className={styles.info10}>52</div>
                    </div>

                    <div className={styles.flex_row9}>
                        <label className={styles.checkbox_label}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                value="Dell"
                            />
                            <span className={styles.checkbox_custom}></span>
                            <div className={styles.info11}>Dell</div>
                        </label>
                        <div className={styles.info10}>48</div>
                    </div>

                    <div className={styles.flex_row9}>
                        <label className={styles.checkbox_label}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                value="Lenovo"
                            />
                            <span className={styles.checkbox_custom}></span>
                            <div className={styles.info11}>Lenovo</div>
                        </label>
                        <div className={styles.info10}>112</div>
                    </div>

                    <div className={styles.flex_row9}>
                        <label className={styles.checkbox_label}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                value="2E Gambing"
                            />
                            <span className={styles.checkbox_custom}></span>
                            <div className={styles.info11}>2E Gambing</div>
                        </label>
                        <div className={styles.info10}>13</div>
                    </div>

                    <div className={styles.flex_row9}>
                        <label className={styles.checkbox_label}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                value="AsRock"
                            />
                            <span className={styles.checkbox_custom}></span>
                            <div className={styles.info11}>AsRock</div>
                        </label>
                        <div className={styles.info10}>35</div>
                    </div>
                </div>
            </div>


            {/* Colors */}
            <div className={styles.content_box5}>
                <div className={styles.flex_col8}>
                    <div className={styles.info6}>Color</div>
                    {colors.map((color) => (
                        <div
                            key={color.name}
                            className={styles.flex_row18}
                            onClick={() => handleColorClick(color.name)} // Обрабатываем клик
                        >
                            <img
                                className={`${styles.image3} ${
                                    selectedColor === color.name ? styles.active : ''
                                }`}
                                src={color.src}
                                alt={color.name}
                            />
                            <div className={styles.info11}>{color.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}


export default RenderSidebar;
