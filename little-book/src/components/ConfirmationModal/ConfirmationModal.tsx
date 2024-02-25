import React from 'react'
import Button from '../Button/Buttton';
import styles from './ConfirmationModal.module.scss'
import { useSelector } from 'react-redux';
import Overlay from '../Overlay/Overlay';

type confirmationModalProps= {
    onCloseModal: any,
    closeModal: any,
}

const ConfirmationModal = (props: confirmationModalProps) => {
    const {onCloseModal, closeModal} = props;
    const isDarkTheme = useSelector((state:any) => state.theme.isDarkTheme);
  return (
    <>
        <div className={`${styles.overlay}`}></div>
        <Overlay zindex={3} />
        <div className={`${styles.modalWrapper} ${isDarkTheme? styles.darkTheme: ''}`}>
            <p>You're in the middle of editing blog are you sure do you want to leave?</p>
            <div className={styles.actions}>
                <Button 
                    label='YES'
                    type='primary'
                    onClick={onCloseModal}
                />
                <Button 
                    label='NO'
                    type='secondary'
                    onClick={closeModal}
                />
            </div>

        </div>
    </>
  )
}

export default ConfirmationModal;