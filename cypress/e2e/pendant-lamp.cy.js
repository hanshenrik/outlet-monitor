describe('Check for new results in outlets', () => {
  const baseUrl = Cypress.env('BASE_URL_OUTLET_A');
  const locations =
    'locationName=lil-b&locationName=osl-210b&locationName=osl-215b&locationName=osl-217b&locationName=osl-221b&locationName=osl-228b&locationName=osl-231b&locationName=osl-b';
  const room = 'room=belysning';
  const category = 'category=pendler';
  const family = 'family=acorn';

  it('Pendant lamp', () => {
    cy.visit(`${baseUrl}?${locations}&${room}&${category}&${family}`);

    // Handle cookie consent banner if present
    cy.get('#coiOverlay').then((val) => {
      if (val) {
        cy.get('#declineButton').click();
      }
    });

    // Empty results
    cy.contains('Søket ditt ga ingen resultater');
  });
});
