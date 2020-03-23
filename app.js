const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get("*", (req, res, next) => {
    
    console.log("Resource not found.");
    res.send("<h1 style='font-size: 100px; font-weight: bold;'>404</h1>");
    
});

app.listen(PORT, () => {

    console.log(`Server started on port ${PORT}`);
});