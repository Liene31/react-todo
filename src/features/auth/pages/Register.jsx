import { RegisterForm } from "../../components/RegisterForm.jsx";

export const Register = () => {
  return (
    <>
      <section className="py-6 px-12 flex items-center gap-6">
        <h1 className="text-3xl text-main-blue-950">Create an account</h1>
      </section>
      <section>
        <RegisterForm />
      </section>
    </>
  );
};
