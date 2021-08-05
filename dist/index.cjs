#!/usr/bin/env node
'use strict';

const { NODE_ENV } = process.env;
if (NODE_ENV === 'production')
  module.exports = require('./react-spotify-embed.production.min.cjs');
else
  module.exports = require('./react-spotify-embed.development.cjs');
