export interface StoreState {
  initialData: InitialData;
  userList: string[];
  filteredList: FeatureFlagData[];
  summary: Summary;
  barGraph: BarGraph[];
  animate: boolean;
}

export interface InitialData {
  flagList: FeatureFlagData[];
  isFetching: boolean;
  fetchingSuccess: boolean;
  isError: boolean;
}

export interface FeatureFlagData {
  flagName: string;
  flagType: string;
  on: boolean;
  archived: boolean;
  tags: string;
  customProperties: string;
  createdBy: string;
  createdDate: string;
  lastModified: string;
  sortKey: number;
  yearMonthKey: string;
}

export interface BarGraph {
  title: string;
  count: number;
  height: number;
}

export interface Summary {
  totalFlag: number;
  active: number;
  inactive: number;
  activePercentage: number;
}