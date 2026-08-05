use("aggregate")

// Question : What is the average age of all the users
db.users.aggregate([
    {
      $group: {
        // i want on big document - null mean for all not just one field - no critera
        _id: null,
        //accumulator
        averageAge:{
          $avg: "$age"
        }
      }
    }
  ])

// // You can give one field also instead of 'null'
//   db.users.aggregate([
//     {
//       $group: {
//         _id: "$gender",
//         averageAge:{
//           $avg: "$age"
//         }
//       }
//     }
//   ])


// Question : List the top 5 most common favorite fruits amoung users

db.users.aggregate([
    {
        $group: {
          _id: "$favoriteFruit",
          count:{
            $sum: 1
          }
        }
    },
    {
        $sort: {
          count: -1
        }
    },
    // for getting top 5 - we use limit
    {
        $limit: 5
    }
])