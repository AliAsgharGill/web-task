import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
} from "react-router-dom";

import "./App.css";
import Login from "./pages/Login/Index";
import Location from "./pages/Location/Index";
import Task from "./pages/task/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/task",
    element: < Task />
  },
  {
    path: "/location",
    element: <Location />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
