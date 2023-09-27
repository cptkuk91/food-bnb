'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

const cx = classNames.bind(styles);

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      alt="Logo"
      className={cx('Logo')}
      height="60"
      width="100"
      src="/images/airbnb-logo2.png"
    />
  );
};

export default Logo;
