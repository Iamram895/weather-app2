// import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
// import { request } from "graphql-request"; //allows us to perform a request on our server
// import { getweatherdata } from "./Constants";
// import { GraphQLClient, gql } from "graphql-request";
// import { Box, Button, Container, Flex, HStack, Input, Text } from "@chakra-ui/react";
// import { useState } from "react";
// const Home: NextPage = ({
//   data,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   const [cityName,setCityName]= useState('')
//   return (
//    <Box>
//     <Input onChange={(e) => setCityName(e.target.value)} />
//     <Button onClick={}>serarch</Button>
//    </Box>
//   );
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const endpoint = "http://localhost:4000/graphql";

//   const graphQLClient = new GraphQLClient(endpoint);

//   const data = await graphQLClient.request(getweatherdata, {
//     cityname: "mumbai",
//   });
//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// };
// export default Home;

// import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
// import { request } from "graphql-request"; //allows us to perform a request on our server
// import { getweatherdata } from "./Constants";
// import React from 'react'

// import { useQuery, gql } from '@apollo/client';

// export default function App() {
//   return (
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//     </div>
//   );
// }

// function DisplayLocations() {
//   const { loading, error, data } = useQuery(getweatherdata);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id}>

//       <br />
//     </div>
//   ));
// }





// import {
//   Box,
//   Button,
//   CircularProgress,
//   Container,
//   Flex,
//   HStack,
//   Input,
//   Text
// } from '@chakra-ui/react';
// import { useCityWeatherQuery } from 'generated/graphql';
// import { useState } from 'react';

// const DemoCall = () => {
//   const [city, setCity] = useState('');

//   const { data, loading, refetch } = useCityWeatherQuery({
//     variables: { cityName: city }
//   });

//   return (
//     <Box py={4}>
//       <Flex justifyContent="center">
//         <Text fontSize="5xl">Weather API</Text>
//       </Flex>

//       <Container maxW="md">
//         <HStack justifyContent="center">
//           <Input onChange={(e) => setCity(e.target.value)} />

//           <Button onClick={() => refetch()} variant="outline">
//             Search
//           </Button>
//         </HStack>

//         {loading ? (
//           <CircularProgress isIndeterminate />
//         ) : (
//           <Box>
//             <Text my={4}>City Name: {data?.cityWeather?.cityName}</Text>

//             <Text my={4}>Temp: {data?.cityWeather?.temp}</Text>
//           </Box>
//         )}
//       </Container>
//     </Box>
//   );
// };

// export default DemoCall;









import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { getweatherdata } from "./Constants";
import { GraphQLClient, gql } from "graphql-request";
import {Image}   from "@chakra-ui/react";

const index = () => {
  const [cityName, setCityName] = useState('');
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [id, setId] = useState();
  const [coord, setCoord] = useState("");

  const weatherFun = async () => {
    const endpoint = "http://localhost:4000/graphql";

    const graphQLClient = new GraphQLClient(endpoint);

    const data = await graphQLClient.request(getweatherdata, {
      cityname: cityName,
    });

    console.log(data);

    const cityname = data.weatherByCity.cityname;
    const temp = data.weatherByCity.main.temp;
    const coord = data.weatherByCity.coord.lat;
    const id = data.weatherByCity.id;
     
    // const {cityname}=data.weatherByCity
    // console.log(cityname)
    

    // console.log(cityname);

    // console.log(temp);
    // console.log(id);
    // console.log(coord);
    // const details=[cityName,temp,coord,id]

    setValue(cityname);
    setTemp(temp);
    setCoord(coord);
    setId(id);
  };
  return (
    <>
      <Container
        bg="pink"
        border=".5px"
        borderRadius="1px"
        textAlign="center"
        w="500px"
        h="800px"
        paddingTop="50px"
      >
        <Flex>
          <Input onChange={(e) => setCityName(e.target.value)} />
          <Button onClick={weatherFun}>search</Button>
        </Flex>
        <Image src="../ios-weather.jpg" width='600px'mt='20px'alt='pic'/>
        <Flex mt='20px'>
          <Box>Cityname - {value},</Box>
          <Box ml='10px'>Temp - {temp},</Box>
          <Box ml='10px'>Id - {id},</Box>
          <Box ml='10px'>Coord - {coord}</Box>
        </Flex>
      </Container>
    </>
  );
};

export default index;
