var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse={
    "handsetCards":[
      { imageName:'i1',title: 'Card 1', cols: 3, rows: 1 },
      { imageName:'i2',title: 'Card 2', cols: 2, rows: 1 },
      { imageName:'i3',title: 'Card 3', cols: 1, rows: 1 },
      { imageName:'i4',title: 'Card 4', cols: 3, rows: 1 },
      { imageName:'i5',title: 'Card 5', cols: 2, rows: 1 },
      { imageName:'i6',title: 'Card 6', cols: 1, rows: 1 },
      { imageName:'i7',title: 'Card 7', cols: 3, rows: 1 },
      { imageName:'i8',title: 'Card 8', cols: 1, rows: 1 },
      { imageName:'i9',title: 'Card 9', cols: 2, rows: 1 }
    ],
    "webCards": [
      { imageName:'i1',title: 'Card 1', cols: 2, rows: 1 },
      { imageName:'i2',title: 'Card 2', cols: 1, rows: 1 },
      { imageName:'i3',title: 'Card 3', cols: 1, rows: 1 },
      { imageName:'i4',title: 'Card 4', cols: 2, rows: 1 },
      { imageName:'i5',title: 'Card 5', cols: 3, rows: 2 },
      { imageName:'i6',title: 'Card 6', cols: 1, rows: 2 },
      { imageName:'i7',title: 'Card 7', cols: 1, rows: 1 },
      { imageName:'i8',title: 'Card 8', cols: 1, rows: 2 },
      { imageName:'i9',title: 'Card 9', cols: 1, rows: 1 }
    ]
  }
  res.json(jsonResponse)
});

module.exports = router;
