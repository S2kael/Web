const fields = {
    Dish : [
        {
            id : "name",
            name : "Name"
        },
        {
            id : "image",
            name : "Image"
        },
        {
            id : "describe",
            name : "Describe"
        },
        {
            id : "cost",
            name : "Cost"
        }   
    ],
    EditDish : [
        {
            id : "name",
            name : "Name"
        },
        {
            id : "image",
            name : "Image"
        },
        {
            id : "describe",
            name : "Describe"
        },
        {
            id : "cost",
            name : "Cost"
        }   
    ],
    EditUserProfile : [
        {
            id : "name",
            name : "User Name"
        },
        {
            id : "image",
            name : "Image"
        }
    ]
}

const type = {
    Dish : "edit",
    Booking : "comfirm"
}

module.exports = {
    fields,
    type
}

