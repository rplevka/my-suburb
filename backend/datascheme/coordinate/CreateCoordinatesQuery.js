"use strict";

import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} from 'graphql';
import {instance} from '../../app';
import {CoordinateInputSchema, CoordinateSchema} from './CoordinateSchema';
import * as _ from 'lodash';

const CreateCoordinateQuery = {
    type: GraphQLInt,
    args: {
        coordinates: {
            type: new GraphQLList(CoordinateInputSchema)
        }
    },
    resolve: function (root, args) {
        return instance.getApp().db.getModel('Coordinate').bulkCreate(args.coordinates).then(function (coordinates) {
            return coordinates.length;
        });
    }
};

export default CreateCoordinateQuery;