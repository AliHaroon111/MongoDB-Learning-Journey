use("ecommerce")

db.products.updateOne(
    {'name': 'Wireless Mouse'},
    {$set:{'price': 999}}
)

db.products.updateMany(
    {'category': 'Electronics'},
    { $inc: { 'stock': 10 }}
)