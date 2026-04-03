import { NavLink } from "react-router";
import { TaskUserSelector } from "../components/TaskUserSelector.jsx";

export const TaskHome = () => {
  return (
    <>
      <section className="flex gap-6 items-center">
        <img
          className="w-40"
          src="icons/organic-organism-svgrepo-com.svg"
          alt=""
        />
        <h1 className="text-2xl text-main-blue-950">List of all the tasks</h1>
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
