import React, {ChangeEventHandler} from 'react';
import s from './Profile.module.css'
import SuperEditableSpan from "../../../../n0-common/c4-superEditableSpan/SuperEditableSpan";

type ProfilePropsTypes ={
    avatar: string
    name: string
    onChangeName: ChangeEventHandler<HTMLInputElement>
}

const ProfileProfile:React.FC<ProfilePropsTypes> = ({avatar,name, onChangeName}) => {
    return (
        <div className={s.profileBlock}>
            <SuperEditableSpan value={name} onChange={onChangeName} />
            <img src={avatar} alt="avatar"/>
        </div>
    );
};

export default ProfileProfile;