var request = require("request")

function getGames(req, res, next) {

    var options = {
        method: 'GET',
        url: 'https://rawg-video-games-database.p.rapidapi.com/games',
        headers: {
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          'x-rapidapi-key': '1253607fb3mshdbde93c187c0d21p18caa6jsnb04a488a9d9f',
          useQueryString: true
        },
        json:true
      };
      
      request(options, function (error, response, body) {
          if (error) res.send(error);
          else
          res.send(body);
      });

}

module.exports = [
    getGames
]