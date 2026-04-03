import { useSetAtom } from "jotai";
import { tokenAtom } from "../../atoms/token.atom";

export function BtnLogout() {
  const setToken = useSetAtom(tokenAtom);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <button className="btn" onClick={handleLogout}>
      Disconnect
    </button>
  );
}
