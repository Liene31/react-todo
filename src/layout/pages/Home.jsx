import { Link } from "react-router";

export const Home = () => {
  return (
    <>
      <section className="py-12 px-8">
        <h1 className="text-3xl text-main-blue-950">
          Welcome to the Task Manager App
        </h1>
        <h2 className="mt-2 mb-4">Site to boost your Productivity</h2>
        <Link className="btn" to="/faq">
          Any Question ?
        </Link>
      </section>
    </>
  );
};
