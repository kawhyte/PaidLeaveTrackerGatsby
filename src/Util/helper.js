var date_fns = require('date-fns')

const state = {
  AL: {
    name: 'Alabama',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_Alabama.svg',
  },
  AK: {
    name: 'Alaska',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_Alaska.svg',
  },
  AZ: {
    name: 'Arizona',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_Arizona.svg',
  },
  AR: {
    name: 'Arkansas',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_Arkansas.svg',
  },
  CA: {
    name: 'California',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505245/flags/Flag_of_California.svg',
  },
  CO: {
    name: 'Colorado',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_Colorado.svg',
  },
  CT: {
    name: 'Connecticut',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505246/flags/Flag_of_Connecticut.svg',
  },
  DE: {
    name: 'Delaware',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505247/flags/Flag_of_Delaware.svg',
  },
  DC: {
    name: 'D.C.',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505261/flags/Flag_of_the_District_of_Columbia.svg',
  },
  FL: {
    name: 'Florida',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505247/flags/Flag_of_Florida.svg',
  },
  GA: {
    name: 'Georgia',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505246/flags/Flag_of_Georgia__U.S._state.svg',
  },
  HI: {
    name: 'Hawaii',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505246/flags/Flag_of_Hawaii.svg',
  },
  ID: {
    name: 'Idaho',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505247/flags/Flag_of_Idaho.svg',
  },
  IL: {
    name: 'Illinois',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505249/flags/Flag_of_Illinois.svg',
  },
  IN: {
    name: 'Indiana',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505249/flags/Flag_of_Indiana.svg',
  },
  IA: {
    name: 'Iowa',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505249/flags/Flag_of_Iowa.svg',
  },
  KS: {
    name: 'Kansas',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505249/flags/Flag_of_Kansas.svg',
  },
  KY: {
    name: 'Kentucky',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505249/flags/Flag_of_Kentucky.svg',
  },
  LA: {
    name: 'Louisiana',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505249/flags/Flag_of_Louisiana.svg',
  },
  ME: {
    name: 'Maine',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505251/flags/Flag_of_Maine.svg',
  },
  MD: {
    name: 'Maryland',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505251/flags/Flag_of_Maryland.svg',
  },
  MA: {
    name: 'Massachusetts',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505251/flags/Flag_of_Massachusetts.svg',
  },
  MI: {
    name: 'Michigan',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505251/flags/Flag_of_Michigan.svg',
  },
  MN: {
    name: 'Minnesota',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505251/flags/Flag_of_Minnesota.svg',
  },
  MS: {
    name: 'Mississippi',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505253/flags/Flag_of_Mississippi.svg',
  },
  MO: {
    name: 'Missouri',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505253/flags/Flag_of_Missouri.svg',
  },
  MT: {
    name: 'Montana',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505253/flags/Flag_of_Montana.svg',
  },
  NE: {
    name: 'Nebraska',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505254/flags/Flag_of_Nebraska.svg',
  },
  NV: {
    name: 'Nevada',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505254/flags/Flag_of_Nevada.svg',
  },
  NH: {
    name: 'New Hampshire',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505255/flags/Flag_of_New_Hampshire.svg',
  },
  NJ: {
    name: 'New Jersey',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505256/flags/Flag_of_New_Jersey.svg',
  },
  NM: {
    name: 'New Mexico',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505256/flags/Flag_of_New_Mexico.svg',
  },
  NY: {
    name: 'New York',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505256/flags/Flag_of_New_York.svg',
  },
  NC: {
    name: 'North Carolina',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505256/flags/Flag_of_North_Carolina.svg',
  },
  ND: {
    name: 'North Dakota',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505256/flags/Flag_of_North_Dakota.svg',
  },
  OH: {
    name: 'Ohio',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505257/flags/Flag_of_Ohio.svg',
  },
  OK: {
    name: 'Oklahoma',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505259/flags/Flag_of_Oklahoma.svg',
  },
  OR: {
    name: 'Oregon',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505259/flags/Flag_of_Oregon.svg',
  },
  PA: {
    name: 'Pennsylvania',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505259/flags/Flag_of_Pennsylvania.svg',
  },
  RI: {
    name: 'Rhode Island',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505259/flags/Flag_of_Rhode_Island.svg',
  },
  SC: {
    name: 'South Carolina',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505259/flags/Flag_of_South_Carolina.svg',
  },
  SD: {
    name: 'South Dakota',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505259/flags/Flag_of_South_Dakota.svg',
  },
  TN: {
    name: 'Tennessee',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505261/flags/Flag_of_Tennessee.svg',
  },
  TX: {
    name: 'Texas',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505261/flags/Flag_of_Texas.svg',
  },
  UT: {
    name: 'Utah',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505261/flags/Flag_of_Utah.svg',
  },
  VT: {
    name: 'Vermont',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505261/flags/Flag_of_Vermont.svg',
  },
  VA: {
    name: 'Virginia',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505262/flags/Flag_of_Virginia.svg',
  },
  WA: {
    name: 'Washington',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505263/flags/Flag_of_Washington.svg',
  },
  WV: {
    name: 'West Virginia',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505263/flags/Flag_of_West_Virginia.svg',
  },
  WI: {
    name: 'Wisconsin',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505263/flags/Flag_of_Wisconsin.svg',
  },
  WY: {
    name: 'Wyoming',
    flag:
      'https://res.cloudinary.com/babyhulk/image/upload/v1584505263/flags/Flag_of_Wyoming.svg',
  },
  ALL: { name: 'View All States', flag: 'Flag_of_Wyoming.svg' },
}

