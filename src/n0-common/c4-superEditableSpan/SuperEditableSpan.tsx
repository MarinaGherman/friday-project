import React, {
    DetailedHTMLProps,
    HTMLAttributes,
    InputHTMLAttributes,
    useState
} from 'react';
import SuperInputText, {SuperInputTextPropsType} from "../c1-superInput/SuperInputText";

export type EditableSpanType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type SuperEditableSpanType = SuperInputTextPropsType & {
    spanProps?: EditableSpanType;
};

const SuperEditableSpan:React.FC<SuperEditableSpanType> = ({onBlur, ...props}) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const onEditMode = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> ) => {
        setEditMode(true)
        onBlur && onBlur(e)
    }

    const offEditMode = (e: InputHTMLAttributes<HTMLInputElement>) => {
        setEditMode(false)
        onBlur && onBlur(e)
    }

    return (
        <>
            {
                editMode ? (
                    <SuperInputText
                        onBlur={offEditMode}
                    />
                ) : (
                    <span onDoubleClick={onEditMode}>
                        {props.value}
                    </span>
                )
            }

        </>
    );
};

export default SuperEditableSpan;