import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import StorePage from "./pages/storePage";
import NotFound from "./pages/notFound";
import CartPage from "./pages/cartPage";

const msRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/store",
        element: <StorePage />,
    },
    {
        path: "/cart",
        element: <CartPage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
export default function MyRouter() {
    return (
        <RouterProvider router={msRouter} />
    )
}