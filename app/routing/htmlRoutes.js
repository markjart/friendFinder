

/* Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

Your htmlRoutes.js file should include two routes:

    A GET Route to /survey which should display the survey page.
    A default, catch-all route that leads to home.html which displays the home page.

Your apiRoutes.js file should contain two routes:

    A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. */

//ROUTERS part 2: THANKS https://stackoverflow.com/questions/38486093/express-js-route-modules-not-working
var path = require("path");	 
	
module.exports = function(app) {
  app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  })

  app.use(function (req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  })
}