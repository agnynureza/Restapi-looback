module.exports = function(app){
    app.dataSources.postgresDb.automigrate('People', function(err){
        if(err) throw err;

        app.models.People.create([{
            name: 'Luke Skywalker',
            height: 172,
            mass: 77,
            gender: 'Male'
          }, {
            name: 'C-3PO',
            height: 167,
            mass: 75,
            gender: 'Undetermined'
          }], function(err, People) {
            if (err) throw err;
      
            console.log('Models created: \n', People)
        })
    })
    app.dataSources.postgresDb.automigrate('Film', function(err) {
        if (err) throw err;
    
        app.models.Film.create([{
          title: 'A New Hope',
          opening_crawl: 'It is a period of civil war',
          director: 'George Lucas',
          producer: 'Gary Kurtz'
        }, {
          title: 'The Empire Strikes Back',
          opening_crawl: 'It is a dark time for the rebellion',
          director: 'Irvin Kershner',
          producer: 'Rick McCallum'
        }], function(err, People) {
          if (err) throw err;
    
          console.log('Models created: \n', People);
        });
    });
    
      app.dataSources.postgresDb.automigrate('Starship', function(err) {
        if (err) throw err;
    
        app.models.Starship.create([{
          name: 'Death Star',
          model: 'DS-1 Orbital Battle Station',
          manufacturer: 'Imperial Department of Military Research',
          passengers: 843342,
          class: 'Deep Space Mobile Battlestation'
        }, {
          name: 'Sentinel-class landing craft',
          model: 'Sentinel-class landing craft',
          manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
          passengers: 75,
          class: 'Landing Craft'
        }], function(err, Starship) {
          if (err) throw err;
    
          console.log('Models created: \n', Starship);
        });
    });
    
      app.dataSources.postgresDb.automigrate('Species', function(err) {
        if (err) throw err;
    
        app.models.Species.create([{
          name: 'Droid',
          classification: 'artificial',
          designation: 'sentient',
          average_height: 34,
          skin_color: "brown",
          language: "Galacticus"
        }, {
          name: 'Human',
          classification: 'Mammal',
          designation: 'sentient',
          average_height: 180,
          skin_color: 'black',
          language: 'Galactic Basic'
        }], function(err, Species) {
          if (err) throw err;
    
          console.log('Models created: \n', Species);
        });
    });
    
      app.dataSources.postgresDb.automigrate('Planet', function(err) {
        if (err) throw err;
    
        app.models.Planet.create([{
          name: 'Yavin IV',
          rotation_period: 24,
          orbital_period: 4818,
          diameter: 10200,
          population: 1000
        }, {
          name: 'Hoth',
          rotation_period: 23,
          orbital_period: 549,
          diameter: 7200,
          population: 12500
        }], function(err, Planet) {
          if (err) throw err;
    
          console.log('Models created: \n', Planet);
        });
    });
}