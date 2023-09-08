import login from "@/containers/login/Login";
import { getProfileRequest } from "@/services/Requests";
import { useEffect } from "react";
export default login;

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