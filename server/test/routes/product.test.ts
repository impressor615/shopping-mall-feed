import * as chai from "chai";

const { app } = global as any;
describe("Product Router", () => {
  it("should return products", async () => {
    const res = await chai.request(app).get("/api/products");
    res.status.should.equal(200);
    res.body.data.forEach((item) => {
      item.should.includes.keys([
        "id",
        "image",
        "liked",
        "likedCount",
        "mobileUrl",
        "price",
        "shopId",
        "title",
        "url",
      ]);
    })
  });
});
