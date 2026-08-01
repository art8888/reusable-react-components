const regexBic = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/; // validate BIC
const regexIban = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{11,30}$/; // validate IBAN (LT4600000...)
const regexIsoDate = /^(\d{4})-(\d{2})-(\d{2})$/; // validater date in ISO
const regexAmount = /^\d+(\.\d{1,2})?$/; // validate decimals in amount