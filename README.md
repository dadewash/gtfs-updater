#  gtfs-updater
`gtfs-updater`is a tool that periodically updates the database of the Waiting For The Bus Application. The data is taken from [OPENdata Trentino GTFS](http://dati.trentino.it/dataset/trasporti-pubblici-del-trentino-formato-gtfs).
## Setup
1. Create an account on [heroku](https://www.heroku.com) and make sure to have a mongoDB database (e.g. [mongolab](https://www.mongolab.com)).
2. Set the the environment variable on heroku containing the database string connection.
`MONGODB_URL='mongodb://user:password@host:port/dbname'`.
3. Clone the application from github: `git clone https://github.com/dadewash/waiting-for-the-bus-server.git`.
4. Install the [heroku toolbelt](https://toolbelt.heroku.com), `cd` into the project and create the remote app:
`heroku apps:create app_name`.
6. Push the application to heroku:
`git push heroku master`
 

`git push heroku master`


##Configuration for loading data

Before you can use gtfs-updater you must specify agency in __config.js__
