import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperInputText.module.css'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
}

const SuperInputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        error,
        className,
        ...restProps
    }
) => {
    return (
        <>
            <input
                type={'text'}
                className={s.superInput}
                {...restProps}
            />
            {error && <span>{error}</span>}
        </>
    )
}

export default SuperInputText
