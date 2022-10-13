import { visit } from "../visit";

describe("check clipboard functionality", () => {
  it("should check the something", () => {
    visit("http://127.0.0.1:5500/");
    findById("test").type("nepal").type(`{backspace}`);
  });
});

const get = (data: string) => {
  return cy.get(data);
};
const findById = (id: string) => {
  return cy.get(`#${id}`);
};
