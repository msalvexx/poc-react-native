import { ErrorMessage, Validation } from "../presentation/protocols/validation";

export class RequiredFieldValidator implements Validation {
  constructor(private fieldName: string) { }
  
  validate (data: any): ErrorMessage[] {
    const fieldValue = data[this.fieldName]
    if (!fieldValue) {
      const requiredFieldError: ErrorMessage = {
        fieldName: this.fieldName,
        message: 'O campo é obrigatório'
      }
      return [ requiredFieldError ]
    }
  }
}