import React from 'react';
import classNames from 'classnames/bind';
import styles from './Top.module.scss';
import { Tab } from './top/Tab';

type Props = {};

const cx = classNames.bind(styles);

function Top({}: Props) {
  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>다음 맛집을 위한 추천 여행지</h2>
      <Tab />
    </div>
  );
}

export default Top;
