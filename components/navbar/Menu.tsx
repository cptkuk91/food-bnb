import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { AiOutlineGlobal, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import Modal from './modal/Modal';
import Dropdown from './dropdown/Dropdown';
import AfterLoginDropdown from './dropdown/AfterLoginDropdown';

type Props = {};

const cx = classNames.bind(styles);

function Menu({}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <AiOutlineMenu />
        {dropdownOpen && <AfterLoginDropdown close={toggleDropdown} />}
        <AiOutlineUser />
        {dropdownOpen && <Dropdown close={toggleDropdown} />}
      </div>

      <Modal isOpen={modalOpen} close={closeModal} />
    </div>
  );
}

export default Menu;
