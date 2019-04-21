import * as React from 'react';
import { StoreState, FeatureFlagData } from '../types';
import { CSVLink } from 'react-csv';

interface DownloadButtonProps {
  filteredList: StoreState['filteredList'];
}

const DownloadButton = ({ filteredList }: DownloadButtonProps) => {
  return (
    <CSVLink
      data={filteredList.map(item => {
        return {
          flagName: item.flagName,
          flagType: item.flagType,
          on: item.on ? 'Active' : 'Inactive',
          archived: item.archived ? 'Yes' : 'No',
          tags: item.tags,
          createdBy: item.createdBy,
          createdDate: item.createdDate,
          lastModified: item.lastModified
        };
      })}
      filename={'flag-list.csv'}
      className='btn btn-custom'
      target='_blank'
    >
      CSV Download
    </CSVLink>
  );
};

export default DownloadButton;
