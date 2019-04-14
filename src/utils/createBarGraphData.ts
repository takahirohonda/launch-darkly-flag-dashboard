import { FeatureFlagData, BarGraph } from "../types";

export const createBarGraphData = (data: FeatureFlagData[]): BarGraph[] => {
  let array = [];
  let totalFlags = data.length;

  array.push(aggregateOlderData(data, 6, "Older", totalFlags));

  for (let i = 4; i >= 0; i--) {
    let targetYearMonthKey = getPastYearMonthKey(i);
    let flagCount = data.filter(data => data.yearMonthKey == targetYearMonthKey)
      .length;
    let barGraph = {
      title: i == 0 ? "Current" : monthConverter(getPastMonth(i)),
      count: flagCount,
      height: 0
    };
    array.push(barGraph);
  }

  const max = getMaxCount(array);

  return array.map(item => {
    var height = Math.floor((item.count * 100) / max);
    return {
      title: item.title,
      count: item.count,
      height: height
    };
  });
};

const getMaxCount = (data: BarGraph[]): number => {
  return Math.max.apply(Math, data.map(element => element.count));
};

const aggregateOlderData = (
  data: FeatureFlagData[],
  olderThan: number,
  title: string,
  totalFlags: number
): BarGraph => {
  let flagCount = data.filter(
    data => data.yearMonthKey <= getPastYearMonthKey(olderThan)
  ).length;
  return {
    title: title,
    count: flagCount,
    height: Math.floor((flagCount * 100) / totalFlags)
  };
};
const getPastYearMonthKey = (monthAgo: number): string => {
  let today = new Date();
  let past = new Date(today.setMonth(today.getMonth() - monthAgo));
  return past.getFullYear().toString() + past.getMonth().toString();
};

const getPastMonth = (monthAgo: number): number => {
  let today = new Date();
  let past = new Date(today.setMonth(today.getMonth() - monthAgo));
  return past.getMonth();
};

const monthConverter = (month: number): string => {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "";
  }
};
