import React from 'react'
import styles from './Overlay.module.scss';

type overlayProps = {
    handleOverlayClick: any,
    variant: string,
    showCursor: boolean,
    zindex: number,
}

const Overlay = (props:overlayProps) => {
    const { handleOverlayClick, variant, zindex, showCursor } = props;
  return (
    <div data-testid='overlay' className={`${styles.overlay} ${styles[variant]} ${styles['zindex'+zindex]} ${showCursor? styles.cursorPointer: ''}`} onClick={handleOverlayClick}></div>
  )
}


Overlay.defaultProps = {
    handleOverlayClick: () => { },
    variant: '',
    showCursor: true,
    zindex: 2
}

export default Overlay