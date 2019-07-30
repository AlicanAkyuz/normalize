const normalize = require('../normalize');

const applicationData = {
  steps: {
    confidence: 0,
    value: 0
  },
  country: {
    confidence: 1,
    value: 'DE'
  },
  zipCode: {
    confidence: 1,
    value: '14566'
  },
  bmi: {
    confidence: 1,
    value: 200000
  },
  score: {
    confidence: 1,
    value: 4567
  },
  birthCountry: {
    confidence: 1,
    value: 'AW'
  },
  'iban-code': {
    confidence: 1,
    value: 'DE238592835792831233'
  },
  companyName: {
    confidence: 1,
    value: 'BMW'
  },
  companyType: {
    confidence: 1,
    value: 1
  },
  firstName: {
    confidence: 1,
    value: 'John'
  },
  nationality: {
    confidence: 1,
    value: 'DE'
  },
  lifeInsurance: {
    confidence: 0,
    value: null
  },
  familyStatus: {
    confidence: 1,
    value: 1
  },
  lastName: {
    confidence: 1,
    value: 'Stark'
  },
  role: {
    confidence: 1,
    value: '1'
  },
  gender: {
    confidence: 1,
    value: 1
  },
  city: {
    confidence: 1,
    value: 'Berlin'
  },
  existingCredits: {
    confidence: 1,
    value: [
      {
        creditTransfer: {
          confidence: 0.0,
          value: false
        },
        creditType: {
          confidence: 1.0,
          value: 2
        }
      },
      {
        creditType: {
          confidence: 1.0,
          value: 2
        }
      }
    ]
  },
  street: {
    confidence: 1,
    value: 'Alexanderplatz'
  }
};

const expectedFormValues = {
  steps: 0,
  country: 'DE',
  zipCode: '14566',
  bmi: 200000,
  score: 4567,
  birthCountry: 'AW',
  'iban-code': 'DE238592835792831233',
  companyName: 'BMW',
  companyType: 1,
  firstName: 'John',
  nationality: 'DE',
  lifeInsurance: null,
  familyStatus: 1,
  lastName: 'Stark',
  role: '1',
  gender: 1,
  city: 'Berlin',
  existingCredits: [
    {
      creditTransfer: false,
      creditType: 2
    },
    {
      creditType: 2
    }
  ],
  street: 'Alexanderplatz'
};

test('returns the expected form values provided in the example', () =>
  expect(normalize(applicationData)).toEqual(expectedFormValues));

test('returns an error message when no data is provided', () =>
  expect(normalize()).toEqual({
    err: 'Normalize function expects a data object'
  }));

test('never returns undefined when data provided', () =>
  expect(
    normalize({
      steps: {
        confidence: 0
      }
    })
  ).toBeDefined());

test('never returns undefined when data is not provided', () =>
  expect(normalize()).toBeDefined());

test('always returns a truthy value', () => expect(normalize()).toBeTruthy());
