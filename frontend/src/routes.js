import HomePage from './home/HomePage';
import BookingPage from './booking/BookingPage';
import Login from './component/Login/Login';
import Admin from './Admin/Admin';
import Table from './component/Card/Table/Table';
import Form from './component/Card/Form/Form';
import AdminRestaurant from './AdminRestaurant/AdminRestaurant';


const NavigationConfig = [

    {
        id: "admin",
        title: "Admin",
        url: "/admin",
        component: Admin,
        layout : "main"
    },
    {
        id: "adminrestaurant",
        title: "Admin Restaurant",
        url: "/adminres",
        component: AdminRestaurant,
        layout : "main"
    },
    {
        id: "login",
        title: "Login",
        url: "/login",
        component: Login,
        layout: 'main'
    }
]

export default NavigationConfig;