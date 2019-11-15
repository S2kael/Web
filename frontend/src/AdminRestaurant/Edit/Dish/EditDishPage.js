import React, {useState,useEffect} from 'react';
import Card from '../../../component/Card/Card';
import Form from '../../../component/Card/Form/Form';
import variables from '../../context/variables';
import {useAdminResContext} from '../../context/useAdminResContext';


function EditDishPage(props){
    const {
        DishVaules
    } = useAdminResContext();

    const [fields,setFields] = useState(variables.fields.EditDish);

    useEffect(()=>{
        var tmp = fields;
        tmp.map((item,index) => {
            // Có thể thay đổi thành kiểm tra phần tử trong dãy có phù hợp với id lấy đc k r mới thực hiện bước chèn
            // Ở đây lấy luôn phần tử 0 để test vì chỉ để duy nhất 1 phần tử trong mảng
            // Cx có thể tạo mới 1 trường trong context để lưu giá trị đc chọn
            item['value'] = DishVaules[0][(item['name'])];
        });
        setFields(tmp);
    },[]);
    
    return (
        <div key = "Edit Profile" className="MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8">
            <Card  name="Edit Profile" describe="Edit Profile"><Form key = "Edit Profile" submit = "Edit Dish" fields = {fields} /></Card>
        </div>
    );
}

export default EditDishPage;