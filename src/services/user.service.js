import axios from "axios";
import { getDefaultStore } from "jotai";
import { tokenAtom } from "../atoms/token.atom";

export const userService = {
  getAll: async () => {
    //Specific to Jotai how to use outside React
    const token = getDefaultStore().get(tokenAtom);
    const response = await axios.get("http://localhost:8000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
};
