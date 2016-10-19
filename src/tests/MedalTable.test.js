import React from 'react';
import { shallow } from 'enzyme';
import { MedalTable, MedalRow, MedalHeader } from '../components/MedalTable';
import * as testMedalCount from './medal-count-data';

it('renders MedalTable without crashing', () => {
  shallow(<MedalTable medalCount={[]} />);
});

it('renders MedalRow without crashing', () => {
  shallow(<MedalRow i={0} country={testMedalCount[0]} />);
});

it('renders MedalHeader without crashing', () => {
  shallow(<MedalHeader sortBy={() => {}} sortProp={'gold'} />);
});
