# my-suburb
for hackaton

MYSQL db:<br>
Server: sql11.freemysqlhosting.net<br>
Name: sql11167855<br>
Username: sql11167855<br>
Password: LwsvqMwXsb<br>
Port number: 3306<br>

BACKEND:<br>
npm install<br>
npm start<br>
Works on port 9999(check config.json)

Check localhost:9999/api/index for graphql utility, type '{coordinates}' and run it
If you need to connect to this endpoint via xhr, just add query parameter and
use stringified form for data -> "{coordinates {id}}"(check network tab in dev tools in browser)

FRONTEND<br>
npm install<br>
npm start<br>
Open http://localhost:3000<br>
(package from https://github.com/vasanthk/react-es6-webpack-boilerplate)