'use strict';

/**
 * gci-main service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gci-main.gci-main');
