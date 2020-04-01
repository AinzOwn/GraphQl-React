import {GraphQLServer} from 'graphql-yoga';
import path from 'path'; //Te da la direccion de donde esta la carpeta
import resolvers from './graphql/resolvers'; //Al importar el index podremos juntas Muta y Querys

export const server = new GraphQLServer({
    typeDefs: path.join(__dirname, 'graphql/schema.graphql'), //Unimos la direccion mas el schema
    resolvers
})