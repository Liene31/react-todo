import { useAtomValue } from "jotai";
import { NavLink } from "react-router";
import { isConnectedAtom } from "../../atoms/token.atom.js";
import { BtnLogout } from "../../features/components/BtnLogout.jsx";

export const Header = () => {
  const isConnected = useAtomValue(isConnectedAtom);
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-main-blue-50">
      <div className="flex items-center gap-4">
        <img
          className="w-12"
          src="icons/organic-organism-svgrepo-com.svg"
          alt="logo of organic organism"
        />
        <p className="text-main-blue-950 font-bold ">Logo</p>
      </div>
      <nav>
        <ul className="flex items-center gap-4 font-bold">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/pomodoro">Pomodoro</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>

          {/* Connection  */}

          {isConnected ? (
            <BtnLogout />
          ) : (
            <>
              <li className="btn">
                <NavLink to="auth/login">Connect</NavLink>
              </li>
              <li className="btn">
                <NavLink to="auth/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
