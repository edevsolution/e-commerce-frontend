import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>

        </div>
    );
};

export default Main;