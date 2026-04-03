import axios from "axios";
import { getDefaultStore } from "jotai";
import { tokenAtom } from "../atoms/token.atom";

export const taskService = {
  //get all the tasks for the logged in user
  getAll: async () => {
    //Specific to Jotai how to use outside React
    const token = getDefaultStore().get(tokenAtom);
    const response = await axios.get(
      "http://localhost:8000/api/tasks/user/69ce2b9f4c212c3c01ece93e",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data;
  },
};
