'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SiginIn.module.scss';
import { useRouter } from 'next/navigation';

type Props = {};

const cx = classNames.bind(styles);

function SignIn({}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    try {
      const response = await fetch('https://test-api.nineright.dev/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data) {
        router.push('/');
      } else {
        console.log('로그인 실패');
      }
    } catch (error) {
      console.error('Error:', error);
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

        <div className={cx('signUpBox')}>
          <div className={cx('needAccount')}>Need an account?</div>
          <button className={cx('signUpText')} onClick={handleSignUpClick}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
