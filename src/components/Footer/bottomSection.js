import React from 'react';
import cn from 'classnames';

import bottomSectionStyles from './bottomSection.module.scss';

function renderBottomSection(props) {
  return (
    <section className={bottomSectionStyles.bottomSection}>
      {/* Site Footer content */}

      <div className={bottomSectionStyles.footerWrapper}>
        {/* Site Footer content */}

        <div className={bottomSectionStyles.footerLinksWrapper}>
          {/* Footer links organized in columns */}

          <div className={bottomSectionStyles.contactColumn}>
            <img
                className={bottomSectionStyles.supportIcon}
                src={'/assets/439946e673dba43dd4bc99e44a5b1189.svg'}
                alt="alt text"
            />
            <p className={bottomSectionStyles.supportText}>
              Got question? Contact us 24/7
            </p>
            <p className={bottomSectionStyles.supportText}>
              8(800)-555-35-35
            </p>
          </div>

          <div className={bottomSectionStyles.companyColumn}>
            <p className={bottomSectionStyles.companyTitle}>Company</p>
            <a className={bottomSectionStyles.info26}>About company</a>
            <a className={bottomSectionStyles.info261}>Our team</a>
            <a className={bottomSectionStyles.info261}>Careers</a>
            <a className={bottomSectionStyles.info262}>Contact us</a>
            <a className={bottomSectionStyles.info261}>News</a>
          </div>

          <div className={bottomSectionStyles.companyColumn}>
            <p className={bottomSectionStyles.companyTitle}>Account</p>
            <a className={bottomSectionStyles.info26}>Your account</a>
            <a className={bottomSectionStyles.info261}>Shipping rates & policies</a>
            <a className={bottomSectionStyles.info261}>Refunds & replacements</a>
            <a className={bottomSectionStyles.info262}>Delivery info</a>
            <a className={bottomSectionStyles.info261}>Order tracking</a>
            <a className={bottomSectionStyles.info261}>Taxes & fees</a>
          </div>

          <div className={bottomSectionStyles.companyColumn}>
            <p className={bottomSectionStyles.companyTitle}>Customer service</p>
            <a className={bottomSectionStyles.info26}>Payment methods</a>
            <a className={bottomSectionStyles.info261}>Product returns</a>
            <a className={bottomSectionStyles.info261}>Support center</a>
            <a className={bottomSectionStyles.info262}>Shipping</a>
            <a className={bottomSectionStyles.info261}>Term and conditions</a>
          </div>
        </div>

        <div className={bottomSectionStyles.footerBottom}>
          <div className={bottomSectionStyles.copyrightBox_box}>
            <span className={bottomSectionStyles.copyrightBox}>
              <span className={bottomSectionStyles.copyrightBox_span0}>
                © All rights reserved. {' '}
              </span>
              <span className={bottomSectionStyles.copyrightBox_span1}>
                 Created by k1ri11
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderBottomSection;
