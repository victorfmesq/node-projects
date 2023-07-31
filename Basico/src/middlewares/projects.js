const { BASE_ROUTE_PATH_PROJECTS } = require("../routes/constants");

const logRequest = (request, response, next) => {
  const { method, url } = request;

  const path = url === "/" ? "" : url;

  console.log(`[${method.toUpperCase()}] ${BASE_ROUTE_PATH_PROJECTS} ${path}`);

  return next(); // callback que permite que a request passe para dentro do end-point.
};

module.exports = { logRequest };
