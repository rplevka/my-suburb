"use strict";

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLInputObjectType,
    GraphQLFloat
} from 'graphql';

export const CoordinateSchema = new GraphQLObjectType({
    name: 'CoordinateSchema',
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        lat: {
            type: GraphQLFloat
        },
        lon: {
            type: GraphQLFloat
        },
        z1: {
            type: GraphQLFloat
        },
        z2: {
            type: GraphQLFloat
        }
    })
});

export const CoordinateInputSchema = new GraphQLInputObjectType({
    name: 'CoordinateInputSchema',
    fields: () => ({
        lat: {
            type: GraphQLFloat
        },
        lon: {
            type: GraphQLFloat
        },
        z1: {
            type: GraphQLFloat
        },
        z2: {
            type: GraphQLFloat
        }
    })
});