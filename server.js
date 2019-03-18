const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// console.log(userData);
app.listen(PORT, function(req, res){
    console.log("Listening on http://localhost:" + PORT)
});