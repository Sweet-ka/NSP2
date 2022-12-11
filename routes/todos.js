const { Router } = require ('express');
const fs = require('fs/promises');
const { constants } = require('fs');


const router = Router();

router.get('/about', (req, res) => {
    res.render('about.ejs');
})

router.get('/about_nsp', (req, res) => {
    res.render('about_nsp.ejs');
})

router.get('/natrlab_team', (req, res) => {
    res.render('natrlab_team.ejs');
})

router.get('/consult', (req, res) => {
    res.render('consult.ejs');
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

router.get('/previews', (req, res) => {
    res.render('articles/previews.ejs');
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

router.get('/articles/:preview', async (req, res) => {
    //let path = 'goods/' + req.params.group + '.ejs';
	
	try {
		// await fs.access('views/' + path, constants.F_OK);
        await fs.access('views/articles/' + 'article.ejs', constants.F_OK);

        res.render('articles/article.ejs', {preview: req.params.preview});

		//res.render(path);
	} catch(err) {
		res.render('notfound.ejs');
	}

})

module.exports = router;