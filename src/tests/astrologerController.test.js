const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index"); // adjust the path as necessary

chai.use(chaiHttp);
const { expect } = chai;

describe("Astrologer Controller", () => {
  it("should adjust flow weight of an astrologer", (done) => {
    chai
      .request(server)
      .put("/api/astrologers/adjustFlowWeight/1")
      .send({ newFlowWeight: 5 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property(
          "message",
          "Flow weight adjusted successfully"
        );
        done();
      });
  });
});
