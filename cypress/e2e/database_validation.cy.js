describe('Módulo de Validação com Banco de Dados PostgreSQL Real', () => {

  before(() => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
      );
    `
    cy.task('queryDb', createTableQuery)

    const insertQuery = `
      INSERT INTO users (name, email)
      VALUES ('Alex Cruz', 'alex@exemplo.com');
    `
    cy.task('queryDb', insertQuery)
  })

  it('Deve verificar se o usuário existe no Banco de Dados PostgreSQL', () => {
    const query = "SELECT * FROM users WHERE email = 'alex@exemplo.com';"

    cy.task('queryDb', query).then((users) => {
      expect(users).to.have.lengthOf(1)
      expect(users[0].name).to.eq('Alex Cruz')
    })
  })

  it('Deve limpar os dados do teste (Teardown)', () => {
    const deleteQuery = "DELETE FROM users WHERE email = 'alex@exemplo.com';"

    cy.task('queryDb', deleteQuery)
  })
})