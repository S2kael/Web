import React from 'react';
import Card from '../../component/Card/Card';
import Form from '../../component/Card/Form/Form';
import variables from '../context/variables';

function CreateDish(){
    return (
        <div key = "Create Dish" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Create Dish" describe="Create Dish"><Form key = "Create Dish" submit = "Create" fields = {variables.fields.Dish}/></Card>
        </div>
    );
}

export default CreateDish;