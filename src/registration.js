async function routes(fastify, options) {

  fastify.get('/getUser/:user_login/:password', (request, reply) => {
      console.log(request.body)
      fastify.pg.connect(onConnect)

      function onConnect(err, client, release) {
          if (err) return reply.send(err)

          client.query(
              'SELECT * FROM public."user" WHERE user_login=$1 AND password=MD5($2)', [request.params.user_login, request.params.password],
              function onResult(err, result) {
                  release()
                  reply.send(err || result.rows[0])
                  var id = result.rows[0].user_uuid
              }
          )
      }
  })

  fastify.post('/addUser', (request, reply) => {
      fastify.pg.connect(onConnect)

      function onConnect(err, client, release) {
          if (err) return reply.send(err)

          client.query('INSERT INTO public."user"(user_uuid, user_login, password, card, admin) VALUES (uuid_generate_v4(), $1, MD5($2), $3, false)', [request.body.user_login, request.body.password,request.body.card,request.body.admin],
              function onResult(err, result) {
                  release()
                  reply.send(err || result.rows)
              }
          )
      }
  })
}
module.exports = routes;
//module.exports = id;
