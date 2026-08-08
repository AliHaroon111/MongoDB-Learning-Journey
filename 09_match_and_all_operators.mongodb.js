use("aggregate")

// Who has registered the most recently?

db.users.aggregate([
    {
      $sort: {
        registered: -1
      }
    },
    {
      $limit: 4
    },
    {
      $project: {
        name:1,
        registered:1,
        favoriteFruit:1
      }
    }
  ])
