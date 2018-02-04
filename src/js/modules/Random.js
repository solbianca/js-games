'use strict';

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {number} a random integer
 */
export function int(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}