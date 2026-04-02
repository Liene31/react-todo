import { useId } from "react";
import { authService } from "../../services/auth.service.js";
import { useAtom } from "jotai";
import { tokenAtom } from "../../atoms/token.atom.js";

export const LoginForm = () => {
  const [userToken, setUserToken] = useAtom(tokenAtom);
  const id = useId();
  // const navigate = useNavigate();

  const handleLoginSubmit = async (formData) => {
    console.log(formData);

    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const response = await authService.login(data);

    console.log(response.token);

    setUserToken(response.token);

    //   navigates back to the home page
    //   navigate(`/`);
  };

  console.log(userToken);

  return (
    <>
      <form
        action={handleLoginSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <div className="flex flex-col font-bold">
          <label htmlFor={id + `email`}>Email</label>
          <input
            id={id + `email`}
            type="email"
            className="border"
            name="email"
          />
        </div>

        <div className="flex flex-col font-bold">
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
