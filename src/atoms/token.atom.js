import { atom } from "jotai";

//Atom which stores the token
export const tokenAtom = atom(null);

//Derived atom
export const isConnectedAtom = atom((get) => {
  const token = get(tokenAtom);
  return token !== null;
});
