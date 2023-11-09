import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './AfterLoginDropdown.module.scss';
import { useDispatch } from 'react-redux';
import { logOut } from '@/redux/features/authSlice';
import { useAppSelector } from '@/redux/store';

type DropdownProps = {
  close: () => void;
};

const cx = classNames.bind(styles);

const Dropdown: React.FC<DropdownProps> = ({ close }) => {
  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const email = useAppSelector((state) => state.authReducer.value.email);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [close]);

  const handleLogOutClick = async () => {
    dispatch(logOut());
  };

  return (
    <div className={cx('container')} ref={dropdownRef}>
      {email && (
        <>
          <div className={cx('item')}>메시지</div>
          <div className={cx('item')}>알림</div>
          <div className={cx('item')}>맛집</div>
          <div className={cx('item')}>위시리스트</div>
          <hr className={cx('separator')} />
        </>
      )}
      <div className={cx('item')}>도움말 센터</div>
      {email && (
        <div className={cx('item')} onClick={handleLogOutClick}>
          로그아웃
        </div>
      )}
    </div>
  );
};

export default Dropdown;
