const { defineConfig } = require('cypress')
const { Client } = require('pg')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async queryDb(query) {
          const client = new Client({
            connectionString: 'postgresql://neondb_owner:npg_cDxRI7ET4yGJ@ep-late-thunder-b6vgbqfx-pooler.c-2.sa-east-1.aws.neon.tech/neondb?sslmode=require',
            ssl: {
              rejectUnauthorized: false // Necessário para aceitar o certificado SSL da nuvem
            }
          })

          await client.connect()
          const res = await client.query(query)
          await client.end()
          return res.rows
        }
      })
    }
  }
})