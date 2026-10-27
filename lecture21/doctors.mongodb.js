// db.doctors.find(
//     {
//         $or:[
//            { department: "cardiology"},
//            {fees {$gte: 1000}}
//         ]
//     }
// )


db.doctors.find({},{name:1,department})