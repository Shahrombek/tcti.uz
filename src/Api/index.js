import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://qoshma-master.herokuapp.com/",
  headers: {
    common: {
      Authorization: "",
    },
  },
});

export const GetData = async (category) => {
  
  try {
    const res = await instanceAxios.get(
      `/${category}/all`
    );
    return { success: true, data: res.data };

  } catch (error) {
    return { success: false };
  }
};