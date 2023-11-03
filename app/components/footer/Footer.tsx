import React from 'react';

type Props = {};

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

const cx = classNames.bind(styles);

function Footer({}: Props) {
  return (
    <div className={cx('container')}>
      {/* Top */}
      <Top />
      <hr className={cx('line')} />
      {/* Middle */}
      <Middle />
      {/* Bottom */}
      <Bottom />
    </div>
  );
}

export default Footer;
