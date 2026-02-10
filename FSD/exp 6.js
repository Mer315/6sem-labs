// Show existing databases
show dbs

// Create / switch to database
use college

// Create collection
db.createCollection("students")

// --------------------
// CREATE (Insert)
// --------------------
db.students.insertMany([
  { roll: 1, name: "Asha", dept: "CSE", year: 2 },
  { roll: 2, name: "Rahul", dept: "ECE", year: 3 },
  { roll: 3, name: "Meera", dept: "IT", year: 1 }
])

// --------------------
// READ (Find)
// --------------------
db.students.find()

db.students.find({ dept: "CSE" })

// --------------------
// UPDATE
// --------------------
db.students.updateOne(
  { roll: 1 },
  { $set: { year: 3 } }
)

// --------------------
// DELETE
// --------------------
db.students.deleteOne({ roll: 3 })

// Display final records
db.students.find()

// Drop collection
db.students.drop()

// Drop database
db.dropDatabase()
