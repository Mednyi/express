const consoleLog = (req, res, next) => {
    console.log(`body: ${JSON.stringify(req.body)}, 
    params: ${JSON.stringify(req.params)}, 
    query: ${JSON.stringify(req.query)}
    headers: ${req.header('Authorization')}`);
    // res.send('middleware worked successfully');
    next();
}

module.exports = {
    consoleLog,
};
