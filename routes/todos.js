const { Router } = require ('express');

const router = Router();

router.get('/reviews', (reg, res) => {
    res.render('reviews.ejs');
});

router.get('/about', (reg, res) => {
    res.render('about.ejs');
})

router.get('/katalina', (reg, res) => {
    res.render('katalina.ejs');
})

router.get('/reviews', (reg, res) => {
    res.render('reviews.ejs');
})

module.exports = router;