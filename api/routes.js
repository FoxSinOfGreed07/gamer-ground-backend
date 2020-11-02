const expresss = require('express');
const router = expresss.Router();

const [getGames,addComment,getAllComments,getCommentByGameName, getGameDetailsById] = require('./handlers')

router.route('/getGames').get(getGames)

router.route('/addComment').post(addComment)

router.route('/getAllComments').get(getAllComments)

router.route('/getCommentByGameName').post(getCommentByGameName)

router.route('/getGameDetailsById').post(getGameDetailsById)


router.route("*").all((req, res, next) => res.send("route not found"))

module.exports = router