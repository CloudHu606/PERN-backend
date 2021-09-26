const pool = require('../../dbconnect');

module.exports = {

    // create 
    async create(req, res, next) {
        try {
            const { description } = req.body;
            const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
            res.json(newTodo.rows[0]);
        } catch (error) {
            console.error(error.message);
        }

    },

    // get all 
    async get(req, res, next) {
        try {
            const data = await pool.query("SELECT * FROM todo")
            res.json(data.rows);
        } catch (error) {
            console.error(error.message);
        }
    },

    // get one
    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const singeData = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
            res.json(singeData.rows[0]);
        } catch (error) {
            console.error(error.message);
        }
    },

    // update one 
    async updateOne(req, res, next) {
        try {
            const { id } = req.params;
            const { description } = req.body;
            const updateData = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
            res.json('update completed!');
        } catch (error) {
            console.error(error.message);
        }
    },

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;
            const updateData = await pool.query("DELETE FROM todo  WHERE todo_id = $1", [id])
            res.json('delete completed!');
        } catch (error) {
            console.error(error.message);
        }
    }

};