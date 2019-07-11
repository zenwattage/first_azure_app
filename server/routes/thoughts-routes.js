const router = require('express').Router();
const Thought = require('../models/Thought');


router.get('/', (req, res, next) => {
    Thought.find({}, (err, thoughts) => {
        if(err) next(err);
        else res.json(thoughts);
    });
});



router.post('/seed', (req, res, next) => {
    for(let x = 0; x < 5; x++) {
        const newThought = new Thought({
            thought: 'This is thought ${Math.random().toFixed(5)}',
            dateCreated: new Date(),
        });
        newThought.save(err => {
            if(err) console.log(err);
            else console.log('thought saved!');
        });
    }
    res.send('Lets run the GET to check our successful thoughts!');
});


/*
    url: localhost:8080/api/thoughts/create

*/
router.post('/create', (req, res, next) => {
    const { thought } = req.body;
    const newThought = new Thought({
        thought,
        dateCreated: new Date(),
    });
    newThought.save(err => {
        if (err) next(err);
        else res.json({ newThought, msg: 'thought saved!'});
    });
});

router.delete('/', (req, res, next) => {
    Thought.deleteMany({}, err => {
        if(err) next (err);
        else res.send('Successfully deleted!');
    });
});


module.exports = router;