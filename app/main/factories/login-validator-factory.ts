import { Validation } from "../../presentation/protocols/validation";
import { CompositeFieldValidation } from "../../validators/composite-field-validator";
import { RequiredFieldValidator } from "../../validators/required-field-validator";

export const makeLoginValidatorFactory = (): Validation => {
  return new CompositeFieldValidation([
    new RequiredFieldValidator('user'),
    new RequiredFieldValidator('password')
  ])
}