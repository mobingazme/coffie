

import useAuth from "../../hooks/common/useAuth";
import useLoginByOtp from "../../hooks/common/useLoginByOtp";
import useNordesConfig from "../../hooks/common/useNordesConfig";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReactCodeInput from "react-verification-code-input";
import { RequeiredRegisterFields } from "src/constants/constants";
import { Icon } from '@iconify/react'
import Input from "@/components/form/input/Input";
import Button from "@/components/form/button/Button";
import useLoginModal from "@/hooks/common/useLoginModal.okala";
import AuthGetProfile from "@/components/provider/AuthGetProfile";
import LogingLayout from "./LogingLayout";



const Login = () => {
  const { config } = useNordesConfig();
  const { resetUser } = useAuth();
  const { step, stepControl, generalLoading, ...loginHook } = useLoginByOtp();
  const router = useRouter();
  const { closeLoginModal } = useLoginModal()
  const loginHanlder = (param) => {
    loginHook.login.submit(param);
  };




  return step == "getPhone" ? (
    <LogingLayout>

      <div>


        <Input
          autofocus={true}
          inputProps={{
            type: "tel",
            direction: "ltr",
            maxLength: 11,
            placeholder: "09123456789",
            value: loginHook.data.phone,
            onChange: (e) => loginHook.setData({ phone: e.target.value }),
          }}
          icon={"solar:phone-bold-duotone"}
          title={"شماره موبایل"}
          inputGroupClass={'!text-black'}
        />



        <Button
          isLoading={loginHook.otp.isLoading || generalLoading}
          className="text-white bg-yellow hover:bg-white hover:text-yellow hover:border-yellow border-2 w-32 h-12 rounded-3xl transition-all delay-75 mt-10"
          onClick={() => loginHook.otp.submit().then(() => { })}
        >
          تایید و ادامه
        </Button>

      </div>


    </LogingLayout>









  ) : step == "getCodeAndPhone" ? (

    <LogingLayout>


      <div >
        <ReactCodeInput
          disabled={loginHook.login.isLoading}
          autoFocus="true"
          name="resetPassword"
          inputMode="numeric"
          onComplete={(x) => {
            loginHanlder({ code: x });
          }}
          fields={5}
          key={loginHook.login.data.code}
          values={String(loginHook.login.data.code).split("")}
          onChange={(e) => loginHook.login.setData({ code: e })}
          type="number"
          className={`otp-input ltr flex items-center  rounded-lg    `}
        />
      </div>
      <div className="">
        <Button
          className="text-secondary text-sm !text-black"
          onClick={() => stepControl.prevStep()}
        >
          ویرایش شماره
        </Button>

        <Button
          className=" !text-black"
          onClick={() =>
            loginHook.otp.countDown.isEnd && loginHook.otp.submit()
          }
        >
          {loginHook.otp.countDown.isEnd ? (
            <span className="text-caption text-xs">ارسال مجدد کد</span>
          ) : (
            <span className="text-caption text-xs !text-black">
              ارسال مجدد کد تا
              {" " +
                loginHook.otp.countDown.min +
                ":" +
                loginHook.otp.countDown.sec +
                " "}
              دیگر
            </span>
          )}
        </Button>
      </div>
      <div className="mt-4 w-full">
        <Button
          isLoading={loginHook.login.isLoading || generalLoading}
          className="text-white bg-yellow hover:bg-white hover:text-yellow hover:border-yellow border-2 w-32 h-12 rounded-3xl transition-all delay-75 mt-10"
          onClick={() => loginHanlder()}
        >
          ورود به {config?.information_site?.sitename}
        </Button>
      </div>






    </LogingLayout>
  ) : (
    step == "getProfile" && <LogingLayout><AuthGetProfile /></LogingLayout>
  );
}
export default Login;

































