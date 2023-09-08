import { AuthContext } from "@/components/provider/AuthProvider";
import NordesBackEnd from "@/services/Api";
import { getUserProfile, logoutRequest } from "@/services/Requests";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";

 
const useAuth = () => {
  const authContext = useContext(AuthContext); // Assuming that the auth context is provided by a parent component.
  const router = useRouter();

  // Determine if the user is logged in or not based on the presence of a user ID in the authentication context.
  const isUserLogedIn = authContext.user?.id && authContext.user !== false;
  // Determine if user data is currently being loaded.
  const isLoading = authContext.user === null;

  /**
   * Logs out the current user and clears user-related data from the app.
   */
  const logout = async () => {
    logoutRequest()
      .then(() => {
        authContext.setUser(false);
        NordesBackEnd.setToken(null);
        Cookies.remove("token");
        router.push("/auth/login");
      })
      .catch(() => {});
  };

  const fetchUser = () => {
    authContext.setUser(null);
    getUserProfile()
      .then((res) => {
        authContext.setUser(res.data.result);
      })
      .catch((error) => {
        authContext.setUser(false);
      });
  };
  const setToken = (token) => {
    Cookies.set("token", token);
    NordesBackEnd.setToken(token);
  };

  return {
    user: authContext.user,
    fetchUser,
    isUserLogedIn,

    isLoading,

    setUser: (newParams) =>
      authContext.setUser((prev) => ({ ...prev, ...newParams })),

    resetUser: authContext.setUser,
    setToken,
    logout,
  };
};

export default useAuth;
