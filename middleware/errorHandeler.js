const  {constants} = require('../constants')
const errorHandeler = (err,req,res,next) =>{
    const statusCode = res.statusCode ? res.statusCode:500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"Validation Failed",
                message:err.message,
                stack : err.stack
            })
        case constants.NOT_FOUND:
            res.json({
                title:"NOT FOUND",
                message:err.message,
                stack : err.stack
            })
        case constants.UNAUTHORIZED:
            res.json({
                title:"UNAUTHORIZED",
                message:err.message,
                stack : err.stack
            })
        case constants.FORBIDDEN:
            res.json({
                title:"FORBIDDEN",
                message:err.message,
                stack : err.stack
            })
        case constants.SERVER_ERROR:
            res.json({
                title:"SERVER ERROR",
                message:err.message,
                stack : err.stack
            })
            break;
        default:
            console.log("no error at ALL!!!!!")
            break;
    }
  

}
module.exports = errorHandeler;