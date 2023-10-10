import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface ModalProps {
  isOpen: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, close }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('한국어');

  if (!isOpen) {
    return null;
  }

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const languageOptions = [
    { language: '한국어', region: 'Korea' },
    { language: 'English', region: 'World' },
  ];

  return (
    <div className={cx('container')}>
      <div className={cx('modalContent')}>
        <button className={cx('button')} onClick={close}>
          X
        </button>
        <p className={cx('language')}>언어와 지역</p>
        <hr />
        <h2>언어와 지역을 선택하세요</h2>

        <div className={cx('languageOptionsContainer')}>
          {languageOptions.map(({ language, region }) => (
            <div
              key={language}
              className={cx('languageOption', { selected: language === selectedLanguage })}
              onClick={() => handleSelectLanguage(language)}>
              <div className={cx('selectedLanguage')}>{language}</div>
              <div className={cx('region')}>{region}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
