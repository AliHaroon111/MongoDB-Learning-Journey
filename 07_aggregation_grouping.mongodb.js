use("aggregate")

db.users.aggregate([
    {
      $group: {
        // i want on big document
        _id: null,
        //accumulator
        averageAge:{
          $avg: "$age"
        }
      }
    }
  ])