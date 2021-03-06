import React from 'react';
import Header from "../header/Header";
import Routers from "../routes/Routers";

const Main: React.FC = () => {
    return (
        <div>
            <Header/>
            <Routers/>
        </div>
    );
};

export default Main;