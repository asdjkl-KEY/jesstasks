const db = require('megadb');
const tasks = new db.crearDB('tasks');

module.exports = async (app) => {
    let allTasks = await tasks.obtener('root');
    app.get('/', (req, res) => {
        res.render('index', {
            path: "",
            allTasks
        })
    })
}