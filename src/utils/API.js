import axios from "axios";

const API = {
  searchByGender: (gender) => {
    return axios(`https://randomuser.me/api/?gender=${gender}`);
  },
};

export default API;
