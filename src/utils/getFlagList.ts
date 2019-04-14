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
  return new Promise((resolve, reject) => {
    axios(params)
      .then(res => {
        if (res.status == 200 && res.data != null) {
          resolve(res.data);
        }
        resolve(null);
      })
      .catch(err => {
        reject(err);
      });
  });
};
