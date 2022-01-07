const REGEX = {
  EMAIL_REGEX:
    /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,50}))$/,
  WEB_URL_REGEX:
    /^((https:|HTTPS:)\/\/((www|WWW)\.)?|(www|WWW)\.|(http:|HTTP:)\/\/((www|WWW)\.)?){1}[a-zA-Z0-9.!@#$%^&*()_+\-=?<>{}]+\.([a-zA-Z]){2}/,
  MOBILE_REGEX: /^([6-9][0-9]{9})$/,
  NAME_ALPHABET: '/^[A-Za-z]+$/',
};

export default REGEX;
