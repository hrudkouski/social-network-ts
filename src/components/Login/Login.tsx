import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../../common/FormsControls/FormsControls.module.css'
import l from '../../components/Login/Login.module.css'
import {Preloader} from "../../common/Preloader/Preloader";

type LoginPropsType = {
  captchaURL: string | null
}

export type LoginFormDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormDataType, string>

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType, LoginPropsType> & LoginPropsType>
    = (({
          handleSubmit,
          error,
          captchaURL,
        }) => {
  return (
      <form onSubmit={handleSubmit}>

        {createField<LoginFormValuesTypeKeys>('email', 'email', Input, [required])}
        {createField<LoginFormValuesTypeKeys>('password', 'password', Input, [required], {type: 'password'})}
        {createField<LoginFormValuesTypeKeys>('rememberMe', 'email', Input, [required], {type: 'checkbox'})}

        <div>
          {captchaURL && <img src={captchaURL} alt={captchaURL}/>}
        </div>

        {captchaURL && createField<LoginFormValuesTypeKeys>('captcha', 'Symbols from image', Input, [])}

        <div>
          <button>Login</button>
        </div>

        {error && <span className={s.formSummaryError}>
                {error}
            </span>}
      </form>
  )
})

const LoginReduxForm = reduxForm<LoginFormDataType, LoginPropsType>({form: 'loginForm'})(LoginForm)

export const LoginPage: React.FC = () => {

  const captchaURL = useSelector((state: AppStateType) => state.auth.captchaURL)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const isFetching = useSelector((state: AppStateType) => state.auth.isFetching)
  const dispatch = useDispatch()

  const onSubmit = (formData: LoginFormDataType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }

  if (isAuth) return <Redirect to={`/profile/5513`}/>
  if (isFetching) return <Preloader/>

  return (
      <div className={l.wrapper}>
        <div>
          <span>You can register -
            <a href={'https://social-network.samuraijs.com/'}
               rel={'noreferrer'}
               target={'_blank'}>here
            </a>
          </span>
          <div>or use test account:</div>
          <div>Email: free@samuraijs.com</div>
          <div>Password: free</div>
        </div>

        <h1>Please, login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
      </div>
  )
}