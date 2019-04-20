import { FeatureFlagData, Summary } from "../types";

export const createSummaryData = (data: FeatureFlagData[]): Summary => {
  const totalFlag = data.length;
  const active = data.filter(data => data.on).length;
  const inactive = data.filter(data => !data.on).length;
  const activePercentage = Math.floor((active * 100) / totalFlag);

  return {
    totalFlag: totalFlag,
    active: active,
    inactive: inactive,
    activePercentage: activePercentage
  };
};
