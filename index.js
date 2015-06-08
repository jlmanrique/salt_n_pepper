var crypto = require('crypto');
var hash = crypto.createHash('sha256');

var salt = crypto.randomBytes(16);
var pepper = "oFLJDjbFr2Bb3X34aKKst@kBF}t$910";

var password = 'panzamon';

var hashed_password = hash.update(salt).update(pepper).update(password).digest('hex');

console.log('hashed password = %s',hashed_password);