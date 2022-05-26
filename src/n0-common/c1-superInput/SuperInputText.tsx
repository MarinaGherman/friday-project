import React, {DetailedHTMLProps, FocusEventHandler, InputHTMLAttributes} from 'react'
import s from './SuperInputText.module.css'


export type SuperInputTextPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: string
    spanClassName?: string
    placeholder?: string
    onBlur?: FocusEventHandler<HTMLInputElement>;
}



const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        error,
        className,
        placeholder,
        onBlur,
        ...restProps
    }
) => {
    return (
        <>
            <input
                type={type || 'text'}
                className={s.superInput}
                placeholder={placeholder}
                onBlur={onBlur}
                {...restProps}
            />
        </>
    )
}

export default SuperInputText
