import { Article } from "./Article";
import { Form } from "./Form";

export interface Page {
  type: string;
  data: undefined | Article | Form;
}
