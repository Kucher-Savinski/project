const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-cors'), {})

fastify.register(require('fastify-postgres'), {
  connectionString: 'postgres://postgres:mysecretpassword@localhost:5432/postgres'
})

function handle (conn) {
  conn.pipe(conn) // creates an echo server
}



fastify.register(require('./registration'))
fastify.register(require('./auction'))
/*fastify.register(require('./lot'))
fastify.register(require('./basket'))*/

fastify.listen(5000, function (err, address) {
  if (err) {
      fastify.log.error(err)
      process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})
