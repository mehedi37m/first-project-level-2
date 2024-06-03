import  { ErrorRequestHandler} from 'express';
import { ZodError } from 'zod';

let globalErrorHandler : ErrorRequestHandler = (err, req , res , next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message ||'something went wrong';
     
  type TErrorSource = {
 
    path:string | number;
    message:string ;
  }[];

 let errorSource : TErrorSource = [{
    path:'',
    message: message
  }];

  const handleZodError = (err: ZodError) => {
      const statusCode = 400;
  }

      if(err instanceof ZodError){
        
        message = "Zod Error now"
      }

    return res.status(statusCode).json({
      success:false,
      message:message,
      error:err
    })
  }

  export default globalErrorHandler

  /**
   * success 
   * message
   * errorSource:[
   * path:''
   * message:""
   * ]
   * stack
   */