import * as chai from "chai";

const { app } = global as any;
describe("Rank Router", () => {
  it("should return ranks", async () => {
    const res = await chai.request(app).get("/api/ranks");
    res.status.should.equal(200);
    res.body.data.forEach((item) => {
      item.should.includes.keys([
        "description",
        "id",
        "image",
        "liked",
        "name",
        "secondName",
        "url",
      ]);
    })
  });
});
