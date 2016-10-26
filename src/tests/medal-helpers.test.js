import {getTotalMedals, sortByTotal, sortByGold, sortBySilver, sortByBronze, sortByProp} from '../medal-helpers';
import * as testMedalCount from './medal-count-data';

it('places NED before GER when sorting medal counts by gold', () => {
  const sortedByGold = sortByGold(testMedalCount.default);
  expect(sortedByGold[4].code).toEqual("NED");
  expect(sortedByGold[5].code).toEqual("GER");
});

it('places FRA before SWE when sorting medal counts by total', () => {
  const sortedByTotal = sortByTotal(testMedalCount.default);
  expect(sortedByTotal[7].code).toEqual("FRA");
  expect(sortedByTotal[8].code).toEqual("SWE");
});

it('places USA before NED and NED before SWE when sorting medal counts by silver', () => {
  const sortedBySilver = sortBySilver(testMedalCount.default);
  expect(sortedBySilver[3].code).toEqual("USA");
  expect(sortedBySilver[4].code).toEqual("NED");
  expect(sortedBySilver[5].code).toEqual("SWE");
});

it('places RUS before NED when sorting medal counts by bronze', () => {
  const sortedByBronze = sortByBronze(testMedalCount.default);
  expect(sortedByBronze[2].code).toEqual("RUS");
  expect(sortedByBronze[3].code).toEqual("NED");
});

it('gets the total medal count for a given country', () => {
  const testCountry = testMedalCount.default[0];
  const total = getTotalMedals(testCountry);
  expect(total).toEqual(testCountry.gold + testCountry.silver + testCountry.bronze);
});

it('sorts by a given prop', () => {
  const sortedByPropGold = sortByProp('gold', testMedalCount.default);
  const sortedByGold = sortByGold(testMedalCount.default);
  expect(sortedByPropGold).toEqual(sortedByGold);

  const sortedByPropSilver = sortByProp('silver', testMedalCount.default);
  const sortedBySilver = sortBySilver(testMedalCount.default);
  expect(sortedByPropSilver).toEqual(sortedBySilver);

  const sortedByPropBronze = sortByProp('bronze', testMedalCount.default);
  const sortedByBronze = sortByBronze(testMedalCount.default);
  expect(sortedByPropBronze).toEqual(sortedByBronze);

  const sortedByPropTotal = sortByProp('total', testMedalCount.default);
  const sortedByTotal = sortByTotal(testMedalCount.default);
  expect(sortedByPropTotal).toEqual(sortedByTotal);
});

it('defaults to sorting by gold', () => {
  const sortedByPropNull = sortByProp(null, testMedalCount.default);
  const sortedByGold = sortByGold(testMedalCount.default);
  expect(sortedByPropNull).toEqual(sortedByGold);
});