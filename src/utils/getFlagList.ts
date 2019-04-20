import axios from "axios";
import { Items } from "./types/featureFlagDataModel";
import { formatResponse } from "./formatResponse";
import * as config from "../../config/config.json";

const token = config.token;
const headers = {
  Authorization: token,
  "Content-Type": "application/json"
};
const params = {
  method: "get",
  url: config.apiUrl,
  headers: headers
};

export const getFlagList = () => {
  return axios(params)
    .then(res => {
      if (res.status == 200 && res.data != null) {
        return res.data;
      }
      return null;
    })
    .catch(err => {
      return err;
    });
};
