import * as C from "../constants";
import { FeatureFlagData } from "../types";
import { Dispatch } from "redux";
import { getFlagList } from "../utils/getFlagList";
import { formatResponse } from "../utils/formatResponse";
import { Items } from "../utils/types/featureFlagDataModel";
import { flagList } from "../reducers";

interface FilterActionPayload {
  data: FeatureFlagData[];
  user: string;
}

interface LoadData {
  type: C.LOAD_DATA;
  payload: FeatureFlagData[];
}

interface FetchingData {
  type: C.FETCHING_DATA;
}

interface FetchingDataSuccess {
  type: C.FETCHINT_DATA_SUCCESS;
}

interface RecieveError {
  type: C.RECIEVE_ERROR;
}

interface GetUserList {
  type: C.GET_USER_LIST;
  payload: FeatureFlagData[];
}
interface LoadAllUserList {
  type: C.LOAD_ALL_USER_LIST;
  payload: FeatureFlagData[];
}

interface LoadFilteredUserList {
  type: C.LOAD_FILTERED_USER_LIST;
  payload: FilterActionPayload;
}

interface GetAllUserSummary {
  type: C.GET_ALL_USER_SUMMARY;
  payload: FeatureFlagData[];
}

interface GetFilteredUserSummary {
  type: C.GET_FILTERED_USER_SUMMARY;
  payload: FilterActionPayload;
}

interface GetAllUserBarGraph {
  type: C.GET_ALL_USER_BAR_GRAPH;
  payload: FeatureFlagData[];
}

interface GetFilteredUserBarGraph {
  type: C.GET_FILTERED_USER_BAR_GRAPH;
  payload: FilterActionPayload;
}

interface ToggleAnimation {
  type: C.TOGGLE_ANIMATION;
  payload: boolean;
}

export type AppAction =
  | LoadData
  | FetchingData
  | FetchingDataSuccess
  | RecieveError
  | GetUserList
  | LoadAllUserList
  | LoadFilteredUserList
  | GetAllUserSummary
  | GetFilteredUserSummary
  | GetAllUserBarGraph
  | GetFilteredUserBarGraph
  | ToggleAnimation;

export const loadData = (featureFlagData: FeatureFlagData[]): LoadData => {
  return {
    type: C.LOAD_DATA,
    payload: featureFlagData
  };
};

export const fetchingData = (): FetchingData => {
  return {
    type: C.FETCHING_DATA
  };
};

export const fetchingSuccess = (): FetchingDataSuccess => {
  return {
    type: C.FETCHINT_DATA_SUCCESS
  };
};

export const recieveError = (): RecieveError => {
  return {
    type: C.RECIEVE_ERROR
  };
};

export const getUserList = (featureFlagData: FeatureFlagData[]): GetUserList => ({
  type: C.GET_USER_LIST,
  payload: featureFlagData
});

export const loadAllUserList = (featureFlagData: FeatureFlagData[]): LoadAllUserList => ({
  type: C.LOAD_ALL_USER_LIST,
  payload: featureFlagData
});

export const filteredUserList = (user: string) => (dispatch: Dispatch, getState: any) => {
  const data = {
    data: getState().initialData.flagList,
    user: user
  };
  dispatch(loadFilteredUserList(data));
  dispatch(getFilteredUserSummary(data));
  dispatch(getFilteredUserBarGraph(data));
  dispatch(toggleAnimation(true));
};

export const loadFilteredUserList = (data: FilterActionPayload): LoadFilteredUserList => ({
  type: C.LOAD_FILTERED_USER_LIST,
  payload: data
});

export const getAllUserSummary = (featureFlagData: FeatureFlagData[]): GetAllUserSummary => ({
  type: C.GET_ALL_USER_SUMMARY,
  payload: featureFlagData
});

export const getFilteredUserSummary = (data: FilterActionPayload): GetFilteredUserSummary => ({
  type: C.GET_FILTERED_USER_SUMMARY,
  payload: data
});

export const getAllUserBarGraph = (featureFlagData: FeatureFlagData[]): GetAllUserBarGraph => ({
  type: C.GET_ALL_USER_BAR_GRAPH,
  payload: featureFlagData
});

export const getFilteredUserBarGraph = (data: FilterActionPayload): GetFilteredUserBarGraph => ({
  type: C.GET_FILTERED_USER_BAR_GRAPH,
  payload: data
});

export const toggleAnimation = (bool: boolean): ToggleAnimation => ({
  type: C.TOGGLE_ANIMATION,
  payload: bool
});

export const loadInitialData = () => (dispatch: Dispatch) => {
  dispatch(fetchingData());

  return getFlagList()
    .then((data: Items) => {
      const list = formatResponse(data);
      dispatch(loadData(list));
      dispatch(fetchingSuccess());
      dispatch(loadAllUserList(list));
      dispatch(getUserList(list));
      dispatch(getAllUserSummary(list));
      dispatch(getAllUserBarGraph(list));
      dispatch(toggleAnimation(true));
    })
    .catch(err => dispatch(recieveError()));
};
