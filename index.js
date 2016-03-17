/*!
 * base-project <https://github.com/jonschlinkert/base-project>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var project = require('project-name');

module.exports = function(fn) {
  return function plugin(app) {
    if (!isValidInstance(app, fn)) return;
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

    return plugin;
  };
};

function isValidInstance(app, fn) {
  fn = fn || app.options.validatePlugin;
  if (typeof fn === 'function' && !fn(app)) {
    return false;
  }
  if (app.isRegistered('base-project')) {
    return false;
  }
  if (app.isCollection || app.isView) {
    return false;
  }
  return true;
}