let statusColor = {
  filing: {
    name: 'bill is filed (where this is a separate action from introduction)',
    color: 'bg-yellow',
  },
  introduction: {
    name: 'introduced, typically the first action',
    color: 'bg-yellow',
  },
  'reading-1': {
    name: 'first reading (often same as introduction)',
    color: 'bg-yellow',
  },
  'reading-2': { name: 'second reading', color: 'bg-yellow' },
  'reading-3': {
    name: 'third reading (often same as passage)',
    color: 'bg-yellow',
  },
  passage: { name: 'bill is passed by the chamber', color: 'bg-yellow' },
  failure: {
    name: 'bill fails to proceed from the chamber',
    color: 'bg-light-red',
  },
  withdrawal: { name: 'bill is withdrawn', color: 'bg-light-pink' },
  substitution: {
    name: 'a substitution is made to the bill text',
    color: 'bg-yellow',
  },
  deferral: {
    name: 'consideration of the bill was deferred',
    color: 'bg-yellow',
  },
  receipt: {
    name: 'a bill was received by another chamber',
    color: 'bg-yellow',
  },
  referral: {
    name: 'a bill was sent somewhere for consideration',
    color: 'bg-light-pink',
  },
  'referral-committee': {
    name: 'a bill was sent to a committee for consideration',
    color: 'bg-light-pink',
  },
  'became-law': {
    name: 'the bill became law (through signature or inaction)',
    color: 'bg-light-green',
  },
  'amendment-introduction': {
    name: 'an amendment is introduced',
    color: 'bg-yellow',
  },
  'amendment-passage': { name: 'an amendment passes', color: 'bg-yellow' },
  'amendment-withdrawal': {
    name: 'an amendment is withdrawn',
    color: 'bg-yellow',
  },
  'amendment-failure': {
    name: 'an amendment fails to pass',
    color: 'bg-light-pink',
  },
  'amendment-amendment': {
    name: 'an amendment is amended',
    color: 'bg-yellow',
  },
  'amendment-deferral': {
    name: 'consideration of an amendment is deferred',
    color: 'bg-yellow',
  },
  'committee-passage': {
    name:
      'the bill passes the current committee (unknown outcome, typically favorble)',
    color: 'bg-yellow',
  },
  'committee-passage-favorable': {
    name: 'the bill passes the current committee favorably',
    color: 'bg-yellow',
  },
  'committee-passage-unfavorable': {
    name: 'the bill passes the current committee with an unfavorable report',
    color: 'bg-light-pink',
  },
  'committee-failure': {
    name: 'the bill fails to advance out of committee',
    color: 'bg-light-pink',
  },
  'executive-receipt': {
    name: 'the bill is sent to the governor',
    color: 'bg-light-green',
  },
  'executive-signature': {
    name: 'the governor signs the bill',
    color: 'bg-light-green',
  },
  'executive-veto': {
    name: 'the governor vetos the bill',
    color: 'bg-light-red',
  },
  'executive-veto-line-item': {
    name: 'the governor uses a line-item veto to strike part of a bill',
    color: 'bg-light-green',
  },
  'veto-override-passage': {
    name: 'a veto override vote occurred and succeeded',
    color: 'bg-light-green',
  },
  'veto-override-failure': {
    name: 'a veto override vote occurred and failed',
    color: 'bg-light-red',
  },
  null: {
    name: '(Pending) View state website',
    color: 'bg-light-yellow',
  },
}

