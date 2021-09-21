const todCtrls = require('./todoCtrls');

module.exports = (app) => {

    // create 
    app.post('/api/create', todCtrls.create);

    // get all
    app.get('/api/get', todCtrls.get);

    // get one
    app.get('/api/get/:id', todCtrls.getOne)

    // update 
    app.put('/api/update/:id', todCtrls.updateOne)

    // delete 
    app.delete('/api/delete/:id', todCtrls.deleteOne)
};