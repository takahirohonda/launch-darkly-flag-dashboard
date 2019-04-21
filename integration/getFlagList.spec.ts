import { getFlagList } from '../src/utils/getFlagList';
import * as JSON from 'circular-json';
import * as prettyjson from 'prettyjson';
import { Items } from '../src/utils/types/featureFlagDataModel';
import { formatResponse } from '../src/utils/formatResponse';
import { expect } from 'chai';

import { createSummaryData } from '../src/utils/createSummaryData';
import { createBarGraphData } from '../src/utils/createBarGraphData';

describe('Integration test for getFlagList()', () => {

  // it('should bring data', async () => {

  //   const data: Items = await getFlagList();

  //   // console.log(formatResponse(data))

  //   expect(data.items.length).to.be.gte(1);

  // })

  // it('should create summary data', async () => {

  //   const data: Items = await getFlagList();

  //   const flagList = formatResponse(data);

  //   console.log(flagList)

  //   console.log(createSummaryData(flagList))

  // })

  it('should create bar graph data', async() => {
    const data: Items = await getFlagList();

    const flagList = formatResponse(data);

    console.log(flagList);
    console.log(createBarGraphData(flagList));
  });
});