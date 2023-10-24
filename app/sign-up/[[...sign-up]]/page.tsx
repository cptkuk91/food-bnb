import { SignUp } from '@clerk/nextjs';
import classNames from 'classnames/bind';
import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Page() {
  return (
    <div className={cx('container')}>
      <SignUp />
    </div>
  );
}
