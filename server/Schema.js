// const { gql } = require("apollo-server");

// const typeDefs = gql`
//  type biodata{
//   id:ID
//   name:String
//   phone:String
//   email:String
//  }
//  type Query{
//   Biodatas:[biodata]
//   Biodata(id:ID):biodata
//  }

//   type Mutation {
//      # This mutation takes id and email parameters and responds with a User
//      updateUserEmail( email: String!,name:String!): biodata
//    }

// `;

// module.exports = typeDefs;

// const { gql } = require("apollo-server");
// const typeDefs = gql`
//   type demo {
//     id: ID
//     gender: String
//    email: String
//     phone: String
//     name:Name
//     title:String
//     userId:ID
//   }

// type Name{
//   title:String

// }

//   type Query {
//     Demo: [demo!]!
//     Demos(id:ID):demo

//   }

// `;
// module.exports = typeDefs;

const { gql } = require("apollo-server");

const typeDefs = gql`
  type coordinates {
    lon: Float
    lat: Float
  }
  type weather {
    id: Int
    main: String
    description: String
    icon: String
  }
  type weatherTemp {
    temp: Float
    feelslike: Float
  }

  type weatherResponse {
    id: String
    name: String
    base: String
    coord: coordinates
    main: weatherTemp
    weather: [weather]
  }

  type Query {
    weatherByCity(cityname: String!): weatherResponse!
  }
`;
module.exports = typeDefs;
