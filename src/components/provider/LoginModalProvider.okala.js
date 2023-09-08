import useAuth from "../../hooks/common/useAuth";
import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";

/**
 * Context for the login modal state.
 *
 * @typedef {Object} LoginModalContext
 * @property {boolean} loginModalIsOpen - Whether the login modal is currently open.
 * @property {function} setLoginModalIsOpen - Function to set the login modal state.
 */

/**
 * Provider component for the login modal context.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 * @returns {React.ReactNode} Provider component.
 */
export const LoginModalContext = createContext();

const LoginModalProvider = ({ children }) => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const { isUserLogedIn, user } = useAuth();
  const router = useRouter();
  // Close the login modal if the user logs in
  useEffect(() => {
    if (isUserLogedIn && user?.is_profile_complete == true) {
      setLoginModalIsOpen(false);
    } else if (
      isUserLogedIn &&
      !router.asPath.includes("/login") &&
      user?.is_profile_complete == false
    ) {
      setLoginModalIsOpen(true);
    }
  }, [isUserLogedIn, user, loginModalIsOpen]);

  useEffect(() => {}, [user]);

  return (
    <LoginModalContext.Provider
      value={{ loginModalIsOpen, setLoginModalIsOpen }}
    >
      {children}
    </LoginModalContext.Provider>
  );
};

export default LoginModalProvider;
