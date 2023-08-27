import App from '../App'
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Content from '../pages/Content';
import BlogDetail from '../pages/BlogDetail';
import NotFound from '../pages/NotFound';

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
            },
            {
                path: '/blogs/:id',
                element : <BlogDetail />
            },
            {
                path : '*',
                element : <NotFound />
            }
        ]
    },
]);

export default router;