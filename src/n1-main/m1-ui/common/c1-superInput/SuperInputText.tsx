import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperInputText.module.css'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    error?: string
    spanClassName?: string
    placeholder?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        error,
        className,
        placeholder,
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
