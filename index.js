/*!
 * base-project <https://github.com/jonschlinkert/base-project>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var project = require('project-name');

module.exports = function() {
  return function(app) {
    if (this.isRegistered('base-project')) return;
    var name;

    this.define('project', {
      configurable: true,
      enumerable: true,
      set: function(val) {
        name = val;
      },
      get: function() {
        return name || (name = project(this.cwd));
      }
    });
  };
};