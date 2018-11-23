# lichess-opening-explorer
Wrapper for the Lichess Opening Explorer public API written in node.js

## Usage
```js
const LichessOpeningExporer = require('lichess-opening-explorer');
let explorer = new LichessOpeningExporer();

explorer.analyze('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', {
    master: false,
    variant: 'standard',
    speeds: ['blitz', 'rapid', 'classical'],
    ratings: [2000, 2200, 2500]
  })
  .then(analysis => {
    // do something genious
  })
  .catch(err => {
    console.error(err);
  });
```

name | type | default | description
--- | --- | --- | ---
**master** | boolean | false | whether you want to filter masters games
**fen** | string | required | FEN of the position to look up
**variant** | string | required | one of `standard`, `antichess`, `chess960`, `horde`, `racingKings`, `threeCheck`, `atomic`, `crazyhouse` or `kingOfTheHill`
**speeds[]** | list | none | `bullet`, `blitz`, `rapid`, and/or `classical`
**ratings[]** | list | none | rating groups ranging from their value to the next higher group: `1600`, `1800`, `2000`, `2200` and `2500` to unlimited

The Lichess server will render a json object like the following:

```
{ white: 11744296,
  draws: 1504402,
  black: 10888977,
  moves:
   [ { uci: 'e2e4',
       san: 'e4',
       white: 5903282,
       draws: 737962,
       black: 5675329,
       averageRating: 2115 },
     { uci: 'd2d4',
       san: 'd4',
       white: 3694010,
       draws: 489599,
       black: 3351940,
       averageRating: 2126 },
     { uci: 'g1f3',
       san: 'Nf3',
       white: 828210,
       draws: 109023,
       black: 659688,
       averageRating: 2139 },
     { uci: 'c2c4',
       san: 'c4',
       white: 637454,
       draws: 83480,
       black: 553208,
       averageRating: 2125 },
     { uci: 'f2f4',
       san: 'f4',
       white: 122785,
       draws: 15239,
       black: 124377,
       averageRating: 2096 },
      ...
     { uci: 'g2g4',
       san: 'g4',
       white: 21904,
       draws: 2366,
       black: 24138,
       averageRating: 2097 } ],
  averageRating: 2121,
  recentGames:
   [ { id: 'om9zBaOt',
       winner: 'black',
       speed: 'blitz',
       white: [Object],
       black: [Object],
       year: 2018 },
      ...
     { id: 'ekRTkDVA',
       winner: 'black',
       speed: 'blitz',
       white: [Object],
       black: [Object],
       year: 2018 } ],
  topGames:
   [ { id: '3JaJlJ9M',
       winner: 'black',
       speed: 'blitz',
       white: [Object],
       black: [Object],
       year: 2016 },
      ...
     { id: 'rh60jEpN',
       winner: 'black',
       speed: 'blitz',
       white: [Object],
       black: [Object],
       year: 2016 } ] }
```
