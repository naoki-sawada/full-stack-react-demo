import agent from "supertest-koa-agent";
import app from "../../app.js";

let bookId;

describe("routes", () => {
  describe("GET /books", () => {
    test("Check the response", async () => {
      const request = await agent(app)
        .get("/books");
      const { status, text } = request;
      expect(status).toEqual(200);
      console.log(text);
    });
  });

  describe("POST /books", () => {
    test("Check the response", async (done) => {
      const query = {
        title: 'とある魔術の禁書目録',
        description: 'その幻想を打ち壊す',
        image: 'http://books.google.com/books/content?id=VWIdNwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        price: 600,
      };
      const request = await agent(app)
        .post("/books")
        .send(query);
      const { status, text } = request;
      expect(status).toEqual(200);
      console.log(text);
      const data = JSON.parse(text);
      bookId = data._id;
      done();
    });
  });

  describe("PUT /books/:_id", () => {
    test("Check the response", async (done) => {
      const query = {
        title: 'とある魔術の禁書目録',
        description: 'その幻想を打ち壊す',
        image: 'http://books.google.com/books/content?id=VWIdNwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        price: 700,
      };
      const request = await agent(app)
        .put(`/books/${bookId}`)
        .send(query);
      const { status, text } = request;
      expect(status).toEqual(200);
      console.log(text);
      done();
    });
  });

  describe("DELETE /books/:_id", () => {
    test("Check the response", async (done) => {
      const request = await agent(app)
        .delete(`/books/${bookId}`);
      const { status, text } = request;
      expect(status).toEqual(200);
      console.log(text);
      done();
    });
  });
});