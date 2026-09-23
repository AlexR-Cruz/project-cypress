describe('Módulo de Reservas - Testes de API', () => {
  
  it('Deve criar uma nova reserva via API REST com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        firstname: 'Alex',
        lastname: 'Cruz',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2026-10-01',
          checkout: '2026-10-10'
        },
        additionalneeds: 'Café da manhã'
      }
    }).then((response) => {
      // Validações no Payload de Resposta da API
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('bookingid')
      expect(response.body.booking.firstname).to.eq('Alex')
      expect(response.body.booking.totalprice).to.eq(150)
    })
  })
})