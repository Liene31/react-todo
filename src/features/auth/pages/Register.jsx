import { RegisterForm } from "../../components/RegisterForm.jsx";

export const Register = () => {
  return (
    <>
      <section className="py-6 px-12 text-center">
        <h1 className="text-3xl text-main-blue-950">Create an account</h1>
      </section>
      <section className="flex items-center justify-center gap-4">
        <img
          className="w-90"
          src="https://static.vecteezy.com/system/resources/previews/001/991/652/non_2x/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-banners-free-vector.jpg"
          alt=""
        />
        <RegisterForm />
      </section>
    </>
  );
};
