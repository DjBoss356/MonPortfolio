import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import style from "./Popup.module.css"
import close from "../../../assets/image/fermer.png"

const Popup = ({ isOpen, onClose, children }) => {

    return (
      <Modal className={style.container} isOpen={isOpen} onRequestClose={onClose}  shouldCloseOnOverlayClick={false}>
        <img src={close} onClick={onClose} className={style.imageClose}/>
        {children}
      </Modal>
    );
  };

export default Popup; 