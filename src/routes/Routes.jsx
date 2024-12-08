import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Sign_Up from "../Pages/Sign_Up";
import Log_In from "../Pages/Log_In";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '/sign-up', element: <Sign_Up /> },
            { path: '/log-in', element: <Log_In /> },
        ]  
    }
])


export default router;