// cypress.config.js
const { defineConfig } = require('cypress')
const { Client } = require('pg') // Importa o cliente do PostgreSQL

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        // Cria a tarefa 'queryDb' para executar comandos SQL
        queryDb(queryText) {
          const client = new Client({
            host: 'localhost',
            port: 5432,
            user: 'seu_usuario',
            password: 'sua_senha',
            database: 'seu_banco'
          })

          return client.connect()
            .then(() => client.query(queryText))
            .then((res) => {
              client.end()
              return res.rows // Retorna os registros consultados
            })
            .catch((err) => {
              client.end()
              throw err
            })
        }
      })
    }
  }
})