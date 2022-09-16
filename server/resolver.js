// const data = require("./Api");
// const resolver = {
//   Query: {
//     Biodatas: () => data,
//     Biodata: (parent, args, context, info) => {
//       console.log(args);
//       return data.find((item) => item.id === args.id);
//     },
//   },
//   Mutation: {
//     updateUserEmail: (root, args, context, info) => {
//       const newemail = {
//         email: args.email,
//         name: args.name,
//         id: data.length + 1,
//       };

//       data.push(newemail);
//       return newemail;
//     },
//   },
// };

// module.exports = resolver;

// const resolvers = {
//   Query: {
//     Demo: (_, __, { dataSources }) => {
//       return dataSources.dataAPI.gettitle();
//     },
//     Demos:(_,{id},{dataSources})=>{
//       return dataSources.dataAPI.getid(id)
//     }
//   },
// };

// module.exports = resolvers;

const axios = require("axios");
const resolvers = {
  Query: {
    weatherByCity: async (_, { cityname }, { dataSources }) => {
      return dataSources.weatherApi.withCityName(cityname);
      //   const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=f4286bd141d4da8509b512b46e714966`;
      //   const { data } = await axios.get(weatherApi);
      //   return data;
      //   return {
      //     cityname: data.name,
      //     main: data.main,
      //     feelslike: data.main.feels_like,
      //     temp: data.main.temp,
      //     lon: data.coord,
      //     id: data.id,
      //     coord: data.coord,
      //     lon: data.coord.lon,
      //     lat: data.coord.lat,
      //     base: data.base,
      //     id: data.sys.id,
      //     weather: data.weather,
      //   };
    },
  },
};
module.exports = resolvers;
