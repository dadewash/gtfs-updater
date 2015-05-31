'use strict';
var every = require('every-moment');
var downloader = require('gtfs/scripts/download');

var config = require('./config.js');
var INTERVAL_DAYS = process.env.INTERVAL_DAYS || 1;
INTERVAL_DAYS = parseInt(INTERVAL_DAYS);

function update () {
  console.log('Starting job.');
  downloader(config, function () {
    console.log('End of the job.');
  });
}

if (process.argv[2] === 'now') {
  update();
}else{
  every(INTERVAL_DAYS, 'days', update);
  console.log('Scheduler started');
}
