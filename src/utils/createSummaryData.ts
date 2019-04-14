import { FeatureFlagData, Summary } from "../types";

export const createSummaryData = (data: FeatureFlagData[]): Summary => {
  let totalFlag = data.length;
  let active = data.filter(data => data.on).length;
  let inactive = data.filter(data => !data.on).length;
  let activePercentage = Math.floor((active * 100) / totalFlag);

  return {
    totalFlag: totalFlag,
    active: active,
    inactive: inactive,
    activePercentage: activePercentage
  };
};
