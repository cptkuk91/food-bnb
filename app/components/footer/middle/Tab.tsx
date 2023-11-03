import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tab.module.scss';

type Props = {};

const cx = classNames.bind(styles);

const menuArr = [
  {
    name: '에어비앤비 지원',
    content: ['이태원', '홍대', '관악구'],
  },
  { name: '호스팅', content: ['경기', '경기2', '경기3'] },
  { name: '에어비앤비', content: ['인천', '인천1', '인천2'] },
];

function Tab({}: Props) {
  return (
    <div className={cx('container')}>
      {menuArr.map((el) => (
        <div>
          <div className={cx('submenu')}>{el.name}</div>
          <div className={cx('town')}>
            {el.content.map((item: string) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tab;
