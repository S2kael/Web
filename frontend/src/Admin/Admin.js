import React from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';

import {AdminProvider} from  './context/context';

function Admin () {

    return (
        <AdminProvider>
        <div>
            <SideBar />
            <Content />
        </div>
        </AdminProvider>
    );
}

export default Admin;