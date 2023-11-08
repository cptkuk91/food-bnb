'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';
import { ImWarning } from 'react-icons/im';
import { useDispatch } from 'react-redux';

import { logIn } from '@/redux/features/authSlice';
import { AppDispatch } from '@/redux/store';

type Props = {};

const cx = classNames.bind(styles);

function SignIn({}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    try {
      const response = await fetch('http://localhost:3345/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        dispatch(logIn(data.user));
        router.push('/');
      } else if (response.status === 400) {
        const data = await response.json();
        setLoginError(data.message);
      } else {
        console.log('서버 오류');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생', error);
    }
  };

  const handleSignUpClick = () => {
    router.push('/sign-up');
  };

  return (
    <div className={cx('container')}>
      <div className={cx('mainBox')}>
        <h1 className={cx('title')}>Welcome !</h1>
        <div className={cx('inputBox')}>
          <input className={cx('input')} type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </div>

        <div className={cx('passwordInputBox')}>
          <input
            className={cx('passwordInput')}
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className={cx('loginBox')}>
          <button className={cx('loginText')} onClick={handleLoginClick}>
            LOGIN
          </button>
        </div>
        {loginError && (
          <div className={cx('loginError')}>
            <ImWarning className={cx('icon')} /> {loginError}
          </div>
        )}

        <div className={cx('signUpBox')}>
          <div className={cx('needAccount')}>아직 Food-BNB 회원이 아니신가요?</div>
          <button className={cx('signUpText')} onClick={handleSignUpClick}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
