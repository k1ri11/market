import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import RenderHeaderSection from '../Header/headerSection';
import renderFeaturesSection from './featuresSection';
import renderNewArrivalsSection from './newArrivalsSection';
import renderPopularItemsSection from './popularItemsSection';
import renderPartnersSection from './partnersSection';
import renderBottomSection from '../Footer/bottomSection';

import styles from './index.module.scss';

function Home(props) {
  return (
    <main className={cn(styles.mainContent, props.className, 'home')}>
      {/* Main content wrapper */}
      {RenderHeaderSection(props)}
      {renderFeaturesSection(props)}
      {renderNewArrivalsSection(props)}
      {renderPopularItemsSection(props)}
      {renderPartnersSection(props)}
      {renderBottomSection(props)}
    </main>
  );
}

Home.propTypes = {
  className: PropTypes.string
};

export default Home;
