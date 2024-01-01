const { default: axios } = require("axios");


exports.homeRoutes = (req, res) => {
    axios.get("http://localhost:3000/api/user")
        .then(response => {
            res.render('index', { data: response.data });
        })
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get("http://localhost:3000/api/user", { params: { id: req.query.id } })
        .then(response => {
            res.render('update_user', { user: response.data });
        })
}