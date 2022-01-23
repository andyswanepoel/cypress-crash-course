/// <reference types="cypress" />

describe("Rewards Dashboard", () => {
  it("should display a list of rewards", () => {
    cy.visit("/rewards");
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 8 cups of water for 7 straight days"
      )
      .and("contain", "850 points for fasting for 5 days straight");
  });

  it("should display a list of rewards using a mock", () => {
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json"
    });

    cy.visit("/rewards");
    cy.get("ul")
      .should(
        "contain",
        "500 points for drinking 10 cups of water for 7 straight days"
      )
      .and("contain", "8500 points for fasting for 5 days straight");
  });
});
