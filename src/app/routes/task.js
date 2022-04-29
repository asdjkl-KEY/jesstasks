const db = require('megadb');
const tasks = new db.crearDB('tasks');

module.exports = async (app) => {
    app.get('/tasks', (req, res) => {res.redirect('/')})
    app.get('/tasks/:task', async (req, res) => {
        let tarea = req.params.task;
        let allTasks = await tasks.obtener('root');
        let task = 'none';
        let states = [];
        let categories = [];
        for(tareaa of allTasks) {
            if(tareaa.shortName == tarea) {
                task = tareaa;
                if(task.state == 'unstart') {
                states.push(task.state);states.push('current');states.push('noended'); states.push('ended');
                }
                if(task.state == 'current') {
                    states.push(task.state);states.push('unstart');states.push('noended'); states.push('ended');
                }
                if(task.state == 'noended') {
                    states.push(task.state);states.push('current');states.push('unstart'); states.push('ended');
                }
                if(task.state == 'ended') {
                    states.push(task.state);states.push('current');states.push('noended'); states.push('unstart');
                }

                if(task.category == 'urgent') {
                categories.push(task.category);categories.push('important');
                categories.push('special'); categories.push('unique');
                categories.push('normal'); categories.push('escolar');
                }
                if(task.category == 'important') {
                categories.push(task.category);categories.push('urgent');
                categories.push('special'); categories.push('unique');
                categories.push('normal'); categories.push('escolar');
                }
                if(task.category == 'special') {
                categories.push(task.category);categories.push('important');
                categories.push('urgent'); categories.push('unique');
                categories.push('normal'); categories.push('escolar');
                }
                if(task.category == 'unique') {
                categories.push(task.category);categories.push('important');
                categories.push('special'); categories.push('urgent');
                categories.push('normal'); categories.push('escolar');
                }
                if(task.category == 'normal') {
                categories.push(task.category);categories.push('important');
                categories.push('special'); categories.push('unique');
                categories.push('urgent'); categories.push('escolar');
                }
                if(task.category == 'escolar') {
                categories.push(task.category);categories.push('important');
                categories.push('special'); categories.push('unique');
                categories.push('normal'); categories.push('urgent');
                }
            }
        }
        let message = "";
        if(task == 'none') message = "No se encontró la tarea";
        res.render('task', {
            path: "/",
            message,
            task,
            states,
            categories,
            messageChange: req.flash('messageChange')
        })

    })
}