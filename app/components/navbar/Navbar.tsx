'use client';

import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

type Props = {};

const cx = classNames.bind(styles);

const Navbar = (props: Props) => {
  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <Logo />
        {/* Search */}
        <Search />
        {/* Menu */}
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
