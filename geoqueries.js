//QUESTION 1
db.places.insert( {
    name: "Rue Saint-Romain",
   location: { type: "Point", coordinates: [ 2.320432662963867,
          48.84760361164794 ] }
} );
db.places.insert( {
   name: "Quai de Jemmapes",
   location: { type: "Point", coordinates: [ 2.3668670654296875,
          48.86990906900767 ] }
} );
db.places.insert( {
   name: "Halle Frayssinet",
   location: { type: "Point", coordinates: [ 2.3709869384765625,
          48.833989576686 ] }
} );


//QUESTION 2
db.places.findOne(
   {
     location:
       { $near :
          {
            $geometry: { type: "Point",  coordinates: [ 2.3229217529296875,
          48.8748770322432 ] },
          }
       }
   }
)


//QUESTION 3
db.places.find(
  {
     loc: {
       $geoWithin: { $polygon: [ [ 2.320432662963867,
              48.84760361164794 ], [ 2.3668670654296875,
                     48.86990906900767 ], [ 2.3709869384765625,
                            48.833989576686 ], [ 2.320432662963867,
                                   48.84760361164794 ] ] }
     }
  }
)

//QUESTION 4
db.places.find(
   { loc: { $geoWithin: { $center: [ [2.300434112548828,
          48.84573966784039], 10 ] } } }
)
