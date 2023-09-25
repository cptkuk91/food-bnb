import React from 'react';
import classNames from 'classnames/bind';

import styles from './Test.module.scss';

const cx = classNames.bind(styles);

const Test = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <button className={cx('button')}>버튼</button>
      </div>
    </div>
  );
};

export default Test;
