import { z } from 'zod';

const userValidationSchema = z.object({
  password: z.string({
      invalid_type_error: 'password must be string',
    })
    .max(20, { message: 'password must be at least 20 characters' })
    .optional(),
  
});

export const UserValidation = {
  userValidationSchema,
};
