const app = require('express').Router();
// const { Wine } = require('.././models/Wine');
const { models: {Wine }} = require('../index');
app.get('/', async(req,res,next)=>{
    try {
        console.log('-------get route');
        res.send(await Wine.findAll());
       
    }
    catch(ex) {
        next(ex);
    }
});
app.post('/', async(req,res,next)=>{
    try {
        res.send(await Wine.findAll());
    }
    catch(ex) {
        next(ex);
    }
});
app.delete('/:id', async(req,res,next)=>{
    try {
        const wine = await Wine.findByPk(req.params.id); 
        await wine.destroy();
        res.sendStatus(204)
    }
    catch(ex) {
        next(ex);
    }
});

module.exports = app;
