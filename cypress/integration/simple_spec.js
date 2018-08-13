describe("My First Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });
});

describe("Visting homepage", function() {
  it("Visits homepage", function() {
    cy.visit("localhost:3000");
  });
});

describe("Homepage got right content", function() {
  it('finds the content "Departures from London Waterloo "', function() {
    cy.visit("localhost:3000");
    cy.contains("Departures from London Waterloo");
  });
});
