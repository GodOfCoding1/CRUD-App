var userDB = require("../model/model");

// creating and saving user

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "content is empty. cannot be empty" });
        return;
    }
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    });

    //save user to db

    user
        .save(user)
        .then((data) => {
            res.redirect("/add_user");
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "some error while sending to db",
            });
        });
};

//GET single user

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        userDB
            .findById(id)
            .then((data) => {
                if (!data) {
                    res.status(404).send({ message: "didnt find the user with id" + id });
                } else {
                    res.send(data);
                }
            })
            .catch((err) => {
                res
                    .status(500)
                    .send({ message: err + "err retrieving user with id" + id });
            });
    } else {
        userDB
            .find()
            .then((user) => {
                res.send(user);
            })
            .catch((err) => {
                res
                    .status(500)
                    .send({ message: err.message || "some error while getting from db" });
            });
    }
};

//update user
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update can not be empty" });
    }
    const id = req.params.id;
    userDB
        .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res
                    .status(400)
                    .send({ message: `cannot update with ${id}.maybe not found` });
            } else {
                res.send(data);
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "error in updating" });
        });
};

//delete user
exports.delete = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to delete can not be empty" });
    }
    const id = req.params.id;
    userDB
        .findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res
                    .status(400)
                    .send({ message: `cannot delete with ${id}.maybe not found` });
            } else {
                res.send("deldeted succesfull");
            }
        })
        .catch((err) => {
            res.status(500).send({ message: "error in deleting" });
        });
};