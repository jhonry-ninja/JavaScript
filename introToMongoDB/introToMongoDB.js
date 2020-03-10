// Assignment: Intro to MongoDB
// For This section, we want you to do the following operations in a MongoDB database. 
// Work with a partner or a small group so everyone gets a chance to collaborate and 
// work as a team. For some of these, you may have to refer to MongoDB's operator 
// documentation. This is one of the most important assignments in this section, make 
// sure you answer all questions and take notes for future assignments.

// 1. Create a database called 'my_first_db'.
use my_first_db
// 2. Create students collection.
db.createCollection("students")
// 3. Each document you insert into this collection should have the following format: 
//    ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
// 4. Create 5 students with the appropriate info.
db.students.insert({name: "Jhonry", lucky_number: 13, birthday: {month: 01, day: 13, year: 1982}})
db.students.insert({name: "Natassia", lucky_number: 14, birthday: {month: 02, day: 14, year: 1986}})
db.students.insert({name: "Mae", lucky_number: 2020, birthday: {month: 09, day: 26, year: 1987}})
db.students.insert({name: "Vita", lucky_number: 7, birthday: {month: 10, day: 07, year: 1955}})
db.students.insert({name: "Malia", lucky_number: 11, birthday: {month: 05, day: 11, year: 2016}})
// 5. Get all students.
db.students.find()
// or
db.students.find().pretty
// 6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({$or:[{home_state:"California"},{home_state:"Washington"}]})
// $or joins query clauses with a logical OR returns all documents that match the conditions of either clause.
// 7. Get all students whose lucky number is:
//     1. greater than 3
db.students.find({lucky_number: {$gt: 3}})
//     2. less than or equal to 10
db.students.find({lucky_number: {$lte: 10}})
//     3. between 1 and 9 (inclusive)
db.students.find({ $and: [{lucky_number: {$gte:1}}, {lucky_numbers: {$lte:9}}]})
// $and joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
// 8. Add a field to each student collection called 'interests' that is an ARRAY.  
//    It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do 
//    this in ONE operation.
db.students.update({},{$set:{interests:["coding", "brunch", "MongoDB"]}},{multi:true})
// $set	sets the value of a field in a document.
// If multi is set to true, it updates multiple documents that meet the query criteria. If set to false, it updates one document. The default value is false.
// 9. Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name:"Jhonry"},{$push:{interests:"coding"}})
db.students.update({name:"Natassia"},{$push:{interests:"talking"}})
db.students.update({name:"Vita"},{$push:{interests:"eating"}})
db.students.update({name:"Mae"},{$push:{interests:"coffee"}})
db.students.update({name:"Malia"},{$push:{interests:"reading"}})
// 10. Add the interest 'taxes' into someone's interest array.
db.students.update({name:"Jhonry"},{$push:{interests:"taxes"}})
// 11. Remove the 'taxes' interest you just added.
db.students.update({name:"Jhonry"},{$pull:{interests:"taxes"}})
// 12. Remove all students who are from California.
db.students.remove({home_state:"California"})
// 13. Remove a student by name. 
db.students.remove({name:"Jhonry"})
// 14. Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number: {$gt: 5}})
// 15. Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.insert({},{$set:{number_of_belts:0}},{multi:true})
// 16. Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.update({home_state:"Washington"},{$inc:{number_of_belts:1}},{multi:true})
// 17. Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({home_state:"Washington"},{$rename:{number_of_belts: <belts_earned></belts_earned> }},{multi:true})
// 18. Remove the 'lucky_number' field.
db.students.update({},{$unset:{lucky_number:""}},{multi:true})
// 19. Add a 'updated_on' field, and set the value as the current date.
db.students.update({},{$currentDate:{"updated_on":{$type:"date"}}},{multi:true})