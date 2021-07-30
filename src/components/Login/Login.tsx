import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../../common/FormsControls/FormsControls.module.css'
import {Preloader} from "../../common/Preloader/Preloader";

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
    isAuth: boolean
    isFetching: boolean
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <span className={s.formSummaryError}>
                {error}
            </span>}
            <Field
                validate={[required]}
                component={Input}
                name='email'
                placeholder='email'/>
            <Field
                validate={[required]}
                component={Input}
                name='password'
                placeholder='password'
                type={'password'}/>
            <Field
                component={Input}
                name='rememberMe'
                type='checkbox'/>
            remember me
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

const Login = ({login, isAuth, isFetching}: LoginType) => {

    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={`/profile/5513`}/>
    }

    if (isFetching) {
        return <Preloader/>
    }

    return <>
        <h1>Please, login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}

type MapStatePropsType = {
    isAuth: boolean
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {login, logout})(Login);