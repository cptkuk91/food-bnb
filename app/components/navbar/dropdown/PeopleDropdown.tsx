import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './PeopleDropdown.module.scss';

type DropdownProps = {
  close: () => void;
  setPeople: React.Dispatch<React.SetStateAction<string>>;
};

const cx = classNames.bind(styles);

function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 2) + '..';
  }
  return text;
}

const Dropdown: React.FC<DropdownProps> = ({ close, setPeople }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [peopleCount, setPeopleCount] = useState<number>(0);
  const [animalCount, setAnimalCount] = useState<number>(0);

  useEffect(() => {
    if (animalCount >= 1 && peopleCount < 1) {
      setPeopleCount(1);
    }
    if (peopleCount >= 1) {
      let displayText = `성인 ${peopleCount}명`;
      if (animalCount >= 1) {
        displayText += `, 반려 ${animalCount}마리`;
      }
      setPeople(truncateText(displayText, 12));
    }
  }, [peopleCount, animalCount, setPeople]);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [close]);

  const decreasePeopleCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (peopleCount > 1) {
      e.stopPropagation();
      setPeopleCount(peopleCount - 1);
    }
  };

  const increasePeopleCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPeopleCount(peopleCount + 1);
  };

  const decreaseAnimalCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (animalCount > 1) {
      e.stopPropagation();
      setAnimalCount(animalCount - 1);
    }
  };

  const increaseAnimalCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setAnimalCount(animalCount + 1);
  };

  return (
    <div className={cx('container')} ref={dropdownRef}>
      <div className={cx('link')}>인원수로 검색하기</div>
      <div className={cx('adult')}>
        <div className={cx('people')}>
          성인
          <span className={cx('ageInfo')}>13세 이상</span>
        </div>
        <div className={cx('math')}>
          <button className={cx('button')} onClick={decreasePeopleCount}>
            -
          </button>
          <span className={cx('count')}>{peopleCount}</span>
          <button className={cx('button')} onClick={increasePeopleCount}>
            +
          </button>
        </div>
      </div>
      <hr className={cx('separator')} />
      <div className={cx('adult')}>
        <div className={cx('people')}>
          반려동물
          <span className={cx('ageInfo')}>동물을 동반하시나요?</span>
        </div>
        <div className={cx('math')}>
          <button className={cx('button')} onClick={decreaseAnimalCount}>
            -
          </button>
          <span className={cx('count')}>{animalCount}</span>
          <button className={cx('button')} onClick={increaseAnimalCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
