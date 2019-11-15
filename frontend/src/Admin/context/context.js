import React from "react";
import { useImmer } from "use-immer";
import HomePage from '../../home/HomePage';
import BookingPage from '../../booking/BookingPage';
import Login from '../../component/Login/Login';
import UserPage from "../User/UserPage";
import RestaurantOwnerPage from "../RestaurantOwner/RestaurantOwnerPage";
import CreateRestaurantOwnerPage from "../Create/OwnerRestaurant/CreateRestaurantOwnerPage";
import CreateRestaurantPage from "../Create/Restaurant/CreateRestaurant";
import EditProfilePage from "../EditProfile/EditProfilePage";


const defaultState = {
    NavigationConfig: [
        {
            id: "user",
            title: "User",
            component: UserPage
        },
        {
            id: "rso",
            title: "Restaurant Owner",
            component: RestaurantOwnerPage
        },
        {
            id: "crtrso",
            title: "Create Restaurant Owner",
            component: CreateRestaurantOwnerPage
        },
        {
            id: "crtrs",
            title: "Create Restaurant",
            component: CreateRestaurantPage
        },
        {
            id: "editprofile",
            title: "Edit Profile",
            display: 'none',
            component: EditProfilePage
        }
    ],
    isLogin: false,
    titleContent: "User"
};

const AdminContext = React.createContext();

const AdminProvider = ({ children }) => {
    const [state, dispatch] = useImmer({ ...defaultState });

    return (
        <AdminContext.Provider value={[state, dispatch]}>
            {children}
        </AdminContext.Provider>
    );
};

export { AdminProvider, AdminContext };