import { Children } from "react";
import App from "./App.jsx";
import { TaskDetails } from "./features/tasks/pages/TaskDetails.jsx";
import { TaskHome } from "./features/tasks/pages/TaskHome.jsx";
import { About } from "./layout/pages/About.jsx";
import { Faq } from "./layout/pages/Faq.jsx";
import { Home } from "./layout/pages/Home.jsx";
import { NotFound } from "./layout/pages/NotFound.jsx";
import { Register } from "./features/auth/pages/Register.jsx";
import { Login } from "./features/auth/pages/Login.jsx";
import { PageProtected } from "./features/components/PageProtected.jsx";

/**
 * @type{import "react-router".RouteObject[]}
 */

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "tasks",
        element: (
          <PageProtected>
            <TaskHome />
          </PageProtected>
        ),
      },
      {
        path: "task/:id",
        element: (
          <PageProtected>
            <TaskDetails />{" "}
          </PageProtected>
        ),
      },
      { path: "faq", element: <Faq /> },
      {
        path: "auth",
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },

      //Always as last one
      { path: "*", element: <NotFound /> },
    ],
  },
];
