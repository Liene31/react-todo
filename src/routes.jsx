import App from "./App.jsx";
import { TaskDetails } from "./features/tasks/pages/TaskDetails.jsx";
import { TaskHome } from "./features/tasks/pages/TaskHome.jsx";
import { Home } from "./layout/pages/Home.jsx";
import { NotFound } from "./layout/pages/NotFound.jsx";

/**
 * @type{import "react-router".RouteObject[]}
 */

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "tasks", element: <TaskHome /> },
      { path: "task/:id", element: <TaskDetails /> },

      //Always as last one
      { path: "*", element: <NotFound /> },
    ],
  },
];
