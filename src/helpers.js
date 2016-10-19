import * as R from 'ramda';

const getTotalMedals = (country) => R.sum([country.gold, country.silver, country.bronze])

const goldCmp = R.comparator((a, b) => a.gold > b.gold);
const silverCmp = R.comparator((a, b) => a.silver > b.silver);
const bronzeCmp = R.comparator((a, b) => a.bronze > b.bronze);
const totalCmp = R.comparator((a, b) => getTotalMedals(a) > getTotalMedals(b));

const sortByTotal = (medalCount) => R.sort(R.either(totalCmp, goldCmp), medalCount);
const sortByGold = (medalCount) => R.sort(R.either(goldCmp, silverCmp), medalCount);
const sortBySilver = (medalCount) => R.sort(R.either(silverCmp, goldCmp), medalCount);
const sortByBronze = (medalCount) => R.sort(R.either(bronzeCmp, goldCmp), medalCount);

module.exports = {
  getTotalMedals: getTotalMedals,
  sortByTotal: sortByTotal,
  sortByGold: sortByGold,
  sortBySilver: sortBySilver,
  sortByBronze: sortByBronze,
  sortByProp: (prop, medalCount) => {
    switch (prop) {
      case 'total':
        return sortByTotal(medalCount);
      case 'gold':
        return sortByGold(medalCount);
      case 'silver':
        return sortBySilver(medalCount);
      case 'bronze':
        return sortByBronze(medalCount);
      default:
        return sortByGold(medalCount);
    }
  }
}