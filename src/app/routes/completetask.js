const db = require('megadb');
const tasks = new db.crearDB('tasks');

module.exports = (app) => {
    app.get('/completetask/:taskId', async (req, res) => {
        let numberId = req.params.taskId;
        let allTasks = await tasks.obtener('root');
        for(task of allTasks) {
            if(task.numberId == numberId) {
                let newTask = task;
                tasks.extract('root', task);
                newTask.state = 'ended';
                tasks.push('root', newTask);
                return res.redirect(`/tasks/${task.shortName}`);
            }
        }
    })
}