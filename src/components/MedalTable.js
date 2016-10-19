import React from 'react';
import * as R from 'ramda';
import '../styles/Table.css';
import '../styles/Flag.css';
import '../styles/MedalCount.css';
import {getTotalMedals} from '../helpers';
const mapIndexed = R.addIndex(R.map);

const propSelectedClass = (selected, prop) => {
  return selected === prop ? 'Table-cell--selected' : ''
};

export const MedalTable = ({medalCount, numMedals, sortBy, sortProp}) => (
  <div className="Table">
    <MedalHeader sortBy={sortBy} sortProp={sortProp} />
    {mapIndexed((country, i) => {
      return <MedalRow key={i} i={i} country={country} />
    }, R.take(numMedals, medalCount))}
  </div>
);

export const MedalHeader = ({sortBy, sortProp}) => (
  <div className="Table-row Table-header">
    <div className="Table-cell Table-index"></div>
    <div className="Table-cell Table-flagCell"></div>
    <div className="Table-cell Table-paddingRight"></div>
    <div className={`Table-cell Table-cellSortable ${propSelectedClass(sortProp, 'gold')}`}
         onClick={sortBy.bind(null, 'gold')}>
      <div className="MedalCount-medal" id="gold" />
    </div>
    <div className={`Table-cell Table-cellSortable ${propSelectedClass(sortProp, 'silver')}`}
         onClick={sortBy.bind(null, 'silver')}>
      <div className="MedalCount-medal" id="silver" />
    </div>
    <div className={`Table-cell Table-cellSortable ${propSelectedClass(sortProp, 'bronze')}`}
         onClick={sortBy.bind(null, 'bronze')}>
      <div className="MedalCount-medal" id="bronze" />
    </div>
    <div className={`Table-cell Table-cellSortable Table-totalCell ${propSelectedClass(sortProp, 'total')}`}
         onClick={sortBy.bind(null, 'total')}>Total</div>
  </div>
)

export const MedalRow = ({country, i}) => (
  <div className="Table-row">
    <div className="Table-cell Table-index">{R.inc(i)}</div>
    <div className="Table-cell Table-flagCell">
      <div className="Flag" id={`Flag-${country.code}`} />
    </div>
    <div className="Table-cell Table-cellBold Table-paddingRight">{country.code}</div>
    <div className="Table-cell">{country.gold}</div>
    <div className="Table-cell">{country.silver}</div>
    <div className="Table-cell">{country.bronze}</div>
    <div className="Table-cell Table-cellBold Table-totalCell">
      {getTotalMedals(country)}
    </div>
  </div>
);