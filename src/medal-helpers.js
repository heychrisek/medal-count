import * as R from 'ramda';

const getTotalMedals = (country) => R.sum([country.gold, country.silver, country.bronze]);

const variadicEither = (head, ...tail) => R.reduce(R.either, head, tail);

const goldCmp = R.comparator((a, b) => a.gold > b.gold);
const silverCmp = R.comparator((a, b) => a.silver > b.silver);
const bronzeCmp = R.comparator((a, b) => a.bronze > b.bronze);
const totalCmp = R.comparator((a, b) => getTotalMedals(a) > getTotalMedals(b));

const sortByTotal = (medalCount) => R.sort(variadicEither(totalCmp, goldCmp, silverCmp, bronzeCmp), medalCount);
const sortByGold = (medalCount) => R.sort(variadicEither(goldCmp, silverCmp, bronzeCmp, totalCmp), medalCount);
const sortBySilver = (medalCount) => R.sort(variadicEither(silverCmp, goldCmp, bronzeCmp, totalCmp), medalCount);
const sortByBronze = (medalCount) => R.sort(variadicEither(bronzeCmp, goldCmp, silverCmp, totalCmp), medalCount);

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