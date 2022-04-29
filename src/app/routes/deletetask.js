const db = require('megadb');
const tasks = new db.crearDB('tasks');

module.exports = async (app) => {
    app.get('/deletetask/:name',async (req, res) => {
        let taskShortName = req.params.name;
        let allTasks = await tasks.obtener('root');
        for(i in allTasks) {
            let task = allTasks[i];
            if(task.shortName == taskShortName) {
                tasks.extract('root', task)
                return res.redirect('/');
            }
        }
    })
}