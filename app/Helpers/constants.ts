const genders = {
  GENDER_MALE: 'GENDER_MALE',
  GENDER_FEMALE: 'GENDER_FEMALE',
  GENDER_OTHER: 'GENDER_OTHER'
}

const DEFAULT_PER_PAGE = 10

// EUA States (not all are included, however)
const availableStates = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'OH',
  'OK',
  'OR',
  'PA',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WI',
  'WY'
]

export default {
  ...genders,
  availableStates,
  DEFAULT_PER_PAGE
}
