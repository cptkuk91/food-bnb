import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './WhereDropdown.module.scss';

type DropdownProps = {
  close: () => void;
  setLocation: (location: string) => void;
};

const cities = [
  { name: '서울', image: '/images/cities/seoul.png' },
  { name: '경기', image: '/images/cities/seongnam.jpeg' },
  { name: '인천', image: '/images/cities/incheon.jpeg' },
];

const cx = classNames.bind(styles);

const Dropdown: React.FC<DropdownProps> = ({ close, setLocation }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [close]);

  return (
    <div className={cx('container')} ref={dropdownRef}>
      <div className={cx('link')}>
        <div className={cx('item')}>지역으로 검색하기</div>
      </div>
      <div className={cx('grid')}>
        {cities.map((city, index) => (
          <div
            key={index}
            className={cx('cityItem')}
            onClick={() => {
              setLocation(city.name);
              close();
            }}>
            <img src={city.image} alt={city.name} className={cx('cityImage')} />
            <div className={cx('cityName')}>{city.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
