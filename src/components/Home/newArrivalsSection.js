import React from 'react';
import cn from 'classnames';
import ArrivalItem from 'components/ArrivalItem';

import newArrivalsSectionStyles from './newArrivalsSection.module.scss';

function renderNewArrivalsSection(props) {
  return (
    <section className={newArrivalsSectionStyles.newArrivalsSection}>
      {/* Product showcase area displaying latest arrivals */}

      <div className={newArrivalsSectionStyles.showcaseContainer}>
        {/* New products display grid */}
        <p className={newArrivalsSectionStyles.sectionTitle}>New arrivals</p>

        <article className={newArrivalsSectionStyles.productDisplay}>
          {/* Product gallery grid layout */}
          <img
            className={newArrivalsSectionStyles.mainProductImg}
            src={'/assets/02fe9783917c5af2d7fb233c616ddb2f.png'}
            alt="alt text"
          />

          <div className={newArrivalsSectionStyles.productGrid}>
            {/* Grid layout for product items */}

            <div className={newArrivalsSectionStyles.productRow}>
              <ArrivalItem
                className={newArrivalsSectionStyles.productCard}
                image={'/assets/watch.png'}
                name={`Smart Watch Series 7, White`}
                price={`$449.00`}
                reviewCount={`45`}
              />
              <ArrivalItem
                className={newArrivalsSectionStyles.productCard1}
                image={'/assets/watch.png'}
                name={`Smart Watch Series 7, White`}
                price={`$449.00`}
                reviewCount={`45`}
              />
            </div>

            <div className={newArrivalsSectionStyles.productRow1}>
              <ArrivalItem
                className={newArrivalsSectionStyles.productCard2}
                image={'/assets/watch.png'}
                name={`Smart Watch Series 7, White`}
                price={`$449.00`}
                reviewCount={`45`}
              />
              <ArrivalItem
                className={newArrivalsSectionStyles.productCard2}
                image={'/assets/watch.png'}
                name={`Smart Watch Series 7, White`}
                price={`$449.00`}
                reviewCount={`45`}
              />
            </div>

            <div className={newArrivalsSectionStyles.productRow2}>
              <ArrivalItem
                className={newArrivalsSectionStyles.productCard2}
                image={'/assets/watch.png'}
                name={`Smart Watch Series 7, White`}
                price={`$449.00`}
                reviewCount={`45`}
              />
              <ArrivalItem
                className={newArrivalsSectionStyles.productCard2}
                image={'/assets/watch.png'}
                name={`Smart Watch Series 7, White`}
                price={`$449.00`}
                reviewCount={`45`}
              />
            </div>

            <div className={newArrivalsSectionStyles.productRow2}>
              <ArrivalItem
                className={newArrivalsSectionStyles.productCard2}
                image={'/assets/watch.png'}
                name={`Smart Watch Series 7, White`}
                price={`$449.00`}
                reviewCount={`45`}
              />
              <ArrivalItem
                className={newArrivalsSectionStyles.productCard2}
                image={'/assets/watch.png'}
                name={`Smart Watch Series 7, White`}
                price={`$449.00`}
                reviewCount={`45`}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default renderNewArrivalsSection;
