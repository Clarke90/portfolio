var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome', location: 'Barrie, Ontario', email:
'chadclarke15@gmail.com', phone: '705-795-0645', intro: 'portfolio' });
});

/* GET about page. */
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Contact'});
});

/* GET projects page. */
router.get('/projects', function(req,res,next){
  res.render('projects', { title: 'Projects'});
});

/* GET services page. */
router.get('/skills', function(req,res,next){
  res.render('skills', { title: 'Skills'});
});

/* GET single project temp. */
router.get('/single-project', function(req,res,next){
  res.render('single-project', { title: 'single-project'});
});

module.exports = router;
