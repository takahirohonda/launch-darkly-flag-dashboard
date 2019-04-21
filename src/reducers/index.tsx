import { AppAction } from '../actions';
import * as C from '../constants';
import { combineReducers } from 'redux';
import { initialState } from './initialState';
import { FeatureFlagData, BarGraph, Summary } from '../types';
import { createSummaryData } from '../utils/createSummaryData';
import { createBarGraphData } from '../utils/createBarGraphData';

export const flagList = (state: FeatureFlagData[] = initialState.initialData.flagList, action: AppAction): FeatureFlagData[] => {

    switch(action.type) {
      case C.LOAD_DATA:
        return action.payload;
    }
    return state;
};

export const isFetching = (state: boolean = initialState.initialData.isFetching, action: AppAction): boolean => {
    switch(action.type) {
        case C.FETCHING_DATA:
            return true;
        case C.FETCHINT_DATA_SUCCESS:
            return false;
    }
    return state;
};

export const fetchingSuccess = (state: boolean = initialState.initialData.fetchingSuccess, action: AppAction): boolean => {
  switch(action.type) {
    case C.FETCHINT_DATA_SUCCESS:
      return true;
  }
  return state;
};

export const isError = (state: boolean = initialState.initialData.isError, action: AppAction): boolean => {
    switch(action.type) {
        case C.RECIEVE_ERROR:
            return true;
    }
    return state;
};

export const userList = (state: string[] = initialState.userList, action: AppAction): string[] => {
  switch(action.type) {
    case C.GET_USER_LIST:
      const allUsers = action.payload.map(item => item.createdBy).sort();
      return [ ...Array.from(new Set<string>(allUsers))];
    }
    return state;
};

export const filteredList = (state: FeatureFlagData[] = initialState.filteredList, action: AppAction)
: FeatureFlagData[] => {
  switch(action.type) {
    case C.LOAD_ALL_USER_LIST:
      return action.payload;
    case C.LOAD_FILTERED_USER_LIST:
      if(action.payload.user == 'default') {
        return action.payload.data;
      }
      const list = action.payload.data.filter(x => x.createdBy == action.payload.user);
      return list;
  }
  return state;
};

export const summary = (state: Summary = initialState.summary, action: AppAction): Summary => {
  switch(action.type) {
    case C.GET_ALL_USER_SUMMARY:
      const summary = createSummaryData(action.payload);
      return summary;
    case C.GET_FILTERED_USER_SUMMARY:
    if(action.payload.user == 'default') {
      return createSummaryData(action.payload.data);
     }
     return createSummaryData(action.payload.data.filter(x => x.createdBy == action.payload.user));
  }
  return state;
};

export const barGraph = (state: BarGraph[] = initialState.barGraph, action: AppAction): BarGraph[] => {
  switch(action.type) {
    case C.GET_ALL_USER_BAR_GRAPH:
      const barGraph = createBarGraphData(action.payload);
      return barGraph;
    case C.GET_FILTERED_USER_BAR_GRAPH:
     if(action.payload.user == 'default') {
      return createBarGraphData(action.payload.data);
     }
    return createBarGraphData(action.payload.data.filter(x => x.createdBy == action.payload.user));
  }
  return state;
};

export const animate = (state: boolean = initialState.animate, action: AppAction): boolean => {
  switch(action.type) {
    case C.TOGGLE_ANIMATION:
      return action.payload;
  }
  return state;
};


export default combineReducers({
    initialData: combineReducers({
        flagList,
        isFetching,
        fetchingSuccess,
        isError
    }),
    userList,
    filteredList,
    summary,
    barGraph,
    animate
});


