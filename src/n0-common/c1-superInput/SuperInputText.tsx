import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperInputText.module.css'


export type SuperInputTextPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    error?: string
    spanClassName?: string
    placeholder?: string
    onBlur?: any
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
                type={'text'}
                className={s.superInput}
                placeholder={placeholder}
                {...restProps}
            />
        </>
    )
}

export default SuperInputText
