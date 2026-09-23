describe('Módulo de Validação com Banco de Dados', () => {

  it('Deve verificar se o usuário foi registrado diretamente no Banco', () => {
    // Executa uma query SQL via task do Node.js
    const query = "SELECT * FROM users WHERE email = 'alex@exemplo.com';"

    cy.task('queryDb', query).then((users) => {
      // Valida o resultado da tabela do banco de dados
      expect(users).to.have.lengthOf(1)
      expect(users[0].name).to.eq('Alex Cruz')
    })
  })

  it('Deve limpar dados de teste do banco (Setup / Teardown)', () => {
    const deleteQuery = "DELETE FROM orders WHERE status = 'TESTE_E2E';"

    cy.task('queryDb', deleteQuery).then(() => {
      cy.log('Massa de dados de teste limpa com sucesso!')
    })
  })
})