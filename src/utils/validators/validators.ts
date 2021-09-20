export type ValidatorType = (value: string) => string | undefined

export const required: ValidatorType = (value) => value ? undefined : "Field is required";

export const maxLengthCreator = (maxLength: string) => (value: string) => {
  return (+value.length > +maxLength) ? `Max length is ${maxLength} symbols` : undefined;
}