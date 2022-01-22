/// <reference types="cypress" />

describe("Accomplishments Dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("should show error if some information is missing", () => {
    cy.getByTestId("accomplishment-input").type("accomplishment");
    cy.contains("Submit Accomplishment").click();

    cy.contains("Complete the items above to continue").should("be.visible");
  });

  it("should display validation component if all information is input", () => {
    cy.getByTestId("accomplishment-title-input").type("accomplish title");
    cy.getByTestId("accomplishment-input").type("accomplishment");
    cy.getByTestId("accomplishment-checkbox").click();
    cy.contains("Submit Accomplishment").click();

    cy.contains("This Accomplisment was Successfully Submitted").should(
      "be.visible"
    );
  });

  it("should return back to accomplishment dashboard with empty inputs when go back button is clicked", () => {
    cy.getByTestId("accomplishment-title-input").type("accomplish title");
    cy.getByTestId("accomplishment-input").type("accomplishment");
    cy.getByTestId("accomplishment-checkbox").click();
    cy.contains("Submit Accomplishment").click();

    cy.contains("Go Back").click();

    cy.contains("h2", "Accomplishment").should("be.visible");

    cy.getByTestId("accomplishment-title-input").should("have.value", "");
    cy.getByTestId("accomplishment-input").should("have.value", "");
    cy.getByTestId("accomplishment-checkbox").should("not.be.checked");
  });
});
