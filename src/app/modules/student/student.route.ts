import express, { Request, Response } from 'express';
import { StudentController } from './student.controller';

const router = express.Router();


router.get('/', StudentController.getAllStudent);

router.get('/:studentId', StudentController.getSingleStudent);

router.delete('/:semesterIdId', StudentController.deleteStudent);

export const StudentRoutes = router;
