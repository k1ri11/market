import React, {useState} from 'react';

import headerSectionStyles from './headerSection.module.scss';

function RenderHeaderSection(props) {
    const [searchQuery, setSearchQuery] = useState(''); // Для состояния поиска

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Обновляем поисковый запрос
    };

    return (
        <section className={headerSectionStyles.headerSection}>
            {/* Primary navigation and header area */}

            <nav className={headerSectionStyles.navigationWrapper}>
                <div className={headerSectionStyles.topBar}>
                    <figure className={headerSectionStyles.brandLogo}>
                        <img
                            className={headerSectionStyles.mainLogo}
                            src={'/assets/bc21582495e896b3b26a1e5889739051.svg'}
                            alt=""
                        />
                        <img
                            className={headerSectionStyles.altLogo}
                            src={'/assets/ed3d747aa3391945c9265223bd0b34ba.svg'}
                            alt=""
                        />
                    </figure>

                    <div className={headerSectionStyles.searchContainer}>
                        <div className={headerSectionStyles.searchBox}>
                            {/* Поле поиска с вводом текста */}
                            <input
                                type="text"
                                className={headerSectionStyles.searchInput}
                                placeholder="Search for anything..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <img
                                className={headerSectionStyles.searchIcon}
                                src={'/assets/search.svg'}
                                alt=""
                            />
                        </div>
                    </div>

                    <article className={headerSectionStyles.promoCard}>
                        {/* Monthly promotion banner */}
                        <img
                            className={headerSectionStyles.promoIcon}
                            src={'/assets/percent_icon.svg'}
                            alt=""
                        />

                        <div className={headerSectionStyles.promoDetails}>
                            <p className={headerSectionStyles.promoTitle}>Only this month</p>
                            <p className={headerSectionStyles.promoDiscount}>
                                Super Sale 20%
                            </p>
                        </div>
                    </article>

                    <div className={headerSectionStyles.socialMediaLinks}>
                        {/* Social media icons container */}
                        <a href="404">
                            <img
                                className={headerSectionStyles.image1}
                                src={'/assets/heart-min.svg'}
                                alt=""
                            />
                        </a>
                        <a  href="404">
                            <img
                                className={headerSectionStyles.image1}
                                src={'/assets/person.svg'}
                                alt=""
                            />
                        </a>

                        <a  href="404">
                            <img
                                className={headerSectionStyles.image1}
                                src={'/assets/2548267b929b941590526e5ff37fb010.svg'}
                                alt=""
                            />
                        </a>
                    </div>
                </div>

                <nav className={headerSectionStyles.menuNav}>
                    <div className={headerSectionStyles.categoryMenu}>
                        <div className={headerSectionStyles.categoryToggle}>
                            <img
                                className={headerSectionStyles.wrapper1}
                                src={'/assets/5538003d1bc1499471288a3d8dcda2e5.svg'}
                                alt=""
                            />
                            <div className={headerSectionStyles.info5}>Categories</div>
                            <img
                                className={headerSectionStyles.wrapper4}
                                src={'/assets/f4a114cda318ae329b37063db907f9f8.svg'}
                                alt=""
                            />
                        </div>
                    </div>

                    <nav className={headerSectionStyles.mainMenu}>
                        {/* Main navigation menu */}
                        <a href={"404"} className={headerSectionStyles.info4}>Best Sellers</a>
                        <a href={"404"} className={headerSectionStyles.info41}>Today’s Deals</a>
                        <a href={"404"} className={headerSectionStyles.info41}>New Arrivals</a>
                        <a href={"404"} className={headerSectionStyles.info4}>Gift Cards</a>
                        <a href={"404"} className={headerSectionStyles.info4}>Help Center</a>
                    </nav>
                </nav>
            </nav>
        </section>
    );
}

export default RenderHeaderSection;
