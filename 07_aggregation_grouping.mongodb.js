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

// Below the Group and sum or more 

//  Question : Find the total number of males and females

db.users.aggregate([
    {
        $group: {
          _id: "$gender",
          genderCount: {
            $sum: 1
          }
        }
    }
])


// Question : Which country has the highest number of registered users?

db.users.aggregate([
    {
        $group: {
          _id: "$company.location.country",
          userCount: {
            $sum: 1
          }
        }
    },
    {
        $sort: {
        userCount: -1
        }
    },
    {
        $limit: 1
    }
])


// List all the unique eye colors present in the collection

db.users.aggregate([
    {
        $group: {
          _id: "$eyeColor",
        }
    },
])