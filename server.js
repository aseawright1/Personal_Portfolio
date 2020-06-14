const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

      // replace the special strings with server generated strings
      data = data.replace(/\$OG_TITLE/g, 'Alek Seawright - Portfolio');
      data = data.replace(/\$OG_DESCRIPTION/g, "Learn a little about me");
      result = data.replace(/\$OG_IMAGE/g, './public/logo512.png');
      response.send(result);
    });

  });
  // response.sendFile(filePath);  

  app.use(express.static(path.resolve(__dirname, './build')));
  
  app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    response.sendFile(filePath);
  });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
