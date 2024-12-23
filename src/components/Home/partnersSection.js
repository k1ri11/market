import React from 'react';
import cn from 'classnames';

import partnersSectionStyles from './partnersSection.module.scss';

function renderPartnersSection(props) {
    return (
        <section className={partnersSectionStyles.partnersSection}>
            {/* Brand showcase and logo display area */}

            <div className={partnersSectionStyles.partnerShowcase}>
                {/* Brand partners display */}
                <img
                    className={partnersSectionStyles.mainBrandLogo}
                    src={'/assets/3f227fbd35b6a013ff994c52ad872dd8.png'}
                    alt="alt text"
                />

                <div className={partnersSectionStyles.brandLogoWrapper}>
                    {/* Brand logo list display */}
                    <img
                        className={partnersSectionStyles.partnerLogo}
                        src={'/assets/76b5fab8011fb7b1ae884bd69fab5415.svg'}
                        alt="alt text"
                    />
                    <img
                        className={partnersSectionStyles.partnerLogo}
                        src={'/assets/8ac37974f654a4d13622ff6d51492f2a.svg'}
                        alt="alt text"
                    />
                    <img
                        className={partnersSectionStyles.partnerLogo}
                        src={'/assets/528a3420abb94c1095cfda9fe706985e.svg'}
                        alt="alt text"
                    />
                    <img
                        className={partnersSectionStyles.partnerLogo}
                        src={'/assets/210bb345485cc7dc31a943281deef09c.svg'}
                        alt="alt text"
                    />
                    <img
                        className={partnersSectionStyles.partnerLogo}
                        src={'/assets/e410da0b70564bb6c6dceb8444f36e3a.svg'}
                        alt="alt text"
                    />
                    <img
                        className={partnersSectionStyles.partnerLogo}
                        src={'/assets/76b5fab8011fb7b1ae884bd69fab5415.svg'}
                        alt="alt text"
                    />
                </div>
            </div>
        </section>
    );
}

export default renderPartnersSection;
