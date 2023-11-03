import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { AiOutlineGlobal, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import Modal from './modal/Modal';
import Dropdown from './dropdown/Dropdown';
import AfterLoginDropdown from './dropdown/AfterLoginDropdown';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

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
        <AiOutlineMenu />
        <SignedIn>
          <UserButton />
          {dropdownOpen && <AfterLoginDropdown close={toggleDropdown} />}
        </SignedIn>
        <SignedOut>
          <AiOutlineUser />
          {dropdownOpen && <Dropdown close={toggleDropdown} />}
        </SignedOut>
      </div>

      <Modal isOpen={modalOpen} close={closeModal} />
    </div>
  );
}

export default Menu;
