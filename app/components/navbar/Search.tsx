import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';

type Props = {};

const cx = classNames.bind(styles);

function Search({}: Props) {
  return (
    <div className={cx('container')}>
      <div className={cx('button-container')}>
        <div>어디든지</div>
        <span className={cx('bar-color')}>|</span>
        <div>언제든 일주일</div>
        <span className={cx('bar-color')}>|</span>
        <div className={cx('search-icon')}>
          <span>게스트 추가</span>
          <FaSearch className={cx('searchIconStyle')} />
        </div>
      </div>
    </div>
  );
}

export default Search;
