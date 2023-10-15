import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';

type Props = {};

const cx = classNames.bind(styles);

function Search({}: Props) {
  return (
    <div className={cx('container')}>
      {/* 하이픈 빼고, camelCase로 모두 변경하고, ex.. buttons로 변경하기*/}
      <div className={cx('button-container')}>
        <div>어디든지</div>
        {/* bar-color 대신 bar로 충분 */}
        <span className={cx('bar-color')}>|</span>
        <div>언제든 일주일</div>
        <span className={cx('bar-color')}>|</span>
        {/* 애초에 components가 Search기 때문에, 23번이 searchIcon이고, 21번줄을 search로 해도 충분하다.*/}
        <div className={cx('search-icon')}>
          <span>게스트 추가</span>
          <FaSearch className={cx('searchIconStyle')} />
        </div>
      </div>
    </div>
  );
}

export default Search;
