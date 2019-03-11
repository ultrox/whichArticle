## Install

`npm install @ma.vu/which-article`

## What is this

Mini library to determine what word has which German article based on rules for
der/das/die.

Currently it determine article based on Seasons, Days, Month, and word endings.

### When word is a Day
```
const whichArticle = require('@ma.vu/which-article')
whichArticle('Freitag') 
/*
  { gender: 'der', msg: 'day_month' }
*/
```

### When word ends with endings typical for das articles
```javascript
const whichArticle = require('@ma.vu/which-article')
whichArticle('Mädchen') 
/*
  { gender: 'das', msg: 'endings', endings: ['chen', 'lein', 'ment', 'tum', 'ma', 'um'] }
*/
```
### When word can't be determined

```javascript
const whichArticle = require('@ma.vu/which-article')
whichArticle('Brief')
/*
  null
*/
```
## Sources
[DKH Sprachschule](https://www.youtube.com/watch?v=rixj4Hs61RY)
