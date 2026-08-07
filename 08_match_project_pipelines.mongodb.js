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

  
  // Below alter Professional way
  db.users.aggregate([
    {
        $match: {
        tags: "enim"
    }
    },
    {
        $count: 'UserWithEnimTags'
    }
  ])


  // Question : What are the names and age of users who are inactive and have 'valit' as a tag??

//   just try
db.users.aggregate([
    {
        $match: {
          $and: [
            { tags: "velit" },
            { isActive: false }
          ]
        }
      },
    {$project: {
      name:1,
      age:1
    }}
   
  ])

// Below alter Professional way - for above question
 db.users.aggregate( [
    {
      $match: {
          isActive: false,
          tags: "velit"
      }
    },
    {$project: {
      name:1,
      age:1
    }}
   
  ])