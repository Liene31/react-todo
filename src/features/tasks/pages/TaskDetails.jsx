import { NavLink, useParams } from "react-router";

export const TaskDetails = () => {
  const { id } = useParams();

  return (
    <>
      <section className="py-4 px-12">
        <NavLink className="text-main-blue-500" to="/tasks">
          Back to Tasks
        </NavLink>
        <h1>Task No {id}</h1>
      </section>
    </>
  );
};
