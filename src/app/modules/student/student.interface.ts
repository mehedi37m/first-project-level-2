import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;

};

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
}

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  avatar?: string;
  dateOfBirth?: string;
  contactNo: string;
  emergencyContact: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentContact: string;
  guardian:Guardian;
  localGuardian:LocalGuardian;
  profileImg?:string;
  isActive:'active' |'blocked'; 
};
