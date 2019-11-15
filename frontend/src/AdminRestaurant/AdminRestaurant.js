import React from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';

import {AdminResProvider} from  './context/context';

function AdminRestaurant () {

    return (
        <AdminResProvider>
        <div>
            <SideBar />
            <Content />
        </div>
        </AdminResProvider>
    );
}

export default AdminRestaurant;