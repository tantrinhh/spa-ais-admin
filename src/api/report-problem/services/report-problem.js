'use strict';

/**
 * report-problem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::report-problem.report-problem');
