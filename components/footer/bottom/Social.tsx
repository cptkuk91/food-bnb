import React from 'react';
import classNames from 'classnames/bind';
import styles from './Social.module.scss';
import { AiOutlineGlobal } from 'react-icons/ai';
import { Insta } from '../../../assets/socialMedia/index';

type Props = {};

const cx = classNames.bind(styles);

function Social({}: Props) {
  return (
    <div className={cx('container')}>
      <div className={cx('language')}>
        <AiOutlineGlobal />
        {/* 상태 관리를 활용해서 현재 언어 상태를 설정해야 합니다. */}
        <span>한국어 (KR)</span>
      </div>

      <div className={cx('socialMedia')}>
        {/* TODO: 세현님한테 이미지 처리 방법 물어보기, assets에서 index.js 활용하는 거 */}
        <img src="/images/social/facebook.png" alt="페북" className={cx('image')} />
        <img src="/images/social/twitter.png" alt="트위터" className={cx('image')} />
        <img src="/images/social/instagram.png" alt="인스타" className={cx('image')} />
      </div>
    </div>
  );
}

export default Social;
