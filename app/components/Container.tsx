'use client';

import classNames from 'classnames/bind';

import styles from './Container.module.scss';

const cx = classNames.bind(styles);

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={cx('container')}>{children}</div>;
};

export default Container;
