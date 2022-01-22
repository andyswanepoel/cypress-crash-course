/// <reference types="cypress" />

describe("Habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should display modal when add button is clicked", () => {
    cy.contains("Add").click();

    cy.contains("Add a new habit").should("be.visible");
  });

  it("should display habit card when new habit is added", () => {
    // Add habit
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("Drink water");
    cy.contains("Save Changes").click();

    cy.contains("Drink water")
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container");
  });

  it("should toggle icon when habit care is clicked", () => {
    // Add habit
    cy.get("#habit-add-btn").click();
    cy.get("input[placeholder='Habit']").type("Drink water");
    cy.contains("Save Changes").click();

    // Check that image has an X icon
    cy.get("[src*='close']").should("be.visible");

    // Click on created card
    cy.contains("Drink water").click();

    // Check that image has an check icon
    cy.get("[src*='check']").should("be.visible");
  });
});
