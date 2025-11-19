import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import DetailsPage from "./src/Pages/DetailsPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },

    {
        path:"/details",
        element:<DetailsPage />
    }
])

export default router;