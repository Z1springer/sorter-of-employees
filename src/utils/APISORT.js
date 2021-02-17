import axios from "axios";

const APISORT = {
  searchForMany: () => {
    return axios(`https://randomuser.me/api/?results=200`);
  },
};

export default APISORT;