let status = {
  'bill:introduced': {
    name: 'Introduced or prefiled',
    color: 'bg-blue',
    importance: 0,
  },
  'bill:passed': {
    name: 'Bill has passed a chamber',
    color: 'bg-yellow',
    importance: 1,
  },
  'bill:failed': {
    name: 'Failed to pass a chamber',
    color: 'bg-red',
    importance: 1,
  },
  'bill:withdrawn': {
    name: 'Withdrawn from consideration',
    color: 'bg-red',
    importance: 1,
  },
  'bill:veto_override:passed': {
    name: 'Chamber attempted a veto override and succeeded',
    color: 'bg-green',
    importance: 1,
  },
  'bill:veto_override:failed': {
    name: 'Chamber attempted a veto override and failed',
    color: 'bg-red',
    importance: 1,
  },
  'bill:reading:1': {
    name: 'Bill has undergone its first reading',
    color: 'bg-yellow',
    importance: 0,
  },
  'bill:reading:2': {
    name: 'Bill has undergone its second reading',
    color: 'bg-yellow',
    importance: 0,
  },
  'bill:reading:3': {
    name: 'Bill has undergone its third (or final) reading',
    color: 'bg-yellow',
    importance: 0,
  },
  'bill:filed': {
    name: 'Bill has been filed',
    color: 'bg-yellow',
    importance: 1,
  },
  'bill:substituted': {
    name: 'Bill has been replaced with a substituted wholesale',
    color: 'bg-yellow',
    importance: 0,
  },
  'governor:received': {
    name: 'Bill has been transmitted to the governor for consideration',
    color: 'bg-yellow',
    importance: 1,
  },
  'governor:signed': {
    name: 'Bill was signed into law by the governor',
    color: 'bg-green',
    importance: 1,
  },
  'governor:vetoed': {
    name: 'Bill has been vetoed by the governor',
    color: 'bg-red',
    importance: 1,
  },
  'governor:vetoed:line-item': {
    name: 'Governor has issued a partial veto',
    color: 'bg-light-yellow',
    importance: 1,
  },
  'amendment:introduced': {
    name: 'An amendment has been offered on the bill',
    color: 'bg-yellow',
    importance: 0,
  },
  'amendment:passed': {
    name: 'The bill has been amended',
    color: 'bg-light-yellow',
    importance: 0,
  },
  'amendment:failed': {
    name: 'An offered amendment has failed',
    color: 'bg-yellow',
    importance: 0,
  },
  'amendment:amended': {
    name: 'An offered amendment has been amended',
    color: 'bg-yellow',
    importance: 0,
  },
  'amendment:withdrawn': {
    name: 'An offered amendment has been withdrawn',
    color: 'bg-pink',
    importance: 0,
  },
  'amendment:tabled': {
    name: 'An amendment has been ‘laid on the table’',
    color: 'bg-yellow',
    importance: 0,
  },
  'committee:referred': {
    name: 'Bill referred to a committee',
    color: 'bg-yellow',
    importance: 0,
  },
  'committee:passed': {
    name: 'Bill has been passed out of a committee',
    color: 'bg-yellow',
    importance: 0,
  },
  'committee:passed:favorable': {
    name: 'Bill has been passed out of a committee with a favorable report',
    color: 'bg-yellow',
    importance: 0,
  },
  'committee:passed:unfavorable': {
    name: 'Bill has been passed out of a committee with an unfavorable report',
    color: 'bg-yellow',
    importance: 0,
  },
  'committee:failed': {
    name: 'Bill has failed to make it out of committee',
    color: 'bg-red',
    importance: 0,
  },

  null: {
    name: '(Pending) View state website',
    color: 'bg-light-yellow',
    importance: 0,
  },
}

