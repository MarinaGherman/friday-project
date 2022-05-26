import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'



type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (props) => {
    return (
            <input
                type={'checkbox'}
                {...props}
            />

    )
}

export default SuperCheckbox
