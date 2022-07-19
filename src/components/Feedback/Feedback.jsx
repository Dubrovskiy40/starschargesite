import React, {useEffect, useState} from 'react';
import style from './feedback.module.scss';
import SuccessMessage from "./SuccessMessage/SuccessMessage";
import Agreement from "./Agreement/Agreement";
import ModalWindow from "../ModalWindow/ModalWindow";
import AgreementText from './AgreementText/AgreementText';
import {CmError} from "./CmError/CmError";
import CmInput from "./CmInput/CmInput";

const Feedback = () => {
    const [openModalWindow, setOpenModalWindow] = useState(false); // модальное окно

    const [name, setName] = useState({isValid: true, value: ''});
    const [tel, setTel] = useState({isValid: true, value: ''});
    const [email, setEmail] = useState({isValid: true, value: ''});
    const [question, setQuestion] = useState({isValid: true, value: ''});

    const [successfullySent, setSuccessfullySent] = useState(true); // статус отправки формы
    const [showSuccessBlock, setShowSuccessBlock] = useState(false); // блок подтверждения отправки формы
    const [isReadAgreement, setIsReadAgreement] = useState(false); // прочитано ли соглашение
    const [errors, setErrors] = useState({
        nameError: '',
        telError: '',
        emailError: '',
        textareaError: ''
    }); // объект ошибок

    const regName = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
    const regTel = /\+7|8[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let questionTest = question.value.length > 10;

    function regValueTest(regExp, value) {
        if (!regExp.test(value)) {
            setSuccessfullySent(false);
            return false;
        } else {
            setSuccessfullySent(true);
            return regExp.test(value)
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        if (name.isValid && tel.isValid && email.isValid && question.isValid) {
            setShowSuccessBlock(true);
        } else setShowSuccessBlock(false);
    };

    const onChangeInput = (value, name) => {
        switch(name) {
            case 'inpName':
                let resultName = regValueTest(regName, value);
                setName( {isValid: !!resultName, value: value});
                setErrors({...errors, nameError: !resultName ? 'ошибка в имени' : ''});
                break;
            case 'inpTel':
                let resultTel = regValueTest(regTel, value);
                setTel({isValid: !!resultTel, value: value});
                setErrors({...errors, telError: !resultTel ? 'ошибка в номере телефона' : ''});
                break;
            case 'inpEmail':
                let resultEmail = regValueTest(regEmail, value);
                setEmail({isValid: !!resultEmail, value: value});
                setErrors({...errors, emailError: !resultEmail ? 'ошибка в email' : ''});
                break;
            case 'inpArea':
                let resultText = questionTest;
                setQuestion({isValid: !!resultText, value: value});
                setErrors({...errors, textareaError: !resultText ? 'ошибка в тексте' : ''});
                break;
        }
    };

    useEffect(() => {
        let data = name.value && tel.value && email.value && question.value;
        if (data) {
            console.log('отправка данных формы: ', name.value, tel.value, email.value, question.value);
        }
    }, [name, tel, email, question]);

    return (
        <section className={style.feedback_wrap}>
            <h1 className={style.feedback_wrap}>Задайте нам вопрос</h1>
            <form className={style.feedback} id="feedback-form" onSubmit={handleSubmitForm}>
                <div className={style.feedback__inp_wrap}>
                    <label className={style.label} htmlFor="inpName">
                        Имя:
                    </label>
                    <CmInput
                        isInput={true}
                        id='inpName'
                        name='inpName'
                        type='text'
                        value={name.value}
                        placeholder='Имя'
                        minLength={2}
                        maxLength={30}
                        required={true}
                        isValid={name.isValid}
                        onChange={onChangeInput}
                    />
                    <CmError error={errors['nameError']} />
                </div>
                <div className={style.feedback__inp_wrap}>
                    <label className={style.label} htmlFor="inpTel">
                        Телефон:
                    </label>
                    <CmInput
                        isInput={true}
                        id='inpTel'
                        name='inpTel'
                        type='tel'
                        value={tel.value}
                        placeholder='Телефон'
                        minLength={10}
                        maxLength={18}
                        required={true}
                        isValid={tel.isValid}
                        onChange={onChangeInput}
                    />
                    <CmError error={errors['telError']} />
                </div>
                <div className={style.feedback__inp_wrap}>
                    <label className={style.label} htmlFor="inpMail">
                        Email-адрес:
                    </label>
                    <CmInput
                        isInput={true}
                        id='inpEmail'
                        name='inpEmail'
                        type='email'
                        value={email.value}
                        placeholder='E-mail'
                        required={true}
                        isValid={email.isValid}
                        onChange={onChangeInput}
                    />
                    <CmError error={errors['emailError']} />
                </div>
                <div className={style.feedback__inp_wrap}>
                    <label className={style.label} htmlFor="inpArea">
                        Напишите ваш вопрос:
                    </label>
                    <CmInput
                        isInput={false}
                        id='inpArea'
                        name='inpArea'
                        value={question.value}
                        placeholder='Напишите свой вопрос'
                        rows="5"
                        cols="30"
                        minLength={10}
                        maxLength={300}
                        required={true}
                        onChange={onChangeInput}
                    />
                    <CmError error={errors['textareaError']} />
                </div>
                {/*Капча*/}
                {/*Пользовательское соглашение. Персональные данные*/}
                <div className={style.feedback__agreement_wrap}>
                    <Agreement openModalWindow={setOpenModalWindow}
                               isReadAgreement={isReadAgreement}
                               setIsReadAgreement={setIsReadAgreement}/>
                </div>
                <div className={style.feedback__btn_wrap}>
                    <button className={style.feedback__btn}
                            type='submit'
                            disabled={!isReadAgreement ? true : false}
                    >Отправить
                    </button>
                </div>
            </form>
            {/*/Сообщение об успешной отправки формы*/}
            <div className={style.feedback__message_wrap}>
                <SuccessMessage successfullySent={successfullySent} showSuccessBlock={showSuccessBlock}/>
            </div>
            <ModalWindow openModalWindow={openModalWindow}
                         setOpenModalWindow={setOpenModalWindow}
                         title='ПРАВИЛА ПОЛЬЗОВАТЕЛЬСКОГО СОГЛАШЕНИЯ'>
                <AgreementText/>
            </ModalWindow>
        </section>
    );
};

export default Feedback;