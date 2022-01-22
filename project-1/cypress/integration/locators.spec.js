/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating elements with 'get' command", () => {
    // Getting all elements by tag name
    cy.get("button");

    // Get all elements by class name
    cy.get(".btn-with-class");

    // Get all elements with specific classes
    cy.get("[class='Elements-btn btn-with-class']");
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']");

    // Get all elements by ID
    cy.get("#btn-with-id");
    cy.get("[id='btn-with-id']");

    // Get all elements by specific attribute
    cy.get("[type='submit']");

    // Get all elements by tag name AND class
    cy.get("button.Elements-btn");

    // Get all elements by tag name AND class AND ID
    cy.get("button#btn-with-id.Elements-btn");

    // Get all elements by tag name AND class AND attribute
    cy.get("button.Elements-btn[type='submit']");

    // Get all elements by data-attribute
    cy.get("[data-cy='btn-id-1']");

    // Get all elements by testId
    cy.getByTestId("btn-id-1");
  });

  it("locating elements with 'contains' command", () => {
    // Query by text
    cy.contains("Unique Text");

    // Query by text
    cy.contains("Not Unique Text");

    // Query by text and selector
    cy.contains("[type='submit']", "Not Unique Text");

    // This is the same as the above
    cy.get("[type='submit']").contains("Not Unique Text");

    cy.get("form").contains("Not Unique Text");

    // This is the same as the abobe
    cy.contains("form", "Not Unique Text");
  });

  it("locating elements with 'find' command", () => {
    cy.get("#form-1").find(".btn-1");
  });
});
