import { z } from "zod";

// Define Zod schemas for nested objects
const UserNameSchema = z.object({
    firstName: z.string().trim().min(1).max(20),
    middleName: z.string().optional(),
    lastName: z.string().trim().min(1),
  });
  
  const GuardianSchema = z.object({
    fatherName: z.string().min(1),
    fatherOccupation: z.string().min(1),
    fatherContactNo: z.string().min(1),
    motherName: z.string().min(1),
    motherOccupation: z.string().min(1),
    motherContactNo: z.string().min(1),
  });
  
  const LocalGuardianSchema = z.object({
    name: z.string().min(1),
    occupation: z.string().min(1),
    contactNo: z.string().min(1),
    address: z.string().min(1),
  });
  
  // Define Zod schema for the main Student object
  export const StudentZodValidationSchema = z.object({
    id: z.string().min(1),
    name: UserNameSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string().optional(),
    email: z.string().email(),
    contactNo: z.string().min(1),
    emergencyContact: z.string().min(1),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
    presentAddress: z.string().min(1),
    permanentContact: z.string().min(1),
    guardian: GuardianSchema,
    localGuardian: LocalGuardianSchema,
    profileImg: z.string(),
    isActive: z.enum(['active', 'blocked']).default('active'),
  });

  export default StudentZodValidationSchema