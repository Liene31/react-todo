import { useId } from "react";
import { authService } from "../../services/auth.service.js";
import { useAtom, useSetAtom } from "jotai";
import { tokenAtom } from "../../atoms/token.atom.js";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  // const [userToken, setUserToken] = useAtom(tokenAtom);
  const setToken = useSetAtom(tokenAtom);
  const id = useId();
  const navigate = useNavigate();

  const handleLoginSubmit = async (formData) => {
    console.log(formData);

    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const response = await authService.login(data);

    console.log(response.token);

    setToken(response.token);

    //   navigates back to the home page
    navigate(`/`);
  };

  // console.log(userToken);

  return (
    <>
      <form
        action={handleLoginSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <div className="input-form">
          <label htmlFor={id + `email`}>Email</label>
          <input
            id={id + `email`}
            type="email"
            className="border"
            name="email"
          />
        </div>

        <div className="input-form">
          <label htmlFor={id + `password`}>Password</label>
          <input
            id={id + `password`}
            type="password"
            className="border"
            name="password"
          />
        </div>
        <div>
          <button className="btn font-bold" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};
