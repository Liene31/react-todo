import App from "./App.jsx";

/**
 * @type{import "react-router".RouteObject[]}
 */

export const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      { path: "tasks", element: <div>My Tasks</div> },
    ],
  },
];
