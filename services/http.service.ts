import axios from "axios";

axios.defaults.baseURL = "https://theseus-staging.lithium.ventures/api/v1";

const http = {
  get: axios.get,
};

export default http;
