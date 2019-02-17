const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
}); // This let's us set up some functions to run when someone makes a get request to our server
    // We use "*" to match all the unmatched routes
app.listen(port, () => {
    console.log('Server is up!');
});