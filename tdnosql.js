db.createCollection("sport")

db.sport.insertOne({name : "Football", creation : 1880, surface : "gazon"})

db.sport.insertOne({name : "Tennis", creation : 1870, surface : "dur"})

db.sport.insertOne({name : "Rugby", creation : 1910, surface : "gazon"})

db.sport.updateMany({}, {$set : {title :"", requiredTeams: true}}, {upsert : true})

db.sport.updateMany({requiredTeams : true}, {$set :{minimumJoueurs :0}})

db.sport.updateMany({requiredTeams:true}, {$inc:{minimumJoueurs : 10}})

db.sport.updateMany({}, {$push : {title :[]}}, {upsert : true})

db.sport.updateMany({requiredTeams : true}, {$push : [{title :{name : "toto", prenom : "toto", numero : 19}, {name : "tata", prenom : "tutu", numero : 24} }]}}})



db.users.updateMany({}, {$push : {teams :{ $each : [{titulaire : true}]}}})
