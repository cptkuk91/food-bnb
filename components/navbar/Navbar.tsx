'use client';

import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import ReduxProvider from '@/redux/provider';

type Props = {};

const cx = classNames.bind(styles);

const Navbar = (props: Props) => {
  return (
    <ReduxProvider>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <Logo />
          {/* Search */}
          <Search />
          {/* Menu */}
          <Menu />
        </div>
      </div>
    </ReduxProvider>
  );
};

export default Navbar;
