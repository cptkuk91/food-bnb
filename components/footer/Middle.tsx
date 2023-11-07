import React from 'react';
import classNames from 'classnames/bind';
import styles from './Middle.module.scss';
import Tab from './middle/Tab';

type Props = {};

const cx = classNames.bind(styles);

function Middle({}: Props) {
  return (
    <div className={cx('container')}>
      <Tab />
      <hr className={cx('line')} />
    </div>
  );
}

export default Middle;
