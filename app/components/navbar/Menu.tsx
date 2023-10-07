import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { AiOutlineGlobal, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';

type Props = {};

const cx = classNames.bind(styles);

function Menu({}: Props) {
  return (
    <div className={cx('container')}>
      <span>당신의 공간을 에어비앤비하세요</span>
      <div className={cx('global')}>
        <AiOutlineGlobal />
      </div>
      <div className={cx('userMenu')}>
        <AiOutlineMenu />
        <AiOutlineUser />
      </div>
    </div>
  );
}

export default Menu;
