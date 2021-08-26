import React from "react";
import {Field, WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css'
import {ValidatorType} from "../../utils/validators/validators";

export const FormControl: React.FC<any> = ({meta: {error, touched}, children}) => {

    const hasError = error && touched;

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>
}

export function createField<FormKeysType extends string>(
    name: FormKeysType,
    placeholder: string | undefined,
    component: string | React.Component | React.FC<WrappedFieldProps>,
    validate: ValidatorType[],
    props = {},
    className = '',
    text = '',
    id = ''
) {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validate}
                component={component}
                {...props}
                id={id}
                className={className}
            />
            {text}
        </div>
    )
}

