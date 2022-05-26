import React, {
    KeyboardEvent,
    DetailedHTMLProps,
    HTMLAttributes,
    useState
} from 'react';
import SuperInputText, {SuperInputTextPropsType} from "../c1-superInput/SuperInputText";

export type EditableSpanType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

export type SuperEditableSpanType = SuperInputTextPropsType & {
    spanProps?: EditableSpanType;
};

const SuperEditableSpan:React.FC<SuperEditableSpanType> = ({ onChange, onBlur, ...props}) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const handleSpanDoubleClick = () => {
        setEditMode(true)
    }
    const handleOnBlur = () => {
        setEditMode(false)
    }

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setEditMode(false)
        }
    }

    return (
        <>
            {
                editMode ? (
                    <SuperInputText
                        autoFocus
                        value={props.value}
                        onChange={onChange}
                        onBlur={handleOnBlur}
                        onKeyDown={handleKeyPress}
                    />
                ) : (
                    <span onDoubleClick={handleSpanDoubleClick}>
                        {props.value}
                    </span>
                )
            }

        </>
    );
};

export default SuperEditableSpan;