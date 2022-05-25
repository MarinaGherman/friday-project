import React from 'react';
import s from './Profile.module.css'
import SuperEditableSpan from "../../../../n0-common/c4-superEditableSpan/SuperEditableSpan";


type ProfilePropsTypes ={
    loading?: boolean
    avatar: string
    name: string


}

const ProfileProfile:React.FC<ProfilePropsTypes> = ({avatar,name}) => {
    return (
        <div className={s.profileBlock}>
            <SuperEditableSpan value={name}/>
            <img src={avatar} alt="avatar"/>
        </div>
    );
};

export default ProfileProfile;