/**
 * Created by mario on 7/17/17.
 */
let express = require('express');
let path = require('path');

let publicPath = path.join(__dirname, '../public');
let port  =  process.env.PORT || 3000;
let app = express();

app.use(express.static(publicPath));

// app.get('/', middle, (req, res) => {
//     res.send(200);
// });

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});