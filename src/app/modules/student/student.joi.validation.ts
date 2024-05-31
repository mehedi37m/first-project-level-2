import Joi from "joi";

const userNameSchema = Joi.object({
    firstName: Joi.string()
      .required()
      .trim()
      .max(20)
      .regex(/^[A-Za-z]+$/, { name: 'alphabets' })
      .message('First name must be alphabetic and less than 20 characters'),
    middleName: Joi.string(),
    lastName: Joi.string()
      .required()
      .regex(/^[A-Za-z]+$/, { name: 'alphabets' })
      .message('Last name must be alphabetic'),
  });

  const guardianSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
  });

  const localGuardianSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameSchema.required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    dateOfBirth: Joi.string().allow(null),
    email: Joi.string().email().required(),
    contactNo: Joi.string().required(),
    emergencyContact: Joi.string().required(),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .allow(null),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianSchema.required(),
    localGuardian: localGuardianSchema.required(),
    profileImg: Joi.string().allow(null),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
  });


  export default studentValidationSchema;