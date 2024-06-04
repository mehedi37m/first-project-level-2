import mongoose from "mongoose";
import { TGenericErrorResponse, TErrorSources } from '../interface/error';


const handleCastError = (err: mongoose.Error.CastError): TGenericErrorResponse => {
   
   const errorSource :TErrorSources = [{
        path:err.path,
        message:err.message
   }]
   
   
    const statusCode = 400;
      return{

        statusCode,
        message:'Invalid Id',
        errorSource
      }
}

export default handleCastError;