let getBillIntroduction = (actions) => {
  const billIntroduction = actions.filter((h) => {
    return h.classification.some((v) => v === 'introduction')
  })

  billIntroduction.sort((a, b) => new Date(a.date) - new Date(b.date))

  if (billIntroduction.length > 0) {
    return billIntroduction
  } else {
    return null
  }
}

/// Format to Sentence Case
let sentenceCase = (string) => {
  let lowercaseTitle = string.toLowerCase()
  return lowercaseTitle[0].toUpperCase() + lowercaseTitle.substring(1)
}

////LOGIC TO CHECK IF BILL IS NEW //////
let isBillNew = (actions) => {
  const billIntroduction = getBillIntroduction(actions)
  const returnedActions = getBillActions(actions)
  const dateBillWasAdded =
    billIntroduction !== null
      ? billIntroduction[0].date.substring(0, 10)
      : returnedActions[returnedActions.length - 1].date

  const futureDate = date_fns.addDays(new Date(Date.now()), 15)

  const billDateDifference = date_fns.differenceInDays(
    futureDate,
    new Date(dateBillWasAdded)
  )

  return billDateDifference < 40 ? true : false
}

///LOGIC TO CHECK IF BILL IS MAJOR //////
let isUpdateMajor = (actions) => {
  const isMajorUpdate = actions.some(
    (value) =>
      value.classification.includes('executive-receipt') ||
      value.classification.includes('executive-veto') ||
      value.classification.includes('veto-override-passage') ||
      value.classification.includes('executive-veto-line-item') ||
      value.classification.includes('became-law') ||
      value.classification.includes('executive-signature') ||
      Object.values(value.description).includes('governor') ||
      Object.values(value.description).includes('executive')
  )

  return isMajorUpdate
}

///LOGIC TO CHECK IF BILL PASSED/FAILED //////
let isBillSignedByGovornor = (actions) => {
  let didBillPass = actions.some(
    (value) =>
      value.classification.includes('became-law') ||
      value.classification.includes('executive-signature')
  )

  return didBillPass
}

let didBillPassHouse = (actions) => {
  let houseBillPassed = actions.filter((h) => {
    let result =
      h.organization.classification.includes('lower') &&
      h.classification.some((v) => v === 'passage')

    return result
  })

  if (houseBillPassed.length > 0) {
    return houseBillPassed
  } else {
    return null
  }
}

let didBillPassSenate = (actions) => {
  let senateBillPassed = actions.filter((h) => {
    let result =
      h.organization.classification.includes('upper') &&
      h.classification.some((v) => v === 'passage')
    return result
  })

  if (senateBillPassed.length > 0) {
    return senateBillPassed
  } else {
    return null
  }
}

let didBillPassGovernor = (actions) => {
  let governorBillPassed = actions.filter((h) => {
    let result =
      (h.organization.classification.includes('executive') ||
        h.classification.includes('became-law') ||
        h.classification.includes('executive-signature') ||
        h.organization.classification.includes('legislature')) &&
      (h.classification.some((v) => v === 'passage') ||
        h.classification.some((v) => v === 'executive-signature') ||
        h.classification.includes((v) => v === 'executive-signature'))

    return result
  })

  if (governorBillPassed.length > 0) {
    return governorBillPassed
  } else {
    return null
  }
}


let didBillFailGovernor = (actions) => {
  let governorBillPassed = actions.filter((h) => {
    let result =
      h.classification.includes('executive-veto') ||
      h.classification.includes('veto-override-failure') ||
      h.classification.includes('committee-failure') ||
      h.classification.includes('withdrawal') ||
      h.classification.includes('failure') ||
      h.description.toLowerCase().includes('died in committee')


    return result
  })

  if (governorBillPassed.length > 0) {
    return governorBillPassed
  } else {
    return null
  }
}

let getBillActions = (actions) => {
  let lastAction = actions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  if (lastAction.length > 0) {
    return lastAction
  } else {
    return null
  }
}

module.exports = {
  state,
  status,
  statusColor,
  didBillPassGovernor,
  didBillFailGovernor,
  didBillPassSenate,
  didBillPassHouse,
  getBillIntroduction,
  sentenceCase,
  isBillNew,
  isUpdateMajor,
  isBillSignedByGovornor,
  getBillActions,
}
