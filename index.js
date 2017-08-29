/**
 * Object-KNN - KNN for general js object.
 *
 * @author Phoenix Song <github.com/azusa0127>
 * @version 0.0.1
 */

/**
 * Default error function provided.
 * Logic:
 *  - src and tar in different type -> 2.
 *  - src/tar are both null/undefined/false -> 0.
 *  - src and tar in a non-object type -> src === tar ? 0 : 1.
 *  - src is an array:
 *    src.length !== tar.length -> the difference between src.length and tar.length times 2.
 *    else the element-wise summation of the errors.
 *  - src and tar are object:
 *    - recusively sum the properti-wise of the errors.
 *    - if inclusiveProps is defined, only includes the inclusiveProps.
 *    - if exclusiveProps is defined, skip all properties with name in exclusiveProps.
 *
 * @param {any} src
 * @param {any} tar
 * @param {object} [{ inclusiveProps, exclusiveProps }={}] inclusiveProps indicates the particular
 * @returns {number} Discripency between src and tar as a number.
 */
const default_error_function = (src, tar, { inclusiveProps, exclusiveProps } = {}) => {
  if (typeof src !== typeof tar) return 2;
  if (!src) return 0;
  if (typeof src !== `object`) return src === tar ? 0 : 1;
  if (inclusiveProps) inclusiveProps = inclusiveProps.slice();
  if (Array.isArray(exclusiveProps)) exclusiveProps = new Set(exclusiveProps);
  if (Array.isArray(src)) {
    if (!Array.isArray(tar)) return src.length * 2;
    if (src.length !== tar.length) return Math.abs(src.length - tar.length) * 2;
    return src.reduce(
      (err, v, i) => err + default_error_function(v, tar[i], { inclusiveProps, exclusiveProps }),
      0,
    );
  }
  const includeKey = inclusiveProps && inclusiveProps.length ? inclusiveProps.shift() : false;
  return Object.keys(src)
    .filter(k => (includeKey ? k === includeKey : exclusiveProps ? !exclusiveProps.has(k) : true))
    .reduce(
      (err, key) =>
        err + default_error_function(src[key], tar[key], { inclusiveProps, exclusiveProps }) * 10,
      0,
    );
};

/**
 * Find the k nearest neighbour in trainnedSet for src object.
 *
 * @param {object} src
 * @param {object[]} trainnedSet
 * @param {any} [{ k = 3, error_function = default_error_function, inclusiveProps, exclusiveProps, ...rest }={}] Options:
 *  {number} [k = 3] number of best result to keep.
 *  {(any, any, object?) => number} [error_function = default_error_function] error function that takes any type of 2 inputs (with an optional object param as the option) and returns number.
 *  {...any} [rest] any option properties you'd like to pass into the error function.
 * @returns {{error:number, value:any}[]} best k match of the objects.
 */
const k_nearest_neighbour = (
  src,
  trainnedSet,
  { k = 3, error_function = default_error_function, inclusiveProps, exclusiveProps, ...rest } = {},
) => {
  if (!trainnedSet || !trainnedSet.length) throw new Error(`Invalid trainning set!`);
  const compareFn = ({ error: a }, { error: b }) => a - b;
  const bestk = [...Array(k)].map(() => ({ error: Infinity, value: null }));
  for (const tar of trainnedSet) {
    const err = error_function(src, tar, { inclusiveProps, exclusiveProps, ...rest });
    if (err < bestk[k - 1].error) {
      bestk[k - 1].error = err;
      bestk[k - 1].value = tar;
      bestk.sort(compareFn);
    }
  }
  return bestk.filter(({ error }) => error !== Infinity);
};

/** @alias k_nearest_neighbour
 *  @see k_nearest_neighbour
 */
const knn = k_nearest_neighbour;

/**
 * knn with k = 1, @see k_nearest_neighbour
 *
 * @param {object} src
 * @param {object[]} trainnedSet
 * @param {any} [{ error_function = default_error_function, inclusiveProps, exclusiveProps, ...rest }={}] Options:
 *  {(any, any, object?) => number} [error_function = default_error_function] error function that takes any type of 2 inputs (with an optional object param as the option) and returns number.
 *  {...any} [rest] any option properties you'd like to pass into the error function.
 * @returns {error:number, value:any} best match of the objects.
 */
const nn = (
  src,
  trainnedSet,
  { error_function = default_error_function, inclusiveProps, exclusiveProps, ...rest } = {},
) =>
  k_nearest_neighbour(src, trainnedSet, {
    error_function,
    inclusiveProps,
    exclusiveProps,
    ...rest,
    k: 1,
  })[0];

module.exports = { default_error_function, k_nearest_neighbour, knn, nn };
