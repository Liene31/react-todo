import { LoginForm } from "../../components/LoginForm.jsx";

export const Login = () => {
  return (
    <>
      <section className="py-6 px-12 flex items-center gap-6">
        <h1 className="text-3xl text-main-blue-950">Login</h1>
      </section>
      <section>
        <LoginForm />
      </section>
    </>
  );
};
