import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import MainLayout from "./components/MainLayout";
import ErrorPage from "./components/errors/ErrorPage";
import SingleProduct from "./components/pages/SingleProduct";
import About from "./components/pages/About";
import AllCategories from "./components/pages/AllCategories";
import Products from "./components/pages/Products";

const routes = createBrowserRouter([
    {
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {index: true, Component: Home},
            {path:'single-product/:name', Component:SingleProduct},
            {path:'all-categories', Component:AllCategories},
            {path:'products', Component:Products},
            {path:'about-us', Component:About},
        ],
    }
])

export default routes