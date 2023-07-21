<reference types="cypress" />;

describe("Open google", () => {
  it("SHould open google", () => {
    cy.visit("https://www.google.com/");
  });
});
