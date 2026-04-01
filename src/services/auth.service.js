import axios from "axios";

export const authService = {
  register: async (userData) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/register`,
        userData,
      );

      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};
