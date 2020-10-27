const expresss = require('express');
const router = expresss.Router();

const [getGames] = require('./handlers')

router.route('/getGames').get(getGames)


router.route("*").all((req, res, next) => res.send("route not found"))

module.exports = router