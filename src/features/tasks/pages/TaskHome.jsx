import { NavLink } from "react-router";
import { TaskUserSelector } from "../components/TaskUserSelector.jsx";
import { useEffect } from "react";
import { taskService } from "../../../services/task.service.js";

export const TaskHome = () => {
  const [userIdSelected, setUserIdSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);
    taskService
      .getAll()
      .then((user) => {
        setData(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <section className="flex gap-6 items-center">
        <img
          className="w-40"
          src="icons/organic-organism-svgrepo-com.svg"
          alt=""
        />
        <h1 className="text-2xl text-main-blue-950">
          List of all the tasks for the specific user who is currently logged in
        </h1>
      </section>
      <section className="flex flex-col px-8">
        <NavLink to="/task/1">Task 1</NavLink>
        <NavLink to="/task/2">Task 2</NavLink>
        <NavLink to="/task/3">Task 3</NavLink>

        {/* TEST */}
        <TaskUserSelector />
      </section>
    </>
  );
};
