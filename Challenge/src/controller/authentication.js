class Authentication{
    login(req,res) {
        res.send('login')
    }
}

module.exports = new Authentication()