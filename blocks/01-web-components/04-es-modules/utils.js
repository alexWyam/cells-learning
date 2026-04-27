/**
 * Formatea un nombre para mostrarlo con inicial mayúscula en cada palabra.
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
