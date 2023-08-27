import App from '../App'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Content from '../pages/Content';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:  [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/content',
                element: <Content />
            }
        ]
    },
]);

export default router;