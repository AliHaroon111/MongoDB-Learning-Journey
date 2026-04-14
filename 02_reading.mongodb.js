use("ecommerce")

// db.products.find({"name":"Wireless Mouse"}) // we can use filter inside

// db.products.find({category:"Computers"})

//// Comparison Operators
// db.products.find({price:{$gt:1000}})
// db.products.find({price:{$gte:1000,$lte:50000}})

//// Logical Operators
// db.products.find({$or:[{category:"Electronics"},{stock:{$lt:50} }] })

//// Projection(Select specific field😃)
// db.products.find({},{name:1,price:1,_id:0})

// //Sorting limiting
// db.products.find().sort({price:-1}).limit(1)

db.products.find().sort({price:1}).skip(1).limit(1)