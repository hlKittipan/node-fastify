require("dotenv").config();
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const mongoose = require("mongoose");
const config = require("./configs/index");
const routes = require("./routes/index")

mongoose.Promise = global.Promise;
mongoose
  .connect(config.MONGODB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("[success] task  : connected to the database ");
    },
    (error) => {
      console.log("[failed] task  " + error);
      process.exit();
    }
  );
mongoose.connection;

// Declare a route
// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })

fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      name: { type: 'string' }
    },
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    return { hello: 'world' }
  }
})

require("./routes/pos/product")(fastify); // we will be working with posts.js only for now 
// Run the server!
const start = async () => {
  try {
    await fastify.listen(4000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)

  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()