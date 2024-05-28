import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';



const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' single Student successfully',
    data: result,
  });
});

const getAllStudent = catchAsync(async (req, res, next) => {
  
    const result = await StudentServices.getAllStudentFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student get successfully',
      data: result,
    });
  
});

// const getSingleStudent: RequestHandler = async (req, res, next) => {
//   try {
//     const { studentId } = req.params;
//     const result = await StudentServices.getSingleStudentFromDB(studentId);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: ' single Student successfully',
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

export const StudentController = {
  getAllStudent,
  getSingleStudent,
};
