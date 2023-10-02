import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Cart from "../Pages/Cart/Cart/Cart";
const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            children: [
                  {
                        path: "/",
                        element: <Home></Home>
                  },
                  {
                        path:"/cart",
                        element:<Cart></Cart>
                  }
            ]
      },
]);

export default router;