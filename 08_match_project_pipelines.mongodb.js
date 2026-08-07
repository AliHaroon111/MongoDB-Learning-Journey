use("aggregate")

// Question : How many users have 'enim' as one of their tags
// just try
db.users.aggregate([
    {
      $match: {
        tags: "enim"
      }
    },
    {
      $group: {
        _id: null,
      numOfTagsWithEnim:{
        $sum: 1
      }}
    }
  ])
