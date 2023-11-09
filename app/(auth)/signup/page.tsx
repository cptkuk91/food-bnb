'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';
import styles from './page.module.scss';

type Props = {};

const cx = classNames.bind(styles);

function SignUp({}: Props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [nickname, setNickname] = useState('');

  // TODO: isSigningUp 관련해서 연구해보기
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setErrorMessage('');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setErrorMessage('');
  };

  const handleRepeatPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(event.target.value);
    setErrorMessage('');
  };

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
    setErrorMessage('');
  };

  const handleSignUpClick = async () => {
    setIsButtonClicked(true);
    if (!email || !password || !repeatPassword || !nickname) {
      setErrorMessage('모든 필드는 필수입니다.');
      return;
    }

    if (password !== repeatPassword) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsSigningUp(true);

    try {
      const response = await fetch('http://localhost:3345/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname, password, email }),
      });

      if (response.status === 201) {
        router.push('/login');
      } else if (response.status === 409) {
        const data = await response.json();
        console.log(data);
        setErrorMessage(data.error);
      }
    } catch (error) {
      console.error('회원가입 요청 중 에러 발생:', error);
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('mainBox')}>
        <h1 className={cx('title')}>Create Account</h1>
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

        <div className={cx('passwordCheckBox')}>
          <input
            className={cx('passwordCheckInput')}
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
          />
        </div>

        <div className={cx('nameBox')}>
          <input
            className={cx('nameInput')}
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={handleNicknameChange}
          />
        </div>

        <div className={cx('signUpBox')}>
          <button className={cx('signUpText')} onClick={handleSignUpClick}>
            회원 가입
          </button>
        </div>
        {errorMessage && <div className={cx('errorText')}>{errorMessage}</div>}
      </div>
    </div>
  );
}

export default SignUp;
