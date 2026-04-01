import App from "./App.jsx";
import { TaskDetails } from "./features/tasks/pages/TaskDetails.jsx";
import { TaskHome } from "./features/tasks/pages/TaskHome.jsx";
import { About } from "./layout/pages/About.jsx";
import { Faq } from "./layout/pages/Faq.jsx";
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
      { path: "about", element: <About /> },
      { path: "tasks", element: <TaskHome /> },
      { path: "task/:id", element: <TaskDetails /> },
      { path: "faq", element: <Faq /> },

      //Always as last one
      { path: "*", element: <NotFound /> },
    ],
  },
];
