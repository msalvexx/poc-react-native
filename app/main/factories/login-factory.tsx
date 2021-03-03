import React from "react"
import { Login } from "../../presentation/pages/login"
import { makeAxiosHttpClient } from "./axios-http-client-factory"
import { makeLoginValidatorFactory as makeLoginValidation } from "./login-validator-factory"
import { makeRemoteAuthentication } from "./remote-authentication-factory"

export const makeLogin = (): JSX.Element => {
  const httpPostClient = makeAxiosHttpClient()
  const authentication = makeRemoteAuthentication(httpPostClient)
  const validator = makeLoginValidation()
  return <Login authentication={authentication} validator={validator}/>
}
