import useAuth from "./useAuth";
import useAlert from "./useAlert";
import { useState } from "react";
import { updateUserProfileRequest } from "src/services/Requests";

const useUpdateProfile = () => {
  const { setUser, user } = useAuth();
  const { success, error } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ ...user });

  const submit = async (params = data) => {
    setIsLoading(true);
    try {
      let response = await updateUserProfileRequest(params);
      setUser(response?.data?.result);
      setIsLoading(false);
      success(response?.data?.user_message);
      return response;
    } catch (err) {
      setIsLoading(false);
      error(err?.response?.data?.user_message);
      throw err;
    }
  };

  return {
    submit,
    isLoading,
    setIsLoading,
    data,
    resetData: setData,
    setData: (params) => setData((prev) => ({ ...prev, ...params })),
  };
};

export default useUpdateProfile;
