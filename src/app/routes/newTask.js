const db = require('megadb');
const tasks = new db.crearDB('tasks');

module.exports = async (app) => {

    app.get('/newtask', (req, res) => {
        res.render('newtask', {
            path: "",
            messageSuccess: req.flash('successMessage'),
            messageDeny: req.flash('denyMessage')
        })
    })

    app.post('/newtask', async (req, res) => {
        let name = req.body.taskname;
        let shortName = req.body.shortname;
        let description = req.body.description;
        let fin = req.body.end;
        let category = req.body.category;
        let numberId = await tasks.obtener('numbers');

        //? aquí se hace la validación si todos los cuerpos necesarios existen para crear una nueva tarea.
        if(name == "" || shortName == "" || description == "" || fin == "" || category == "" || !req.body) {
            req.flash('denyMessage', "Faltan informaciones")
            return res.redirect('/newtask');
        }


        //? aqui se crea la nueva tarea y se guarda en la base de datos local
        let newtask = {
            name,shortName,description,fin,category,numberId, state: 'unstart'
        };
        tasks.push('root', newtask);
        tasks.sumar('numbers', 1);

        //? acá se redirecciona al usuario para mostrar el mensaje de correcto!
        req.flash('successMessage', "Tarea guardada con éxito! ✅")
        res.redirect('/newtask');
    })
}