const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index"); // adjust the path as necessary

chai.use(chaiHttp);
const { expect } = chai;

describe("User Controller", () => {
  it("should assign an astrologer to a user", (done) => {
    chai
      .request(server)
      .post("/api/users/assignUser")
      .send({ username: "testUser" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("astrologerId");
        done();
      });
  });
});
