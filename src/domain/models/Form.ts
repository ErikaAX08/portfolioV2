export interface Field {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  isRequired: boolean
}

export interface Form {
  title: string;
  form: Field[];
}
