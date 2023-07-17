import Root from './page/Root';
import Home from './page/Home';
import Detail from './page/Detail';
import Cart from './page/Cart';
import Add from './page/Add';
import Notfound from './page/Notfound';
import Products from './components/Products';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Notfound />,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/add",
        element: <Add />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="App w-full lg:w-[1024px] xl:w-[1280px] m-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
