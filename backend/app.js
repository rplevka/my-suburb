"use strict";

require("babel-polyfill");

import * as Hapi from "hapi";
import fs from 'fs';
import path from 'path';

// graphql
import GraphQL from 'hapi-graphql';
import graphQLSchema, {fields as graphQlFields} from './datascheme';

// components
import Database from "./lib/Database";

export const instance = {
    appRef: null,

    getApp: function () {
        if (this.appRef) {
            return this.appRef;
        }
    },
    setApp: function (newRef) {
        this.appRef = newRef;
    }
};

/**
 * The main file for the whole system, controls the main flow
 *
 * @class App
 */
class App {

    db
    config
    server

    getServer() {
        return this.server;
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        this.config = JSON.parse(fs.readFileSync(path.join(__dirname, "config.json")));
    }

    startServer() {
        let that = this;

        // create db connection
        this.db = new Database(this.config.database);

        this.server = new Hapi.Server();

        this.server.connection({
            port: this.config.server.port,
            routes: {
                cors: {
                    origin: ['*'],
                    credentials: true
                }
            }
        });

        // create db connection
        this.db = new Database(this.config.database);
        
        this.db.sync(function () {                
            that.server.register([
                {
                    register: GraphQL,
                    options: {
                        query: function (request, reply) {
                            return {
                                schema: graphQLSchema,
                                graphiql: true,
                                rootValue: {
                                    request: request,
                                    payload: request.payload
                                }
                            };
                        },
                        route: {
                            path: '/api/index',
                            config: {                                  
                            }
                        }
                    }
                }
            ], function (err) {
                if (err) {
                    throw err;
                }

                that.server.start(function () {
                    console.log('Running on ' + that.config.server.port);
                });
            });
        });
    }
}

export default App;