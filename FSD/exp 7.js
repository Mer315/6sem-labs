// Show databases
show dbs

// Create / switch to database
use college

// Create collection
db.createCollection("students")

// Insert documents
db.students.insertMany([
  { roll: 1, name: "Asha", dept: "CSE", year: 2 },
  { roll: 2, name: "Rahul", dept: "ECE", year: 3 },
  { roll: 3, name: "Meera", dept: "IT", year: 1 },
  { roll: 4, name: "Arjun", dept: "CSE", year: 4 },
  { roll: 5, name: "Neha", dept: "IT", year: 2 }
])

// --------------------
// COUNT
// --------------------
db.students.countDocuments()

db.students.countDocuments({ dept: "CSE" })

// --------------------
// SORT
// --------------------
db.students.find().sort({ year: 1 })    // Ascending
db.students.find().sort({ year: -1 })   // Descending

// --------------------
// LIMIT
// --------------------
db.students.find().limit(3)

// --------------------
// SKIP
// --------------------
db.students.find().skip(2)

// --------------------
// SKIP + LIMIT
// --------------------
db.students.find().skip(2).limit(2)

// Drop collection
db.students.drop()

// Drop database
db.dropDatabase()
