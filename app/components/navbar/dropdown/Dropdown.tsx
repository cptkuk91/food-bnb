import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';
import Link from 'next/link';

type DropdownProps = {
  close: () => void;
};

const cx = classNames.bind(styles);

const Dropdown: React.FC<DropdownProps> = ({ close }) => {
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
        <Link href="/sign-in" className={cx('item')}>
          로그인
        </Link>
        <Link href="/sign-up" className={cx('item')}>
          회원 가입
        </Link>
      </div>
      <hr className={cx('separator')} />
      <div className={cx('item')}>도움말 센터</div>
    </div>
  );
};

export default Dropdown;
