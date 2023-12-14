import { useEffect, useState } from 'react';
import {
    APP_CONSTANTS,
    FORM_CONSTANTS,
    SMALL_VARIANT,
    VALIDATIONS,
    EXTRA_SMALL_VARIANT,
} from '../../constants';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Lottery.module.scss';
import { useForm } from 'react-hook-form';
import ErrorFallbackUI from '../ErrorFallbackUI/ErrorFallbackUI';
import React from 'react';
import { checkForPrize } from '../../services/LotteryService';
import { ErrorBoundary } from 'react-error-boundary';

/**
 * @description function to render lottery section contains form and result message
 * @returns return lottery section component
 */
const Lottery = () => {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [lotteryResult, setLotteryResult] = useState<any>('');

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
    const checkForLottery = async (data: any) => {
        const response = await checkForPrize({ ...data });
        if (response.data.length) setLotteryResult(response.data);
        else setLotteryResult(null);
    };

    try {
        return (
            <>
                <div className={styles.lotterySection}>
                    <ErrorBoundary
                        FallbackComponent={() => (
                            <ErrorFallbackUI errorMessage={ERROR_MESSAGE} />
                        )}
                    >
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
                                    size={EXTRA_SMALL_VARIANT}
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
