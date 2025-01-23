import { ThttpResponse } from '../types/types'
import { Request,Response } from 'express'
import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'

export default (req :Request, res:Response,responseStatusCode : number, responseMessage : string, data : unknown = null)=>{
    const response : ThttpResponse = {
        success : true,
        statusCode : responseStatusCode,
        request : {
                ip : req.ip || null,
                url : req.originalUrl,
                method : req.method
        },
        message : responseMessage,
        data : data
    }
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete response.request.ip
    }
    res.status(responseStatusCode).json(response)
}