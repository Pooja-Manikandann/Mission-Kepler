import React, { useEffect, useState } from 'react';
import { APP_PATH, FORM_CONSTANTS, VALIDATIONS } from '../../../constants';
import styles from './LoginForm.module.scss';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { LOGIN } from '../../../constants/buttons.constants';
import { useForm } from 'react-hook-form';
import { every } from 'lodash';
import { loginService } from '../../../services/loginServices';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

/**
 * @description function to render login form and let user to perform login functionality
 * @returns login form and associated login functionalities
 */
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { EMAIL, PASSWORD } = FORM_CONSTANTS.LOGIN_FORM.FORM_LABELS;
    const { FORM_ATTRIBUTES } = FORM_CONSTANTS.LOGIN_FORM;
    const { VARIANT, BORDER, COLOR } = FORM_CONSTANTS;
    const { REGEX, MESSAGE } = VALIDATIONS.EMAIL;
    const [disableButton, setDisableButton] = useState<boolean>(true);
    const values = watch(FORM_ATTRIBUTES);

    const { setAuth } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        every(values) ? setDisableButton(false) : setDisableButton(true);
    }, [values]);

    /**
     * @description - function to invoke login service
     * @param data - the form data
     */
    const handleFormSubmit = async (data: object) => {
        const loginResponse = await loginService({ ...data });
        if (loginResponse) {
            setAuth();
            navigate(APP_PATH.HOME_PATH.PATH);
        }
    };

    return (
        <>
            <form
                data-testid='form'
                className={styles.loginFormWrapper}
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <Input
                    datatestid='email'
                    label={EMAIL.LABEL}
                    name={EMAIL.NAME}
                    type={EMAIL.TYPE}
                    register={register(EMAIL.NAME, {
                        pattern: { value: REGEX, message: MESSAGE },
                    })}
                    variant={VARIANT.COLUMN}
                    border={BORDER.BOTTOM}
                    error={errors}
                />
                <Input
                    datatestid='password'
                    label={PASSWORD.LABEL}
                    name={PASSWORD.NAME}
                    type={PASSWORD.TYPE}
                    register={register(PASSWORD.NAME)}
                    variant={VARIANT.COLUMN}
                    border={BORDER.BOTTOM}
                />
                <Button
                    label={LOGIN}
                    disabled={disableButton}
                    color={COLOR.YELLOW}
                />
            </form>
        </>
    );
};

export default LoginForm;
