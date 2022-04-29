function runServer() {
    const express = require('express');
    const app = express();
    const port = 4000;
    const path = require('path');

    //!configs
    require('./middlewares')(app);

    //!routes
    require('./router')(app);

    app.listen(port, () => {
        console.log("Internal Server opened on port: "+port);
    });
}

module.exports = runServer;