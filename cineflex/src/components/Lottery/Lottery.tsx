import { useEffect, useState } from 'react';
import {
    APP_CONSTANTS,
    FORM_CONSTANTS,
    SMALL_VARIANT,
    VALIDATIONS,
} from '../../constants';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Lottery.module.scss';
import { useForm } from 'react-hook-form';
import ErrorFallbackUI from '../ErrorFallbackUI/ErrorFallbackUI';
import React from 'react';
import { checkForPrize } from '../../services/LotteryService';
import { ToastContainer, toast } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { errorMessageAtom } from '../../atoms/atom';

/**
 * @description function to render lottery section contains form and result message
 * @returns return lottery section component
 */
const Lottery = () => {
    const [disabled, setDisabled] = useState(true);
    const [lotteryResult, setLotteryResult] = useState<any>('');
    const setErrorMessage = useSetRecoilState(errorMessageAtom);

    const { LABEL, BUTTON_LABEL, PLACE_HOLDER, NAME, TYPE } =
        FORM_CONSTANTS.LOTTERY_FORM;
    const { VARIANT, THEME, COLOR } = FORM_CONSTANTS;
    const { ERROR_MESSAGE, SUCCESS_MESSAGE } = APP_CONSTANTS.LOTTERY;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const value = watch(NAME);
    const { REGEX, MESSAGE } = VALIDATIONS.MOBILE_NUMBER;

    /**
     * to disable and enable button based on input value
     */
    useEffect(() => {
        if (value && value.length === 10) setDisabled(false);
    }, [value]);

    /**
     * @description function to invoke lottery check service
     */
    const checkForLottery = async (data : any) => {
        const response = await checkForPrize({ ...data });
        if (response.data.length) setLotteryResult(response.data);
        else setLotteryResult(null);
        setErrorMessage(ERROR_MESSAGE);
    };

    try {
        return (
            <>
                <div className={styles.lotterySection}>
                    <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
                        {!lotteryResult.length ? (
                            <form
                                onSubmit={handleSubmit(checkForLottery)}
                                className={styles.lotteryForm}
                            >
                                <Input
                                    label={LABEL}
                                    type={TYPE}
                                    register={register(NAME, {
                                        pattern: { value: REGEX, message: MESSAGE },
                                    })}
                                    name={NAME}
                                    variant={VARIANT.ROW}
                                    theme={THEME.WHITE}
                                    placeHolder={PLACE_HOLDER}
                                    maxLength={10}
                                    error={errors}
                                />
                                <Button
                                    size={SMALL_VARIANT}
                                    disabled={disabled}
                                    label={BUTTON_LABEL}
                                    color={COLOR.RED}
                                />
                            </form>
                        ) : (
                            <p className={styles.successLotterySection}>
                                {SUCCESS_MESSAGE}
                            </p>
                        )}
                    </ErrorBoundary>
                </div>
            </>
        );
    } catch (error) {
        return (
            <div className={styles.lotterySection}>
                <ErrorFallbackUI />
            </div>
        );
    }
};

export default Lottery;
