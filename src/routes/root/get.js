async function response() {
  return {
    result: "All ok",
    message: "Got your pie"
  };
}

module.exports = {
  method: "GET",
  path: "/",
  options: {
    handler: response
  }
};
