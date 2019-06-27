'use strict';

/**
 * Module dependencies
 */

// Native
const path = require('path');

// Externals
const co = require('co');
const Pug = require('koa-pug')
const pugRender = require('pug-render')

/**
 * PUG / JADE hook
 */

module.exports = function (strapi) {
  const hook = {

    /**
     * Default options
     */

    defaults: {
      // viewPath: dpath.join(strapi.config.appPath, strapi.config.paths.views),
      debug: true,
      cache: false,
      ext: '.pug',
      locals: {},
      app: strapi.app
    },

    /**
     * Initialize the hook
     */

    initialize: cb => {
      
      // Force cache mode in production
      if (strapi.config.environment === 'production') {
        strapi.config.hook.settings['strapi-hook-pug'].cache = true;
      }
      
      const render = pugRender(path.join(strapi.config.appPath, strapi.config.paths.views), strapi.config.hook.settings['strapi-hook-pug'])
      
      strapi.app.context.render = co.wrap(render);
      
      cb();
    }
  };

  return hook;
};