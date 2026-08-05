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

// // You can give one field also instead of 'null'
  db.users.aggregate([
    {
      $group: {
        // i want on big document
        _id: "$gender",
        //accumulator
        averageAge:{
          $avg: "$age"
        }
      }
    }
  ])