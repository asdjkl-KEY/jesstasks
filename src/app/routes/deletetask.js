const db = require('megadb');
const tasks = new db.crearDB('tasks');

module.exports = async (app) => {
    app.get('/deletetask', (req, res) => {
        res.redirect('/');
    })
    app.get('/deletetask/:numberId',async (req, res) => {
        let numberId = req.params.numberId;
        let allTasks = await tasks.obtener('root');
        let numbers = await tasks.obtener('numbers');
        for(i in allTasks) {
            let task = allTasks[i];
            if(task.numberId == numberId) {
                tasks.extract('root', task);
                return res.redirect('/');
            }
        }
    })
}