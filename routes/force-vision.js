import pilots from 'xwing-data-module/xwing-data/data/pilots'
var express = require('express');
var router = express.Router();

const name_sort = (items) => items.sort((a, b) => (
  a.name === b.name ? 0 : a.name < b.name ? -1 : 1
))

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('fv-pilots', {
    title: 'The Archives - Force Vision',
    pilots: name_sort(pilots)
  });
});

module.exports = router;
