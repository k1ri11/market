import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import RenderOverviewSection from './overviewSection';
import renderSpecificationSection from './specificationSection';

import styles from './index.module.scss';
import RenderHeaderSection from "../Header/headerSection";
import renderBottomSection from "../Footer/bottomSection";

function DetailsPage(props) {
  return (
    <main className={cn(styles.productPage, props.className, 'details-page')}>
      {RenderHeaderSection(props)}
      {RenderOverviewSection(props)}
      {renderSpecificationSection(props)}
      {renderBottomSection(props)}
    </main>
  );
}

DetailsPage.propTypes = {
  className: PropTypes.string
};

export default DetailsPage;
