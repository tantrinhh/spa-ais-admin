'use strict';

/**
 * news-main service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-main.news-main');
