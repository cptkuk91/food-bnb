import React from 'react';

type Props = {};

import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Top from './Top';

const cx = classNames.bind(styles);

function Footer({}: Props) {
  return (
    <div className={cx('container')}>
      {/* Top */}
      <Top />
      {/* Middle */}

      {/* Bottom */}
    </div>
  );
}

export default Footer;
