import React from "react";
import { useImmer } from "use-immer";
import DishesPage from "../Dish/DishesPage";
import EditProfilePage from "../Edit/Profile/EditProfilePage";
import CreateDish from "../CreateDish/CreateDish";
import BookingPage from "../Booking/BookingPage";
import EditDishPage from "../Edit/Dish/EditDishPage";


const defaultState = {
    NavigationConfig: [
        {
            id: "dish",
            title: "Dish",
            layout: 'sidebar',
            component: DishesPage
        },
        {
            id: "book",
            title: "Booking",
            layout: 'sidebar',
            component: BookingPage
        },
        {
            id: "dish",
            title: "Create Dish",
            layout: 'sidebar',
            component: CreateDish
        },
        {
            id: "editdish",
            title: "Edit Dish",
            component: EditDishPage
        },
        {
            id: "editprofile",
            title: "Edit Profile",
            component: EditProfilePage
        }
    ],
    DishVaules:[
        {
            Name: "Dakota Rice",
            Image: "Niger",
            Describe: "Oud-Turnhout",
            Cost: "$36,738"
        }
    ],
    isLogin: false,
    titleContent: "Dish"
};

const AdminResContext = React.createContext();

const AdminResProvider = ({ children }) => {
    const [state, dispatch] = useImmer({ ...defaultState });

    return (
        <AdminResContext.Provider value={[state, dispatch]}>
            {children}
        </AdminResContext.Provider>
    );
};

export { AdminResProvider, AdminResContext };