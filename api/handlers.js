var request = require("request")
const User = require("../models/forum-user").User
const Mongoose = require('mongoose')



function getGames(req, res, next) {

  var options = {
    method: 'GET',
    url: 'https://rawg-video-games-database.p.rapidapi.com/games',
    headers: {
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      'x-rapidapi-key': '1253607fb3mshdbde93c187c0d21p18caa6jsnb04a488a9d9f',
      useQueryString: true
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) res.send(error);
    else
      res.send(body);
  });

}

function addComment(req, res, next) {

  var user = new User({
    _id: new Mongoose.Types.ObjectId(),
    name: req.body.name,
    game: req.body.game.toUpperCase(),
    comment: req.body.comment
  })

  user.save((err, user) => {
    if (err) next(err)
    else res.send(user)
  })

}

function getAllComments(req, res, next) {

  User.find({}, (err, user) => {
    if (err) next(err)
    else res.send(user)
  })
}

function getCommentByGameName(req, res, next) {

  // console.log('yes')

  User.find({ game: req.body.game.toUpperCase() }, (err, user) => {
    if (err) next(err)
    else res.send(user)
  })

}

function getGameDetailsById(req, res, next) {

  const request = require('request');

  const options = {
    method: 'GET',
    url: 'https://rapidapi.p.rapidapi.com/games/'+req.body.id,
    headers: {
      'x-rapidapi-key': '1253607fb3mshdbde93c187c0d21p18caa6jsnb04a488a9d9f',
      'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      useQueryString: true
    }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error)

    var ob = JSON.parse(body)
    console.log(ob)

    var resp = ({
      "name":ob.name,
      "rating":ob.rating,
      "image":ob.background_image,
      "description":ob.description_raw.split('.')[0] + ob.description_raw.split('.')[1] + ob.description_raw.split('.')[2],
      "requirements": JSON.stringify(ob.platforms[0].requirements),
      "stores": ob.stores,
      "link": ob.website
    })

    console.log(ob.platforms[0].requirements)

    res.send(resp)

  })


}

module.exports = [
  getGames, addComment, getAllComments, getCommentByGameName, getGameDetailsById
]