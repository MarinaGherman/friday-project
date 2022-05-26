import React, {ChangeEvent, useState} from 'react';
import Profile from "./Profile";


const ProfileContainer = () => {

    const [name, setName] = useState("Marina")

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <div>
            <Profile onChangeName={handleChangeName} name={name} avatar={"https://www.gossipetv.com/wp-content/uploads/2019/05/avatar-2-quando-esce-trama.jpg"}/>
        </div>
    );
};

export default ProfileContainer;