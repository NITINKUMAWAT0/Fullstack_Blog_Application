// ERROR MIDDLEWARE | NEXT FUNCTION

const errorMiddleware = (err, req, res, next) => {
    const defaultError = {
      statusCode: 500,
      success: "failed",
      message: err,
    };
  
    // Log the error for debugging
    console.error(err);
  
    if (err?.name === "ValidationError") {
      defaultError.statusCode = 400;
  
      defaultError.message = Object.values(err.errors)
        .map((el) => el.message)
        .join(",");
    }
  
    // Duplicate key error
    if (err?.code && err?.code === 11000) {
      defaultError.statusCode = 409;
      defaultError.message = `${Object.keys(err.keyPattern).join(
        ", "
      )} must be unique`;
    }
  
    res?.status(defaultError.statusCode).json({
      success: defaultError.success,
      message: defaultError.message,
    });
  };
  
  export default errorMiddleware;