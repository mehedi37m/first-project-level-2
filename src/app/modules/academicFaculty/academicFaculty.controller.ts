import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.createAcademicFacultyIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty is created successfully',
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyService.getAllAcademicFacultyFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty all retrieved successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result =
    await AcademicFacultyService.getSingleAcademicFacultyFromDB(facultyId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty single retrieved successfully',
    data: result,
  });
});
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result = await AcademicFacultyService.updateAcademicFacultyIntoDB(
    facultyId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty update successfully',
    data: result,
  });
});

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
