const db = require('megadb');
const tasks = new db.crearDB('tasks');

module.exports = async (app) => {
    app.get('/search', async (req, res) => {
        let resultTasks = await tasks.obtener('root');
        res.render('search', {
            message: "",
            path: "",
            resultTasks
        })
    });
    app.get('/search/result/:filter/:value', async (req, res) => {
        let filter = req.params.filter;
        let value = req.params.value;
        let allTasks = await tasks.obtener('root');
        let resultTasks = [];
        if(filter == 'numberId') {
            for(task of allTasks) {
                if(task.numberId == value) {
                    resultTasks.push(task);
                    return res.render('search', {
                        path: "/../",
                        resultTasks,
                        message: ""
                    })
                }
            }
            return res.render('search', {
                path: "/../",
                message: "No se encontraron resultados",
                resultTasks
            })
        }
        if (filter == 'category-state') {
            let valores = value.split('-');
            for (task of allTasks) {
                if(task.category == valores[0] && task.state == valores[1]) {
                    resultTasks.push(task);
                }
            }
            let message = "";
            if(resultTasks.length == 0){
                message = "No se encontraron resultados"
            }
            return res.render('search', {
                path: "/../",
                message,
                resultTasks
            })
        }
        if(filter == 'category') {
            for (task of allTasks) {
                if(task.category == value) {
                    resultTasks.push(task);
                }
            }
            let message = "";
            if(resultTasks.length == 0){
                message = "No se encontraron resultados"
            }
            return res.render('search', {
                path: "/../",
                message,
                resultTasks
            })
        }
        if(filter == 'state') {
            for(task of allTasks) {
                if(task.state == value) {
                    resultTasks.push(task);
                }
            }
            let message = "";
            if(resultTasks.length == 0){
                message = "No se encontraron resultados"
            }
            return res.render('search', {
                path: "/../",
                message,
                resultTasks
            })
        }
    })
}