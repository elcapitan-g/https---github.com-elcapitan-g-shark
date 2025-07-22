const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#sagger.tage['Hello Shark World']
  res.send('Hello Shark World');
});

router.use('/sharks', require('./sharks'));
router.use('/attacks', require('./attacks'));

module.exports = router;
