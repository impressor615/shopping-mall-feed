export default (db, type) => {
  const Rank = db.define("rank", {
    description: type.STRING,
    id: {
      primaryKey: true,
      type: type.STRING,
    },
    image: type.JSONB,
    liked: type.BOOLEAN,
    name: type.STRING,
    secondName: type.STRING,
    url: type.STRING,
  });

  return Rank;
};
