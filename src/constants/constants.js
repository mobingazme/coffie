import { customYup } from "@/hooks/common/useValidation";
import { string } from "yup";

export const ApiConstants = {
  baseUrl: 'https://best-cms.ir',
  timeOut: 25000
}
export const ApiVersions={
  v1:'api/v1',
  v2:'v2/api/api'
}



export const RequeiredRegisterFields = {
  first_name: {
    title: "نام ",
    rules: string().required("نام اجباری می باشد "),
  },
  last_name: {
    title: "نام خاوادگی  ",
    rules: string().required("نام اجباری می باشد "),
  },
  national_code: {
    title: "کد ملی  ",
    rules: string()
      .required("کد ملی اجباری می باشد ")
      .max(10)
      .matches(/^\d{10}$/, "کد ملی معتبر نمی باشد"),
  },
  bank_card: {
    title: "کارت بانکی ",
    rules: customYup.isIranBankCardNumber(
      "شماره کارت وارد شده معتبر نمی باشد "
    ),
  },
};