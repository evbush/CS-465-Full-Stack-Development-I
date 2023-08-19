var fs = require('fs');
var info = JSON.parse(fs.readFileSync('./data/about.json', 'utf8'));

/* GET about view */
const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways', info });
};
module.exports = {
    about
};