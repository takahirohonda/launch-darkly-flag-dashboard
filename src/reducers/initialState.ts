import { StoreState } from '../types';

export const initialState: StoreState = {
  initialData : {
    flagList: [],
    isFetching: false,
    fetchingSuccess: false,
    isError: false
  },
  userList: [],
  filteredList : [],
  summary: {
    totalFlag: null,
    active: null,
    inactive: null,
    activePercentage: null
  },
  barGraph: [],
  animate: false
};
