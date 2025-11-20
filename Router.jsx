import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import DetailsPage from "./src/Pages/DetailsPage";
import CategoryPage from "./src/Pages/CategoryPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },

    {
        path:"/details",
        element:<DetailsPage />
    },
    {
        path:"/Category",
        element:<CategoryPage />
    }
])

export default router;