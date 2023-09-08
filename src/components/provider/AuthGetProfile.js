

import { useRouter } from "next/router"
import { useState } from "react"
import Input from "../form/input/Input"
import Button from "../form/button/Button"
import { useEffect } from "react"
import useUpdateProfile from "@/hooks/common/useUpdateProfile"
import { RequeiredRegisterFields } from "@/constants/constants"
import { object, string, number, date, InferType } from 'yup'
import useAlert from "@/hooks/common/useAlert"
import useNordesConfig from "@/hooks/common/useNordesConfig"
import useAuth from "@/hooks/common/useAuth"



const AuthGetProfile = () => {
  const Alert = useAlert
  const { config } = useNordesConfig()
  const { user, isLoading } = useAuth()
  const [data, setData] = useState({})
  const router = useRouter()
  useEffect(() => {
    if (!isLoading) {
      var extractedData = {}
      Object.keys(RequeiredRegisterFields).map((key) => {
        extractedData[key] = user[key]
      })
      setData(extractedData)
      checkValidation(extractedData)
    }
  }, [user])

  const [validationErrors, setValidationErrors] = useState([])
  //TODO : validation flow and logic must be covert to an hook
  const validationErrorsHandler = (item, isValid) => {
    if (isValid) {
      let prevErrors = validationErrors.filter((x) => x.key != item.key)
      setValidationErrors(prevErrors)
    } else {
      setValidationErrors((prev) => [...prev, item])
    }
  }

  const checkFieldValidation = async (data, item = { lastName: string() }) => {
    const userSchema = object(item)
    try {
      const res = await userSchema.validate(data)
      const key = Object.keys(res)[0] ?? null
      validationErrorsHandler({ key }, true)
    } catch ({ path, message }) {
      validationErrorsHandler({ key: [path], message }, false)
    }
  }

  const checkValidation = async (data) => {
    let schemaObject = {}
    Object.keys(RequeiredRegisterFields).map((item) => {
      if (config.config?.login_register?.fields_required_in_register.include(item)) {
        schemaObject[item] = RequeiredRegisterFields?.[item].rules
      }

    })
    const userSchema = object(schemaObject)
    userSchema.validate(data).catch(({ path, message }) => {
      validationErrorsHandler({ key: [path], message }, false)
    })
  }

  const updateProfileHook = useUpdateProfile()
//input رو دوبار داره نمایش میده دقیقا یکین ولی تویه کونسول دوتا المنت است
  return (
    <> 
      <div className="mt-4 w-full flex flex-col gap-y-4">
        {config?.login_register?.fields_required_in_register.map((item) => (
          <div className="mt-4 w-full flex flex-col gap-y-4">
            {config?.login_register?.fields_required_in_register?.map((item, index) => (
              <div key={index}>
                <Input
                inputGroupClass='!text-gray-700'
                  inputProps={{
                    value: data[item],
                    onChange: (e) => {
                      setData((prev) => ({ ...prev, [item]: e.target.value }))
                      checkFieldValidation(
                        {
                          [item]: e.target.value,
                        },
                        {
                          [item]: RequeiredRegisterFields?.[item]?.rules,
                        },
                      )
                    },
                  }}
                  title={RequeiredRegisterFields?.[item]?.title}
                  error={validationErrors?.find((x) => x?.key == item)?.message}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 w-full">
        <Button
          isLoading={updateProfileHook?.isLoading}
          disabled={validationErrors.length > 0}
          className="text-white bg-yellow hover:bg-white hover:text-yellow hover:border-yellow border-2 w-32 h-12 rounded-3xl transition-all delay-75 my-2"
          onClick={() => {
            updateProfileHook
              ?.submit(data)
              .then((res) => {
                if (res.data.success && res.data.result.is_profile_complete) {
                  if (router.asPath.includes('login')) {
                    router.push('/')
                  }
                }
              })
              .catch((err) => {

                Alert.error(err.response.data.user_message)
              })
          }}
        >
          ذخیره و ادامه
        </Button>
      </div>
    </>
  )
}

export default AuthGetProfile
