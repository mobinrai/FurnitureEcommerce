import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import MainLayout from "./components/MainLayout";
import ErrorPage from "./components/errors/ErrorPage";
import SingleProduct from "./components/pages/SingleProduct";
import About from "./components/pages/About";

const routes = createBrowserRouter([
    {
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
        {index: true, Component: Home},
        {path:'single-product/:name', Component:SingleProduct},
        {path:'about-us', Component:About}, 
        ],
    }
])

export default routes