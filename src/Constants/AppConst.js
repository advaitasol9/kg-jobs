export const API_ENV = {
  DEV: 'DEV',
  QA: 'QA',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
  LOAD_TEST: 'LOAD_TEST',
};

export const apiEnviornment = API_ENV.DEV;

export function getBaseUrl() {
  switch (apiEnviornment) {
    case API_ENV.STAGING:
      return 'https://example-stage.kiwi-internal.com';

    case API_ENV.QA:
      return 'https://example-qa.kiwi-internal.com';

    case API_ENV.DEV:
      return 'https://example-dev.kiwi-internal.com';

    case API_ENV.LOAD_TEST:
      return 'https://example-loadtest.kiwi-internal.com';

    default:
      return 'https://example-dev.kiwi-internal.com';
  }
}
