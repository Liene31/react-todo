import { useAtomValue } from "jotai";
import { isConnectedAtom } from "../../atoms/token.atom";
import { Navigate } from "react-router";

export function PageProtected({ children }) {
  const isConnect = useAtomValue(isConnectedAtom);
  if (!isConnect) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}
