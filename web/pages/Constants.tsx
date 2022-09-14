// import { gql } from "graphql-request";
// const getbiodataQuery = gql`
//   query {
//     Demo {
//       gender
//       name {
//         title
//       }
//       email
//       phone
//     }
//   }
// `;
// const addbiodataMutation = gql`
//   mutation ($email: String!, $name: String!) {
//     updateUserEmail(email: $email, name: $name) {
//       id
//       email
//       name
//     }
//   }
// `;

// export { getbiodataQuery, addbiodataMutation };


import {gql} from "graphql-request";



const getweatherdata=gql`

query ($cityname: String!) {
  weatherByCity(cityname: $cityname) {
    cityname,
    id
    main {
      temp
      feelslike
      
    }
    coord {
      lon
      lat
    }
    base
    weather {
      id
      main
    }
  }
}

`;
export {getweatherdata}