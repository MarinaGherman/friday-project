import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        children,

        ...restProps
    }
) => {
    return (
        <label>
            <input
                type={'checkbox'}
                {...restProps}
            />
        </label>
    )
}

export default SuperCheckbox
