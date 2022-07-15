const { Router } = require ('express');
const fs = require('fs/promises');
const { constants } = require('fs');


const router = Router();

router.get('/aaa', (req, res) => {
    res.render('about.ejs');
})

router.get('/katalina', (req, res) => {
    res.render('katalina.ejs');
})

router.get('/reviews', (req, res) => {
    res.render('reviews.ejs');
})

router.get('/goods', (req, res) => {
    res.render('goods/goods.ejs');
})

router.get('/card', (req, res) => {
    res.render('goods/card.ejs');
})

router.get('/goods/:group', async (req, res) => {
    //let path = 'goods/' + req.params.group + '.ejs';
	
	try {
		// await fs.access('views/' + path, constants.F_OK);
        await fs.access('views/goods/' + 'category.ejs', constants.F_OK);

        res.render('goods/category.ejs', {group: req.params.group});

		//res.render(path);
	} catch(err) {
		res.render('notfound.ejs');
	}

})

module.exports = router;