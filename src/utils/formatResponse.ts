import { Items } from "./types/featureFlagDataModel";
import { FeatureFlagData } from "../types";
import { convertEpocToLocal, getYearMonthKey } from "./timestampFormatter";

export const formatResponse = (data: Items): FeatureFlagData[] => {
  const array = data.items.map(item => {
    const flagName = item.key || 'NA';
    const flagType = item.kind || 'NA';
    let on;
    let archived;
    let tags;
    let customProperties;
    let createdBy;
    let createdDate;
    let lastModified;
    let yearMonthKey;

    try {
      on = item.environments.production.on;
    } catch {
      on = false;
    }
    try {
      archived = item.environments.production.archived;
    } catch {
      archived = false;
    }
    try {
      tags = createTagString(item.tags);
    } catch {
      tags = "NA";
    }
    try {
      customProperties = JSON.stringify(item.customProperties);
    } catch {
      customProperties = "NA";
    }
    try {
      createdBy = item._maintainer.firstName + " " + item._maintainer.lastName;
    } catch {
      customProperties = "NA";
    }
    try {
      createdDate = convertEpocToLocal(item.creationDate);
      yearMonthKey = getYearMonthKey(item.creationDate);
    } catch {
      createdDate = "NA";
      yearMonthKey = "NA";
    }
    try {
      lastModified = convertEpocToLocal(
        item.environments.production.lastModified
      );
    } catch {
      lastModified = "NA";
    }

    return {
      flagName: flagName,
      flagType: flagType,
      on: on,
      archived: archived,
      tags: tags,
      customProperties: customProperties,
      createdBy: createdBy,
      createdDate: createdDate,
      lastModified: lastModified,
      sortKey: item.creationDate,
      yearMonthKey: yearMonthKey
    };
  });

  return array.sort(jsonSorter("sortKey"));
};

const createTagString = (input: Array<String>) => {
  if (input != null) {
    return input.join(", ");
  } else {
    return "NA";
  }
};

const jsonSorter = (keyName: string) => {
  return function(a: any, b: any) {
    if (a[keyName] > b[keyName]) {
      return -1;
    } else if (a[keyName] < b[keyName]) {
      return 1;
    } else {
      return 0;
    }
  };
};
