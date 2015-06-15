#  gtfs-updater
`gtfs-updater`is a tool that periodically updates the database of the Waiting For The Bus Application. The data is taken from [OPENdata Trentino GTFS](http://dati.trentino.it/dataset/trasporti-pubblici-del-trentino-formato-gtfs).
## Setup
1. Create an account on [heroku](https://www.heroku.com) and make sure to have a mongoDB database (e.g. [mongolab](https://www.mongolab.com)).
2. Clone the application from github: `git clone https://github.com/dadewash/gtfs-updater.git`.
3. Install the [heroku toolbelt](https://toolbelt.heroku.com), `cd` into the project and create the remote app:
`heroku apps:create app_name`.
4. Set the the environment variable on heroku containing the database string connection.
`heroku config:set MONGODB_URL='mongodb://user:password@host:port/dbname'`.
6. Push the application to heroku:
`git push heroku master`

##Configuration

Agencies can be specified using the  __config.js__ file.
