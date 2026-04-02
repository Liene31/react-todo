import { LoginForm } from "../../components/LoginForm.jsx";

export const Login = () => {
  return (
    <>
      <section className="py-6 px-12 text-center">
        <h1 className="text-3xl text-main-blue-950 ">Login</h1>
      </section>
      <section className="flex items-center justify-center gap-4">
        <img
          className="w-90"
          src="https://img.freepik.com/premium-vector/global-network-connection-abstract-concept-vector-illustration_107173-29878.jpg"
          alt=""
        />
        <LoginForm />
      </section>
    </>
  );
};
