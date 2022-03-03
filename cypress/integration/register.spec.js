describe("register test", () => {
  it("visit gallery page", () => {
    cy.visit("/");
  });

  it("click on the register button", () => {
    cy.visit("/");
    cy.get(".nav-link").eq(2).click();
    cy.get("#first-name").type("miki");
    cy.get("#last-name").type("veliki");
    cy.get("#email").type("miki10@gmail.com");
    cy.get("#password").type("12345678");
    cy.get("#password-confirmation").type("12345678");
    cy.get(".form-check-input").click();
    cy.get("button").click();
  });
});
