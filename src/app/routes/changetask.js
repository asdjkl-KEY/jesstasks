const db = require('megadb');
const tasks = new db.crearDB('tasks');

module.exports = (app) => {
    app.get('/changetask/:configs', async (req, res) => {
        let configs = req.params.configs;
        let config = configs.split('-');
        let allTasks = await tasks.obtener('root');
        let numberId = config[0];
        for(task of allTasks) {
            if(task.numberId == numberId) {
                let newTask = task;
                tasks.extract('root', task);
                newTask.state = config[1];
                newTask.category = config[2];
                tasks.push('root', newTask);
                req.flash('messageChange', "Cambios guardados con éxito!");
                return res.redirect(`/tasks/${task.shortName}`);
            }
        }
    })
}