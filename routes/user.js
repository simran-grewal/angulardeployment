/**
 * Created by i_amg on 26-02-2017.
 */
var expreess =  require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index');
});

module.export = router;