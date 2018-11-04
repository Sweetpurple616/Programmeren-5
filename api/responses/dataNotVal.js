/**
 * error.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.error();
 *     // -or-
 *     return res.error(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'error'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function dataNotVal(errorMSG) {

  var req = this.req;
  var res = this.res;
  sails.log(errorMSG);
  res.view('login', { errorMSG });


};


