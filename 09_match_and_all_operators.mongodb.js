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


  // Question : Categorize users by their favorite fruit.

  db.users.aggregate([
    {
      $group: {
        _id: "$favoriteFruit",
        Users: { $push: "$name"}
      }
    },
  
  ])

  // Question : How many user have 'ad' as the second tag in the list of their tags?

  db.users.aggregate([
    {
      $match: {
        "tags.1": "ad"  // this is the syntax
      }
    },
    {$count: 'AdAsSecondTag'}
  
  ])