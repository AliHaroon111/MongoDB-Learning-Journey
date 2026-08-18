use("aggregate");

db.books.aggregate([
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "_id",
        as: "author_details"
      }
    },
    {
      $addFields: {
        author_details: {
          $first: "$author_details"
        }
      }
    }
  ]) //localField and foreignField do not have to have the same name, +++===---> but the data inside them must match in value and data type