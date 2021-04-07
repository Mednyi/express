const myUser = {
    email: 'test@test.ru',
    pass: '123qweasd'
};

const auth = (req, res, next) => {
    const buff = new Buffer(req.header('Authorization').split(' ')[1], 'base64');
    const [email, pass] = buff.toString('ascii').split(':');
    if (email === myUser.email && pass === myUser.pass) {
        req.user = myUser;
        next();
    } else {
        res.status(401).send('Wrong credentials');
    }
}

module.exports = {
    auth
};
