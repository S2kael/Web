import React from 'react';
import Card from '../../component/Card/Card';
import Form from '../../component/Card/Form/Form';
import variables from '../context/variables';

function EditProfilePage(){
    
    return (
        <div key = "Edit Profile" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Edit Profile" describe="Edit Profile"><Form key = "Edit Profile" submit = "Edit Profile" fields = {variables.fields.UserProfile} /></Card>
        </div>
    );
}

export default EditProfilePage;