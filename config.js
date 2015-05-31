if (process.env.NODE_ENV === 'test'){
  module.exports = require('./test/config');
  return;
}

module.exports = {
  mongo_url: process.env.MONGOHQ_URL || 'mongodb://localhost:27017/gtfs',
  agencies: [
    /*
      Put agency_key names from gtfs-data-exchange.com.
      Optionally, specify a download URL to use a dataset not from gtfs-data-exchange.com
    */
    {
      agency_key: 'trentino-trasporti-esercizio-spa',
      url: 'http://www.ttesercizio.it/opendata/google_transit_urbano_tte.zip'
    },
  ]
};
