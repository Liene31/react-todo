import { useId } from "react";
import { authService } from "../../services/auth.service.js";

export const LoginForm = () => {
  const id = useId();
  // const navigate = useNavigate();

  const handleLoginSubmit = async (formData) => {
    console.log(formData);

    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const response = await authService.login(data);

    console.log(response.token);

    //   navigates back to the home page
    //   navigate(`/`);
  };

  return (
    <>
      <form action={handleLoginSubmit}>
        <div>
          <label htmlFor={id + `email`}>Email</label>
          <input
            id={id + `email`}
            type="email"
            className="border"
            name="email"
          />
        </div>

        <div>
          <label htmlFor={id + `password`}>Password</label>
          <input
            id={id + `password`}
            type="password"
            className="border"
            name="password"
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};
