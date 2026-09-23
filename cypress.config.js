const { defineConfig } = require('cypress')
const { Client } = require('pg')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        queryDb(queryText) {
          const client = new Client({
            host: process.env.DB_HOST || 'localhost',
            port: 5432,
            user: 'qa_user',
            password: 'qa_passwordAa123',
            database: 'qa_database'
          })

          return client.connect()
            .then(() => client.query(queryText))
            .then((res) => {
              client.end()
              return res.rows || res // Retorna as linhas consultadas
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