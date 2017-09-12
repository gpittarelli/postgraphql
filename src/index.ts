import { postgraphql, createPostGraphQLSchema, withPostGraphQLContext } from './postgraphql'

export default postgraphql

export {
  postgraphql,
  createPostGraphQLSchema,
  withPostGraphQLContext,
}

export { default as graphql } from 'graphql'
