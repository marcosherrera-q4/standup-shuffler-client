import { useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import ErrorPage from './pages/Error/Error';
import Home from './pages/Home/Home';
import Standup from './pages/Standup/Standup';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from "react-router-dom";

function App() {
  const [checked, setChecked] = useState([])
  const [checked2, setChecked2] = useState([])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },{
      path: "/home",
      element: <Home checked={checked} setChecked={setChecked} checked2={checked2} setChecked2={setChecked2}/>,
      errorElement: <ErrorPage />,
    },{
      path: "/standup",
      element: <Standup checked={checked} setChecked={setChecked} checked2={checked2} setChecked2={setChecked2}/>,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;






