/**
 * Return true, if @param n is valid number
 *
 * @param n is number
 */
export function isNonEmptyNumber(n) {
  if (n === undefined || n == null) {
    return false;
  }
  return true;
}

/**
 * Return true, if @param s is valid string
 *
 *  @param s is string
 */
export function isNonEmptyString(s) {
  if (s === undefined || s == null || s === '') {
    return false;
  }
  return true;
}
