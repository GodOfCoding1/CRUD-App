const axios = require("axios");

exports.homeRoute = (req, res) => {
    axios
        .get("http://localhost:3000/api/users")
        .then(function(response) {
            res.render("index", { users: response.data });
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.add_user = (req, res) => {
    res.render("add-user");
};

exports.update_user = (req, res) => {
    axios
        .get("http://localhost:3000/api/users", {
            params: { id: req.query.id },
        })
        .then(function(userdata) {
            res.render("update-user", { user: userdata.data });
        })
        .catch((err) => {
            res.send(err);
        });
};

exports.about = (req, res) => {
    res.render("About").catch((err) => {
        res.send(err);
    });
};