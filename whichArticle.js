const days = [
  'montag',
  'dienstag',
  'mittwoch',
  'donnerstag',
  'freitag',
  'samstag',
  'sonntag',
]

const months = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
]
const seasons = ['Frühling', 'Sommer', 'Herbst', 'Winter']

const derEndings = ['or', 'ling', 'ig', 'ner', 'smus', 'ich']
const dieEndings = [
  'ung',
  'ie',
  'ei',
  'keit',
  'heit',
  'schaft',
  'tät',
  'ik',
  'tion',
]

const dasEndings = ['chen', 'lein', 'ment', 'tum', 'ma', 'um']

const endings = { die: dieEndings, das: dasEndings, der: derEndings }

const genEndingsPattern = str => `\\w+${str.toLowerCase()}$`
const genDayMonthPattern = str => `${str.toLowerCase().trim()}`

function factoryEndings(arr) {
  return {
    msg: 'endings',
    list: arr,
    genFn: genEndingsPattern,
  }
}

function factoryDayMonth(msg, genFn, ...arr) {
  var explodeArr = arr => {
    const _arr = []
    arr.forEach(arr => void _arr.push(...arr))
    return _arr
  }

  const list = Array.isArray(arr[0]) ? explodeArr(arr) : arr

  return {
    msg,
    list,
    genFn,
  }
}

const genders = [
  {
    name: 'der',
    patterns: [
      factoryEndings(derEndings),
      factoryDayMonth('day_month', genDayMonthPattern, months, days),
      {
        msg: 'season',
        list: [...seasons],
        genFn: genDayMonthPattern,
      },
    ],
  },
  {
    name: 'die',
    patterns: [factoryEndings(dieEndings)],
  },
  {
    name: 'das',
    patterns: [factoryEndings(dasEndings)],
  },
]

function whichArticle(word) {
  // genders arr [Obj,Obj, Obj]
  //first loop to loop over der/die/das obj
  for (let i = 0; i < genders.length; i++) {
    const der = genders[i]
    const gender = der.name
    const patterns = der.patterns //arr
    // second loop to try find potencial match
    for (let j = 0; j < patterns.length; j++) {
      const { genFn, list, msg } = patterns[j]
      const regexPattern = list.map(genFn)
      const reg = new RegExp(list.join('|'), 'i')
      // we have a match return obj
      if (reg.test(word.toLowerCase().trim())) {
        const result = { gender, msg }
        // not for sessons & day_month
        if (msg === 'endings') {
          result.endings = endings[gender]
        }
        return result
      }
    }
  }
  return null
}
module.exports = {
  whichArticle,
  derEndings,
  dieEndings,
  dasEndings,
  days,
  seasons,
}
