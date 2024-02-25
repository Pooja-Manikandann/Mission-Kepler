import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './CustomModal.module.scss';
import { modalAction } from 'src/store/modalSlice';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import Overlay from '../Overlay/Overlay';

const CustomModal = () => {
    const modalProperties = useSelector((state: any) => state.modal.modalProperties);
    const dispatch = useDispatch();
    const [showConfirm, setShowConfirmation] = useState(false);
    const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);
    
    const closeModal = () => {
        modalProperties.showConfirmation? setShowConfirmation(true) : dispatch(modalAction.resetModalProprties());
    }

    const onCloseModal = () => {
        setShowConfirmation(false);
        dispatch(modalAction.resetModalProprties());
    }

    const closeConfirmationModal = () => {
        setShowConfirmation(false);
    }

    return (
        modalProperties.content ? (
            <>
        <Overlay handleOverlayClick={closeModal} showCursor={true} />
        <div className={`${styles.overlayModalWrapper} ${isDarkTheme? styles.darkTheme: ''}`}>
            <div className={styles.overlayHeader}>{modalProperties.header}</div>
            <div>{modalProperties.content}</div>
            {modalProperties.footer? <div>{modalProperties.footer}</div>:<></>}
        </div>
        {showConfirm? <ConfirmationModal onCloseModal={onCloseModal} closeModal={closeConfirmationModal} />: null}
            </>): <></>
    )
}

export default CustomModal;