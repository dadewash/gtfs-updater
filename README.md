#  gtfs-updater
`gtfs-updater` loads transit data in [GTFS](https://developers.google.com/transit) format from [OPENdata Trentino GTFS](http://dati.trentino.it/dataset/trasporti-pubblici-del-trentino-formato-gtfs), unzips it and stores it to a MongoDB database.
## Setup
1. create an account on [heroku](https://www.heroku.com) and on mongoDB (e.g. [mongolab](https://www.mongolab.com)).
2. set the URI on the heroku that permits the communications between the app and  the database.
3. install the [heroku toolbelt](https://toolbelt.heroku.com), and create the app following the guideline.
4. clone the application from github: `git clone https://github.com/dadewash/gtfs-updater.git`.
5. configure the loading data (config.js)
6. now you can push the application on heroku:
 

`git push heroku master`


##Configuration for loading data

Before you can use gtfs-updater you must specify agency in __config.js__
