const express = require("express");
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("Hello my name is virgin mohito fucker rohit")
});
app.listen( PORT, () => console.log("Server is listening to port " + PORT ));
