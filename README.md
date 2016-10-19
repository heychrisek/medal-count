# medal-count

This module shows up to 10 countries that have won the most medals at a given Olympic games. Live demo available [here](http://cek.io/medalcount/index.html).

It is a React component built using Redux for stage management. Each column of the table is sortable (on click of column header), using Ramda.js functions and comparators for sorting (tie breakers, etc.).

Internally, the module accepts parameters for element ID, sort, and medal count data. An Ajax request is made for the data on page load (`componentDidMount`).

## Usage

`git clone` this repo, `npm install`, and `npm run start` to serve the component locally.

## Functionality

The table will sort based on column headers.

![medal-count.gif](https://s18.postimg.org/bbop6ptqx/medal_count.gif)

The table is responsive at a breakpoint of 225px screen size, using an `@media` query.

![responsive.gif](https://s18.postimg.org/jilac197d/responsive.gif)

## Tests

Tests can be run using `npm run test`. Full unit testing of helper/sort methods and initial component testing using Enzyme.

![test_cov.png](https://s18.postimg.org/5dfha8061/test_cov.png)
