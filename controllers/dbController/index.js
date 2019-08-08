
const mongoose = require("mongoose");
const db = require("../../models");

const sendMessage = async data => {
  console.log("I'm inside the controller sendMessage", data)

  let res = await db.Channel.findById(chatId).populate("Message")
  console.log("Channel data from db")
  console.log(res)
  
  let chatData = {...res.messages}
  console.log("Chat data from res messages")
  console.log(chatData)
  // res.json({chatData})
  return chatData
}

const createChannel = async data => {
  console.log("I'm inside the controller createChannel", data)

  let newChannel = await new db.Channel({ data }).populate("Message")
  console.log("newChannel data from Channel db")
  console.log(newChannel)

  let channel = await db.User.findByIdAndUpdate(userId, {$push: {channels: newChannel.id }}, {new: true})
  console.log("Channel data from User db")
  console.log(channel)
  
  let channelResponse = {...channel.channels}
  console.log("Chat data from res messages")
  console.log(channelResponse)

  // res.json({channelResponse})
  return channelResponse
}

module.exports = { createChannel };



// const db     = require("../../models");
// const config = require("../../config");
// const Messages = require("../../models/messagesModel")

// //USER FUNCTIONS
// const signUp = async (req, res) => {}
// const signIn = async (req, res) => {}
// const Logout = async (req, res) => {}
// const saveShow = async (req, res) => {}
// const saveMovie = async (req, res) => {}

// // CHANNEL FUNCTIONS
// const addChannel = async (req, res) => {} //create channel
// const inviteToChannel = async (req, res) => {}
// const receiveInvite = async (req, res) => {}

// // MESSAGE FUNCTIONS
// const sendMessage = async (req, res) => {
//   //when send message, all other users but you must get message
//   //message must be stored in message database, grabbing user info
//   console.log(req.body);
//   let {user, channel, content} = req.body;
//   console.log("i'm hit")
//   let newMessage = {};
//     newMessage.user = user;
//     newMessage.channel = channel;
//     newMessage.content = content;
//   let resp = await Messages.create(newMessage);
//     try {
//       console.log(resp +" added"); 
//     } catch (error) {
//       console.log(error)
//     } 
//   }
//   const addShows = async (req, res) => {
//     console.log(req.body);
//     let {showId, name, next_episode_to_air, episode_number, overview, season_number} = req.body;
//     let newShow = {};
//         newShow.showId = showId;
//         newShow.name = name;
//         newShow.next_episode_to_air = next_episode_to_air;
//         newShow.episode_number = episode_number;
//         newShow.overview = overview;
//         newShow.season_number = season_number;
//     let resp = await Shows.create(newShow);
//         try {
//             console.log(resp +"added");
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
// const addMovies = async (req, res) => {
//     console.log(req.body);
//     let{movieId, title, poster_path, release_date, vote_average, overview, runtime, revenue} = req.body;
//     let newMovie = {};
//         newMovie.movieId = movieId;
//         newMovie.title = title;
//         newMovie.poster_path = poster_path;
//         newMovie.release_date = release_date;
//         newMovie.vote_average = vote_average;
//         newMovie.overview = overview;
//         newMovie.runtime = runtime;
//         newMovie.revenue = revenue;
//     let resp = await Movies.create(newMovie);
//         try {
//             console.log(resp +"added");
//         } catch (error) {
//             console.log(error)
//         }
//     }
// console.log("hi")
// module.exports = {addMovies, addShows, sendMessage}
//   // let newNote = await Note.create(note);
//   //          let articleWithNote = await Article.findByIdAndUpdate(_id, {$push: {note: newNote._id}}, {new: true})


  // let newNote = await Note.create(note);
  //          let articleWithNote = await Article.findByIdAndUpdate(_id, {$push: {note: newNote._id}}, {new: true})


// // a user can:
// // - sign up
// // - login
// // - logout
// // - create channels
// // - view one chat (channel) at a time ??
// // - be invited to a channel
// // - invite others to any channel they are active(?) 
// // - write messages
// // - search a list of movies and show  
// // - can save a show or movie as a favorites
// // - can create a channel based on search results 
// // - write a review
// //   - no reviews no spoilers
// // - rate an episode when you mark watched 
// // - mute channel?
// // - unmute channel?
// // - leave a chat and see old history in archive