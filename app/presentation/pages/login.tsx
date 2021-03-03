import React, { FormEvent, FunctionComponent } from "react";
import { Authentication } from "../../domain/authentication";
import { TextField } from "../components/atoms/text-field";
import { useFormFields } from "../helpers/hooks";
import { Validation, ErrorMessage } from "../protocols/validation";

export type LoginProps = {
  authentication: Authentication
  validator: Validation
}

const handleSubmit = async (e: FormEvent, authentication: Authentication, credentials: any, errors: ErrorMessage[]) => {
  e.preventDefault();
  if (errors.length > 0)
    return;
  const response = await authentication.auth(credentials)
  console.log('Usuário logado', response)
}

const adaptError = (errors: any[], key: string) => errors.find(x => x.fieldName === key)?.message

export const Login: FunctionComponent<LoginProps> = props => {
  const { validator, authentication } = props;
  const values = { user: '', password: '' }
  const [ fields, errors, handleFieldChange ] = useFormFields(values, validator)
  return (
    <>
      <TextField
        error={ adaptError(errors, 'user') }
        onChangeText={ text => handleFieldChange('user', text) }
        value={ fields.user }
        placeholder="Usuário"
      />
      <TextField
        error={ adaptError(errors, 'password') }
        value={ fields.password }
        onChangeText={ text => handleFieldChange('password', text) }
        placeholder="Senha"
      />
    </>
  );
};