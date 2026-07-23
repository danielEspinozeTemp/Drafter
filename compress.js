/**
 * compress.js — URL-safe data encoding utility
 * Shared by index.html (creator) and sign.html (client signing page)
 * Exposes: compressData(obj) → string, decompressData(str) → object
 *
 * Uses built-in btoa/atob with URL-safe Base64 encoding.
 * No external libraries needed. Works in all modern browsers.
 */
(function () {

  /**
   * Compress a JS object into a URL-safe Base64 string.
   * @param {Object} obj - The data object to encode
   * @returns {string|null} - URL-safe string or null on failure
   */
  window.compressData = function (obj) {
    try {
      var json = JSON.stringify(obj);
      var b64 = btoa(unescape(encodeURIComponent(json)));
      // Make URL-safe: replace + with -, / with _, remove trailing =
      return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    } catch (e) {
      console.error('compressData error:', e);
      return null;
    }
  };

  /**
   * Decompress a URL-safe Base64 string back into a JS object.
   * @param {string} str - The URL-safe encoded string
   * @returns {Object|null} - The original data object or null on failure
   */
  window.decompressData = function (str) {
    try {
      // Restore standard Base64: replace - with +, _ with /, add padding
      var b64 = str.replace(/-/g, '+').replace(/_/g, '/');
      while (b64.length % 4) b64 += '=';
      var json = decodeURIComponent(escape(atob(b64)));
      return JSON.parse(json);
    } catch (e) {
      console.error('decompressData error:', e);
      return null;
    }
  };

})();
