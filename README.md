## Install

`npm install @ma.vu/whichArticle`

## What is this

Mini library to determine what word has which German article based on rules for
der/das/die.

Currently it determine article based on Seasons, Days, Month, and word endings.

### When word is a Day
```javascript
const whichArticle = require('@ma.vu/whichArticle')
whichArticle('Freitag') 
/*
  { gender: 'der', msg: 'day_month' }
*/
```

### When word ends with endings typical for das articles
```javascript
whichArticle('Mädchen') 
const whichArticle = require('@ma.vu/whichArticle')
/*
  { gender: 'das', msg: 'endings', endings: ['chen', 'lein', 'ment', 'tum', 'ma', 'um'] }
*/
```
### When word can't be determined

```javascript
const whichArticle = require('@ma.vu/whichArticle')
whichArticle('Brief')
/*
  null
*/
```

