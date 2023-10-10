import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { AiOutlineGlobal, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import Modal from './modal/Modal';

type Props = {};

const cx = classNames.bind(styles);

function Menu({}: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={cx('container')}>
      <div className={cx('global')} onClick={openModal}>
        <AiOutlineGlobal />
      </div>
      <div className={cx('userMenu')}>
        <AiOutlineMenu />
        <AiOutlineUser />
      </div>

      <Modal isOpen={modalOpen} close={closeModal} />
    </div>
  );
}

export default Menu;
