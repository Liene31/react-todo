import { useId } from "react";
import { authService } from "../../services/auth.service.js";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const id = useId();
  const navigate = useNavigate();

  const handleRegisterSubmit = async (formData) => {
    console.log(formData);

    const data = Object.fromEntries(formData.entries());
    console.log(data);
    await authService.register(data);

    navigate(`/`);
  };

  return (
    <>
      <form action={handleRegisterSubmit}>
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
          <label htmlFor={id + `firstname`}>First Name</label>
          <input
            id={id + `firstname`}
            type="text"
            className="border"
            name="firstname"
          />
        </div>
        <div>
          <label htmlFor={id + `lastname`}>Last Name</label>
          <input
            id={id + `lastname`}
            type="text"
            className="border"
            name="lastname"
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
