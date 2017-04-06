# my-suburb
for hackaton

MYSQL db:
Server: sql11.freemysqlhosting.net
Name: sql11167855
Username: sql11167855
Password: LwsvqMwXsb
Port number: 3306

BACKEND:
npm install
npm start
Works on port 9999(check config.json)

Check localhost:9999/api/index for graphql utility, type '{coordinates}' and run it
If you need to connect to this endpoint via xhr, just add query parameter and
use stringified form for data -> "{coordinates {id}}"(check network tab in dev tools in browser)

FRONTEND
npm install
npm start
Open http://localhost:5000
(package from https://github.com/vasanthk/react-es6-webpack-boilerplate)