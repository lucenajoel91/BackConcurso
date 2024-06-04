var accessToken = "CSG_UkVx5q8iMCLG5nAKtHpdA3VqsJ0NbHG-jWSTW3HcAfy/5Cr=0Ae0A3NV-A?X8xhKzafd?SGu?uzU!IsKubptuy3joFGRs9GBayBjMYKWN3lsAHrbdj6GbyzFx4yn";

function verifyToken(req, res, next) {
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        var bearerToken = bearer[1];
        if (bearerToken === accessToken) {
            next();
        } else {
            res.status(403).send('Acceso denegado');
        }
    } else {
        res.status(403).send('Acceso denegado');
    }
}

module.exports = verifyToken;
