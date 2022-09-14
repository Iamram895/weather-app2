const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolver");
const typeDefs = require("./Schema");
const WeatherAPI= require('./database')

const server = new ApolloServer({ typeDefs, resolvers,
  
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
