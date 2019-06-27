'use strict';

/**
 * Module dependencies
 */

// Native
const path = require('path');

// Externals
const co = require('co');
const Pug = require('koa-pug')

/**
 * PUG / JADE hook
 */

module.exports = function (strapi) {
  const hook = {

    /**
     * Default options
     */

    defaults: {
      app: strapi.app,
      viewPath: path.join(strapi.config.appPath, strapi.config.paths.views),
      ext: '.pug',
      debug: true,
      pretty: false,
      compileDebug: false,
      noCache: true,
      locals: {},
      basedir: path.join(strapi.config.appPath, strapi.config.paths.views),
      helperPath: []
    },

    /**
     * Initialize the hook
     */

    initialize: cb => {
      
      // Force cache mode in production
      if (strapi.config.environment === 'production') {
        strapi.config.hook.settings['strapi-hook-pug'].noCache = false;
      }
      
      const pug = new Pug(strapi.config.hook.settings['strapi-hook-pug']);
      strapi.app.context.render = co.wrap(pug.render);
      
      cb();
    }
  };

  return hook;
};