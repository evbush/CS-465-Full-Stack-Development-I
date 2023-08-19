var fs = require('fs');
var newstip = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', newstip });
};

module.exports = {
    news
};