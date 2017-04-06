import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import app from '../app';


import CoordinatesQuery from "./coordinate/CoordinatesQuery";

export const queryFields = {
    coordinates : CoordinatesQuery
};

export const mutationFields = {
    //createCoordinate : null
};

const query = new GraphQLObjectType({
    name: 'GlobalQuery',
    fields: queryFields
});

const mutation = new GraphQLObjectType({
    name: 'GlobalMutationQuery',
    fields: mutationFields
});

const globalSchema = new GraphQLSchema({query : query});

export default globalSchema;