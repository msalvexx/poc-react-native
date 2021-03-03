export interface Validation {
  validate: (data: any) => ErrorMessage[]
}

export type ErrorMessage = {
  fieldName: string,
  message: string
}