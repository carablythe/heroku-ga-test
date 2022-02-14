//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const Reward = require('./models/Schema.js')
const app = express ();
const db = mongoose.connection;
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3003;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI);

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// Routes
//___________________
//localhost:3000 and index page set-up
app.get('/' , (req, res) => {
    res.render("index.ejs")
});

//_____________________
//Specific functions for this app below
//_____________________

// // Create "add a new activity" page:

app.get('/activities/new', (req,res) => {
  res.render('new.ejs')
})

// // :
app.get('/activities', (req,res) => {
  Reward.find({}, (error, allActivities) => {
    res.render(
      'activities.ejs',
      {
        activitiesX: allActivities
      }
    )
  })
})

// // Display a newly added activity on the list of Completed Activities:
app.post('/activities', (req, res) => {
  Reward.create(req.body, (error, createdActivity) => {
    res.redirect('/activities')
  })
})



// // Delete an activity from the list of Completed Activities:
app.delete('/activities/:id', (req, res) => {
  Reward.findByIdAndRemove(req.params.id, (error, data) => {
    res.redirect('/activities')
  })
})

// // seed
// app.get('/pokemon/seed', (req,res) => {
//   Pokemon.create(pokeSeed, (err, resetPokemon) => {
//     res.redirect('/pokemon')
//   })
// })
//

// // Activities list page:

app.put('/activities/:id', (req,res) => {
  Reward.findByIdAndUpdate(req.params.id, req.body, {new:true},(error, updatedModel) => {
    if(error){
        console.log('err');
      } else{
        res.redirect('/activities')
      }
    })
  })


// // Show each Completed Activity page:
app.get('/activities/:id', (req, res) => {
    Reward.findById(req.params.id, (error, foundActivity) => {
      res.render(
        'show.ejs',
        {
          activitiesX: foundActivity
        }
      )
    })
  })


// // Edit a Completed Activity page:
app.get('/activities/:id/edit', (req, res) => {
  Reward.findById(req.params.id, (error, foundActivity) => {
    res.render(
      'edit.ejs',
      {
        activitiesX: foundActivity
      }
    )
  })
})


//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
