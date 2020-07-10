const { new: _new, index, show, create, edit, update, delete: _delete } = require('../controllers/ResourcesController');

function auth(req, res, next){
    if(!req.isAuthenticated()){
        req.flash('danger', 'You need to login first into my website');
        return res.redirect('/login');
    } 
    next();
 }

module.exports = router => {
    router.get('/cars', index); //public
    router.get('/cars/new', auth, _new); // authenticated
    router.post('/cars', auth, create);// authenticated
    router.post('/cars/update', auth, update);// authenticated
    router.post('/cars/delete', auth,  _delete);// authenticated
    router.get('/cars/:id/edit', auth, edit);// authenticated
    router.get('/cars/:id', show); // authenticated
};