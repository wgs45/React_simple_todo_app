const router = require('express').Router();

// import todo model
const todo_items_model = require('../models/todoItems');

// Post data
router.post('/api/item', async (req, res) => {
    try {
        const new_item = new todo_items_model({
            item: req.body.item,
        })
        // save item
        const saved_item = await new_item.save();
        res.status(200).json(saved_item);
        console.log("[Server]: Item saved successfully");
    } catch(err) {
        res.json(err);
    }
});

// Get data
router.get('/api/items', async (req, res) => {
    try {
        const all_todo_items = await todo_items_model.find({});
        res.status(200).json(all_todo_items);
        console.log("[Server]: Item get successfully");
    } catch(err) {
        res.json(err);
    }
})

// update data
router.put('/api/item/:id', async (req, res) => {
    try {
        const updated_item = await todo_items_model.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json(updated_item);
        console.log("[Server]: Item updated successfully");
    } catch(err) {
        res.json(err);
    }
})

// delete data
router.delete('/api/item/:id', async (req, res) => {
    try {
        const deleted_item = await todo_items_model.findByIdAndDelete(req.params.id);
        res.status(200).json(deleted_item);
        console.log("[Server]: Item deleted successfully");
    } catch (err) {
        res.json(err);
    }
})

// export router
module.exports = router;
