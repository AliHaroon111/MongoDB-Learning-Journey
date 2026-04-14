use("contacts")

db.contacts.deleteOne({ name:"Alice"})

db.orders.deleteMany({ status: "Delivered" })