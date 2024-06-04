import mongoose from 'mongoose';
import { TGenericErrorResponse, TErrorSources } from '../interface/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  
    const match = err.message.match(/"([^"]*)"/);
  const extracted_msg = match && match[1];

  const errorSource: TErrorSources = [
    {
      path: '',
      message: `${extracted_msg} is already exists`,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'validation error',
    errorSource,
  };
};

export default handleDuplicateError;
