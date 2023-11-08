import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { AiOutlineGlobal, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import Modal from './modal/Modal';
import Dropdown from './dropdown/Dropdown';
import AfterLoginDropdown from './dropdown/AfterLoginDropdown';
import { useAppSelector } from '@/redux/store';

type Props = {};

const cx = classNames.bind(styles);

function Menu({}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // ts 사용하면서 useSelecttor 사용을 위해서, useAppSelector로 확장해서 사용중입니다.
  // 해당 내용은 store 맨 아랫줄에서 확인할 수 있다.
  const email = useAppSelector((state) => state.authReducer.value.email);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('language')} onClick={openModal}>
        <AiOutlineGlobal />
      </div>
      <div className={cx('menu')} onClick={toggleDropdown}>
        {/* TODO: 해당 페이지 로그인 후 처리하겠습니다. */}
        {email ? (
          <>
            <AiOutlineMenu />
            {dropdownOpen && <AfterLoginDropdown close={toggleDropdown} />}
            <AiOutlineUser />
          </>
        ) : (
          <>
            <AiOutlineMenu />
            {dropdownOpen && <Dropdown close={toggleDropdown} />}
            <AiOutlineUser />
          </>
        )}
      </div>

      <Modal isOpen={modalOpen} close={closeModal} />
    </div>
  );
}

export default Menu;
