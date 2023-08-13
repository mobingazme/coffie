import register from "@/containers/register/Register";
import { getProfileRequest } from "@/service/Requests";
import { useEffect } from "react";
export default register;

// export const getServerSideProps = async (context) => {
//     try {
//       const res = await getProfileRequest();
//       if (res.status === 200) {
//         return {
//           redirect: {
//             destination: '/home',
//             permanent: false,
//           },
//         };
//       }
//     } catch (error) {
//       console.log(error);
//     }
  
//     return {
//       props: {},
//     };
//   };