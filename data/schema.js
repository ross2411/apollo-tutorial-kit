import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers'

const typeDefs = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}


type Query {
  author(firstName: String, lastName: String): Author
  allAuthors: [Author]
  getFortuneCookie: String # we'll use this later
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
