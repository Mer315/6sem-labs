// Show all databases
show dbs

// Create / switch to database
use college

// Create collection
db.createCollection("students")

// Insert documents
db.students.insertMany([
  { name: "Asha", roll: 101, dept: "CSE" },
  { name: "Rahul", roll: 102, dept: "ECE" },
  { name: "Meera", roll: 103, dept: "IT" }
])

// Display all documents
db.students.find()

// Update a document
db.students.updateOne(
  { roll: 101 },
  { $set: { dept: "AI" } }
)

// Delete a document
db.students.deleteOne({ roll: 103 })

// Show collections
show collections

// Drop collection
db.students.drop()

// Drop database
db.dropDatabase()
