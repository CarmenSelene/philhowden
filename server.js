const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Download Routes
app.get("/download/:", (req, res) => {
  let queryFilter = req.params.filter;
  const file = `${__dirname}/cards/` + queryFilter + `.jpg`;
  res.download(file); // Set disposition and send it.
});

// Send every request to the React app

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
