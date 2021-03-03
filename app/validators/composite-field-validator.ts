import { ErrorMessage, Validation } from "../presentation/protocols/validation";

export class CompositeFieldValidation implements Validation {
  constructor (private validations: Validation[]) { }
  
  validate (data: any): ErrorMessage[] {
    let errorMessages = []
    for (const validation of this.validations) {
      const errors = validation.validate(data)
      if(errors) {
        errorMessages = [ ...errorMessages, ...errors ]
      }
    }
    return errorMessages
  }
}
