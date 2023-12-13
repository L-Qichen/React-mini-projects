import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  PrizeWheel,
  Login,
  UserResult,
} from './pages';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/prize-wheel',
    element: <PrizeWheel />,
  },
  {
    path: '/user-result',
    element: <UserResult />,
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App
