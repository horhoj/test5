import * as yup from 'yup';
import { VALIDATION_ERROR_REQUIRED } from '../../../config/validation';

export interface TodoItemFormProps {
  id: string;
}

export const TodoItemFormValidationSchema = yup.object({
  title: yup.string().required(VALIDATION_ERROR_REQUIRED),
  content: yup.string().required(VALIDATION_ERROR_REQUIRED),
});
