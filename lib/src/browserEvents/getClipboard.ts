export const getClipboard = (value: string) => {
  cy.wrap(
    Cypress.automation("remote:debugger:protocol", {
      command: "Browser.grantPermissions",
      params: {
        permissions: ["clipboardReadWrite", "clipboardSanitizedWrite"],
        origin: window.location.origin,
      },
    })
  );
  return cy
    .window()
    .its("navigator.clipboard")
    .invoke("readText")
    .should("equal", value);
};
