/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should display inappropriate message when content includes 'giraffe'", () => {
    cy.intercept("POST", "http://localhost:4000", {
      statusCode: 406,
      body: {
        msg: "Your message was not appropriate."
      }
    });
    cy.get("[placeholder='Title']").type("This is my accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I pet a giraffe.");

    cy.get("[type='checkbox']").click();

    cy.get("button").click();

    cy.contains("Your message was not appropriate.").should("be.visible");
  });
});
