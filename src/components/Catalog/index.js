import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';
import RenderHeaderSection from "../Header/headerSection";
import renderBottomSection from "../Footer/bottomSection";
import RenderTopSection from "./topSection";
import RenderSidebar from "./sidebar";
import renderProductList from "./productList";
import RenderPagination from "./pagination";


function Catalog(props) {
    return (
        <div className={cn(styles.root, props.className, 'catalog')}>
            {RenderHeaderSection(props)}
            <div className={styles.flex_col}>
                {RenderTopSection(props)}
                <div className={styles.flex_row3}>
                    {RenderSidebar(props)}
                    {renderProductList(props)}
                </div>
                {RenderPagination(props)}
            </div>
            {renderBottomSection(props)}
        </div>
    );
}

Catalog.propTypes = {
    className: PropTypes.string
};

export default Catalog;
