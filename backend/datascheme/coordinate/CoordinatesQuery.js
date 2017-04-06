"use strict";

import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} from 'graphql';
import {instance} from '../../app';
import {CoordinateSchema} from './CoordinateSchema';
import * as _ from 'lodash';

const CoordinatesQuery = {
    type: new GraphQLList(CoordinateSchema),
    args: {
        limit: {
            type: GraphQLInt
        }
    },
    resolve: function (root, args, dunno, query) {
        console.log(instance);
        return instance.getApp().db.getModel('Coordinate').findAll({
            limit: args.limit || 10,
            offset: args.offset || 0,
            order: 'id DESC'
        }).then(function (coordinates) {
            return coordinates;
        });
    }
};

export default CoordinatesQuery;