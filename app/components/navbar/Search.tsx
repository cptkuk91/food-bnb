import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FaSearch } from 'react-icons/fa';
import WhereDropdown from './dropdown/WhereDropdown';
import PeopleDropdown from './dropdown/PeopleDropdown';

type Props = {};

const cx = classNames.bind(styles);

function Search({}: Props) {
  const [location, setLocation] = useState('어디든지');
  const [whereDropdownOpen, setWhereDropdownOpen] = useState(false);
  const [peopleDropdownOpen, setPeopleDropdownOpen] = useState(false);

  const [people, setPeople] = useState('몇명인지');

  const toggleWhereDropdown = () => {
    setWhereDropdownOpen(!whereDropdownOpen);
  };

  const togglePeopleDropdown = () => {
    setPeopleDropdownOpen(!peopleDropdownOpen);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('button')}>
        <div onClick={toggleWhereDropdown}>
          {location}
          {whereDropdownOpen && <WhereDropdown close={toggleWhereDropdown} setLocation={setLocation} />}
        </div>
        <span className={cx('bar')}>|</span>
        <div>얼마일지?</div>
        <span className={cx('bar')}>|</span>
        <div className={cx('searchIcon')} onClick={togglePeopleDropdown}>
          <span>{people}</span>
          {peopleDropdownOpen && <PeopleDropdown close={togglePeopleDropdown} setPeople={setPeople} />}
        </div>
        <FaSearch className={cx('searchIconStyle')} />
      </div>
    </div>
  );
}

export default Search;
