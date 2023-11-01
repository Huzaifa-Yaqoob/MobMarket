// Handle the error at the backend while calling register api routes.
export default function errorHandler(error: any): ErrorMessage {
  const errorResponse = {
    status: { status: 500 },
    msg: { message: "Something is wrong, Sorry!" },
  };
  if (error.code === 11000) {
    errorResponse.msg.message = "This email has already been registered.";
  }
  if (error.message.includes("validation failed") || error.message == "00") {
    errorResponse.msg.message = "Incorrect inputs.";
  }
  return errorResponse;
}
