export default (db, type) => {
  const Product = db.define("product", {
    id: {
      primaryKey: true,
      type: type.STRING,
    },
    image: type.JSONB,
    liked: type.BOOLEAN,
    likedCount: type.INTEGER,
    mobileUrl: type.TEXT,
    price: type.INTEGER,
    shopId: type.STRING,
    shopName: type.STRING,
    title: type.STRING,
    url: type.TEXT,
  });

  return Product;
};
