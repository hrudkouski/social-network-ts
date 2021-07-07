import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../../common/FormsControls/FormsControls.module.css'

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
    isAuth: boolean
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <span className={s.formSummaryError}>
                {props.error}
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

const Login = (props: LoginType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile/5513`}/>
    }

    return <>
        <h1>Please, login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login);