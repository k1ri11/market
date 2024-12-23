import styles from './index.module.scss';
import React, {useState} from "react";
import {Link} from "react-router-dom";

function RenderTopSection() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Most popular');

    const options = ['Most popular', 'Price: Low to High', 'Price: High to Low', 'Newest'];

    const handleToggle = () => setIsOpen((prev) => !prev);

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    }

    return (
        <div className={styles.flex_col1}>
            <div className={styles.flex_row}>
                <a className={styles.info}>
                    <Link className={styles.info} to="/Home">Home</Link>
                </a>
                <img
                    className={styles.image}
                    src={'/assets/right_arrow.svg'}
                    alt="alt text"
                />
                <div className={styles.info1}>Catalog</div>
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
                    <div className={styles.dropdown}>
                        <div
                            className={styles.dropdownToggle}
                            onClick={handleToggle}
                        >
                            <span>{selected}</span>
                            <img
                                className={styles.image1}
                                src={'/assets/bottom_arrow.svg'}
                                alt="Toggle dropdown"
                            />
                        </div>
                        {isOpen && (
                            <ul className={styles.dropdownList}>
                                {options.map((option) => (
                                    <li
                                        key={option}
                                        className={`${styles.dropdownItem} ${selected === option ? styles.active : ''}`}
                                        onClick={() => handleSelect(option)}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenderTopSection;
