// //___________________
// //Dependencies
// //___________________
// const bcrypt = require('bcrypt')
// const express = require('express');
//
// const User = require('../models/users.js')
// const app = express ();
//
//
// //___________________
// // Routes
// //___________________
// //localhost:3000 and index page set-up
// app.get('/' , (req, res) => {
//     res.render("index.ejs")
// });
//
//
// // // Create "add a new activity" page:
//
// app.get('/activities/new', (req,res) => {
//   res.render('new.ejs')
// })
//
//
// // // Show "Checklist Reward" page:
// app.get('/checklist_reward', (req, res) => {
//     res.render("checklist_reward.ejs")
// });
//
// // // Show "Completed Activities" full list page following schema:
// app.get('/activities', (req,res) => {
//   Reward.find({}, (error, allActivities) => {
//     res.render(
//       'activities.ejs',
//       {
//         activitiesX: allActivities
//       }
//     )
//   })
// })
//
// // //Add (newly added activity) result on the list of Completed Activities:
// app.post('/activities', (req, res) => {
//   Reward.create(req.body, (error, createdActivity) => {
//     res.redirect('/activities')
//   })
// })
//
// // // Delete result displayed on Completed Activities list page:
// app.delete('/activities/:id', (req, res) => {
//   Reward.findByIdAndRemove(req.params.id, (error, data) => {
//     res.redirect('/activities')
//   })
// })
//
// // // Edit result displayed on Completed Activities list page:
//
// app.put('/activities/:id', (req,res) => {
//   Reward.findByIdAndUpdate(req.params.id, req.body, {new:true},(error, updatedModel) => {
//     if(error){
//         console.log('err');
//       } else{
//         res.redirect('/activities')
//       }
//     })
//   })
//
//
// // // Show individual Completed Activity page:
// app.get('/activities/:id', (req, res) => {
//     Reward.findById(req.params.id, (error, foundActivity) => {
//       res.render(
//         'show.ejs',
//         {
//           activitiesX: foundActivity
//         }
//       )
//     })
//   })
//
//
// // // Page to edit an already added completed activity:
// app.get('/activities/:id/edit', (req, res) => {
//   Reward.findById(req.params.id, (error, foundActivity) => {
//     res.render(
//       'edit.ejs',
//       {
//         activitiesX: foundActivity
//       }
//     )
//   })
// })
//
//
// module.exports = app
