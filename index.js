const express = require('express');
const path = require('path');
const app = express();

app.set('port', 7007);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log("Server running on port " + app.get('port'));
});