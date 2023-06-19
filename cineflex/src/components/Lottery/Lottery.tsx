import { useEffect, useState } from 'react';
import { FORM_CONSTANTS, SMALL_VARIANT } from '../../constants';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Lottery.module.scss';
import { useForm } from 'react-hook-form';

/**
 * @description function to render lottery section contains form and result message
 * @returns return lottery section component
 */
const Lottery = () => {
  const [disabled, setDisabled] = useState(true);

  const { LABEL, BUTTON_LABEL, PLACE_HOLDER, NAME, TYPE } = FORM_CONSTANTS.LOTTERY_FORM;
  const { VARIANT, THEME, COLOR } = FORM_CONSTANTS;
  
  const { register, handleSubmit, watch } = useForm();
  const value = watch(NAME);

  useEffect(()=>{
    if(value && value.length === 10) setDisabled(false);
  },[value])

  /**
   * @description function to invoke lottery check service
   */
  const checkForLottery = () => {
    
  }

  return (
    <div className={styles.lotterySection}>
      <form onSubmit={handleSubmit(checkForLottery)}className={styles.lotteryForm} >
        <Input label={LABEL} type={TYPE} register={register} name={NAME} variant={VARIANT.ROW} theme={THEME.WHITE} placeHolder={PLACE_HOLDER} />
        <Button size={SMALL_VARIANT} disabled={disabled} label={BUTTON_LABEL} color={COLOR.RED} />
      </form>
    </div>
  )
}

export default Lottery;