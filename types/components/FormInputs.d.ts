export interface FormGroup {
  id: string
  labelFor: string
}

export interface FormInput {
  id: string
  required?: boolean
  autofocus?: boolean
}

export interface FormField {
  component?: string
  model?: string
  labelI18nKey?: string | null
  validation?: string | Record<string, unknown> | null
  group: FormGroup
  input: FormInput
}
