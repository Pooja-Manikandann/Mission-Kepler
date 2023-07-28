import {forwardRef, useImperativeHandle, useRef} from 'react'
import styles from './Input.module.scss'

const Input = ((props) => {
  const {type, value, placeholder, inputReference, bindInput, onKeyDown} = props;
//   const inputReference = useRef(null);
//   useImperativeHandle(ref, ()=>({
//       focusInputField(){
//         inputReference.current.focus();
//     },
//   }))
  return (
    <input type={type} className={styles.searchInputBox} value={value} placeholder={placeholder} ref={inputReference} {...bindInput} onKeyDown={onKeyDown}/>
  )
})

export default Input