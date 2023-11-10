'use client';

import React from 'react';
import classNames from 'classnames/bind';

import styles from './Main.module.scss';
import Filter from './Filter';
import Card from './Card';

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div className={cx('container')}>
      <Filter />
      <div className={cx('cards')}>
        {new Array(10).fill(0).map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
