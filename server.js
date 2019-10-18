const Hapi = require("hapi");
const filepaths = require("filepaths");
const hapiBoomDecorators = require("hapi-boom-decorators");

const config = require("./config");

async function createServer() {
  const server = await new Hapi.Server(config.server);

  await server.register([hapiBoomDecorators]);

  let routes = filepaths.getSync("./src/routes/");
  for (let route of routes) server.route(require(route));

  try {
    await server.start();
    console.log(`Server is running at: ${server.info.uri}`);
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

createServer();
