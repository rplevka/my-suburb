"use strict";

import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList} from 'graphql';
import {instance} from '../../app';
import {CoordinateInputSchema, CoordinateSchema} from './CoordinateSchema';
import * as _ from 'lodash';

const CreateCoordinateQuery = {
    type: CoordinateSchema,
    args: {
        coordinate: {
            type: CoordinateInputSchema
        }
    },
    resolve: function (root, args) {
        return instance.getApp().db.getModel('Coordinate').create(args.coordinate).then(function (coordinate) {
            return coordinate;
        });
    }
};

export default CreateCoordinateQuery;