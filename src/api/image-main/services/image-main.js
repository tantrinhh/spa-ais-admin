'use strict';

/**
 * image-main service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::image-main.image-main');
