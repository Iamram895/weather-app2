// const {RESTDataSource} = require('apollo-datasource-rest');

// class DataAPI extends RESTDataSource {
//   constructor() {
//     super();
//     this.baseURL = 'https://jsonplaceholder.typicode.com/todos';
//   }

//   async gettitle() {
//     const results=await this.gettitle()
//     console.log(results)
//     return results
//   }

// //  async getid(id) {
// //     const result=await this.get(id)
// //     //console.log(result)
// //     return result
// //   }

// }

//module.exports = DataAPI;
// const { RESTDataSource, RequestOptions } = require("apollo-datasource-rest");

// class WeatherAPI extends RESTDataSource {
//   constructor() {
//     super();
//     this.baseURL = `https://api.openweathermap.org/data/2.5/weather?q=jaipur&units=metric&appid=f4286bd141d4da8509b512b46e714966`;
//   }

//   async withcityname() {
//     const data = await this.get();
//     //  const result=await data.json()
//     console.log(data);
//     return data
//   }
// }

// module.exports = WeatherAPI;










// import axios from 'axios';

// const cityWeather = async (_, { cityName }) => {
//   const waetherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f4286bd141d4da8509b512b46e714966`;

//   const { data } = await axios.get(waetherApi);
//   console.log({data});

//   return {
//     temp: data.main.temp,
//     tempMin: data.main.temp_min,
//     tempMax: data.main.temp_max,
//     cityName: data.name,
//   };
// };

// export default cityWeather;
