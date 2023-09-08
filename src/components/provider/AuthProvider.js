import { getUserProfile } from "@/services/Requests";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
 

export const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (user == false) {
      setUser(null);
      getUserProfile()
        .then((res) => {
          setUser(res.data.result);
        })
        .catch((error) => {
          setUser(false);
        });
    }
  }, []);
  useEffect(() => {
    if (user?.id && user?.is_profile_complete == true) {
      if (router.asPath.includes("/login")) {
        router.push("/home");
      }
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
