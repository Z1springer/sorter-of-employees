import axios from "axios";

const API = {
  search: () => {
    return axios(`https://randomuser.me/api/?results=30`);
  },
};

export default API;
