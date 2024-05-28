import config from '../../config';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //  set default role
  const userData: Partial<TUser> = {};

  // set default password
  userData.password = password || (config.default_password as string);

  userData.role = 'student';

  // year semester 4 digits number
  const generateStudentId = (payload: TAcademicSemester)=>{

  }

  userData.id = generateStudentId()

  const newUser = await User.create(userData);
  if(Object.keys(newUser).length){
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
 
};

export const UserService = {
  createStudentIntoDB,
};
