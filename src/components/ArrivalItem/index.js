import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './index.module.scss';

function ArrivalItem(props) {
  return (
    <div className={cn(styles.content_box, props.className, 'arrival-item')}>
      <div className={styles.unnamed}>
        <img className={styles.image} src={props.image} alt="alt text" />

        <div className={styles.unnamed1}>
          <div className={styles.unnamed2}>
            <img
              className={styles.image20}
              src={'/assets/359c3cd0a08d392c42b66811dd1669bb.svg'}
              alt="alt text"
            />
            <div className={styles.reviewCount}>{props.reviewCount}</div>
          </div>

          <div className={styles.name}>{props.name}</div>
          <div className={styles.price}>{props.price}</div>
        </div>
      </div>
    </div>
  );
}

ArrivalItem.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  reviewCount: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default ArrivalItem;
