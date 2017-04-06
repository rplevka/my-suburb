import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import app from '../app';


import CoordinatesQuery from "./coordinate/CoordinatesQuery";
import CreateCoordinateQuery from "./coordinate/CreateCoordinateQuery";
import CreateCoordinatesQuery from "./coordinate/CreateCoordinatesQuery";

export const queryFields = {
    coordinates : CoordinatesQuery
};

export const mutationFields = {
    createCoordinate : CreateCoordinateQuery,
    createCoordinates : CreateCoordinatesQuery

};

const query = new GraphQLObjectType({
    name: 'GlobalQuery',
    fields: queryFields
});

const mutation = new GraphQLObjectType({
    name: 'GlobalMutationQuery',
    fields: mutationFields
});

const globalSchema = new GraphQLSchema({query : query, mutation : mutation});

export default globalSchema;