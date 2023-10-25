import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';
import WhereDropdown from './dropdown/WhereDropdown';

type Props = {};

const cx = classNames.bind(styles);

function Search({}: Props) {
  const [location, setLocation] = useState('어디든지');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('button')}>
        <div onClick={() => setDropdownOpen(!dropdownOpen)}>
          {location}
          {dropdownOpen && <WhereDropdown close={toggleDropdown} setLocation={setLocation} />}
        </div>
        <span className={cx('bar')}>|</span>
        <div>얼마일지?</div>
        <span className={cx('bar')}>|</span>
        <div className={cx('searchIcon')}>
          <span>몇명인지</span>
          <FaSearch className={cx('searchIconStyle')} />
        </div>
      </div>
    </div>
  );
}

export default Search;
