// @ts-check

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {'admin' | 'viewer'} role
 */

/**
 * Formatea un nombre con inicial mayúscula en cada palabra.
 * @param {string} name
 * @returns {string}
 */
export const formatName = (name) =>
  name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

/**
 * Devuelve las iniciales de un nombre (máximo 2 caracteres).
 * @param {string} name
 * @returns {string}
 */
export const getInitials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('');

/**
 * Agrupa un array de elementos por el valor de una clave.
 * @template T
 * @param {T[]} array
 * @param {(item: T) => string} keyFn - Función que extrae la clave de agrupación
 * @returns {Record<string, T[]>}
 */
export const groupBy = (array, keyFn) =>
  array.reduce((acc, item) => {
    const key = keyFn(item);
    acc[key] = acc[key] ?? [];
    acc[key].push(item);
    return acc;
  }, /** @type {Record<string, T[]>} */ ({}));
