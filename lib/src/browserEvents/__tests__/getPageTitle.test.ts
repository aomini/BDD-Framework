import { getPageTitle } from "../getPageTitle";

describe("Get the page title", () => {
  it("should get the title of google homepage", () => {
    cy.visit("https://www.google.com/");
    getPageTitle().should("eq", "Google");
  });
});
