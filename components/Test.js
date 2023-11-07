import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Test.module.scss';

const cx = classNames.bind(styles);

const Test = () => {
  const [isHover, setHover] = useState();

  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <button className={cx(['button', { isHover }])}>버튼</button>
      </div>
    </div>
  );
};

export default Test;
