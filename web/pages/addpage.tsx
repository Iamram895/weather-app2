// import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
// import { request } from "graphql-request";
// import { addbiodataMutation } from "./Constants";
// //if the user submits the form, then the program will output the value of their input.
// import { useForm } from "react-hook-form";
// const onSubmit = async (data: any) => {
//   const response = await request(
//     "http://localhost:4000/graphql",
//     addbiodataMutation,
//     data
//   );
//   console.log(response);
// };
// const AddPage: NextPage = () => {
//   const { register, handleSubmit } = useForm();
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {" "}
//         {/*Bind our handler to this form.*/}
//         {/* The user's input will be saved within the 'name' property */}
//         <input defaultValue="test" {...register("name")} />
//         <input defaultValue="email" {...register("email")} />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };
// export default AddPage;
