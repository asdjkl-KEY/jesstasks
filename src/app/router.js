const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    let routes = fs.readdirSync(path.join(__dirname, './routes')).filter(file => file.endsWith('.js'));
    for (file of routes) {
        const route = require('./routes/'+file);
        route(app) 
    }
}