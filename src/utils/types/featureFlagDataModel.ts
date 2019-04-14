import { AxiosResponse, AxiosRequestConfig, AxiosPromise } from "axios";

export interface FeatureFlagData {
  status?: number;
  statusText?: string;
  headers?: Object;
  config?: AxiosRequestConfig;
}

export interface Items {
  items?: Array<FlagItem>;
}

export interface FlagItem {
  key?: string;
  kind?: string;
  creationDate?: number;
  environments?: {
    production?: {
      on?: boolean;
      archived?: boolean;
      lastModified?: number;
    };
  };
  tags?: Array<string>;
  customProperties?: any;
  _maintainer?: {
    firstName?: string;
    lastName?: string;
  };
}
