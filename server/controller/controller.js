const UserDB = require("../model/model");

// Creating user
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Cannot procede without data' });
        return;
    }

    const user = new UserDB({
        name: req.body.name,
        email: req.body.email,
        status: req.body.status,
        gender: req.body.gender
    })

    user
        .save(user)
        .then(data => {
            console.log(data);
            res.redirect('/add-user');
        }).catch(err => {
            res.status(500).send({
                message: err || "some error in creation of data saving"
            });
        });
}

// Finding users
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        UserDB.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `User not found  ${id}.` });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: err || `Error fetching User ${id}.` });
            });
    } else {
        UserDB.find()
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "User not found." });
                } else {
                    res.send(data);
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error fetching users" });
            });
    }
}

// Update route
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Cannot update without data." });
        return;
    } else {
        if (req.params.id) {
            const id = req.params.id;
            UserDB.findByIdAndUpdate(id, req.body, { new: true }) // new:true returns the changed data
                .then(data => {
                    if (!data) {
                        res.status(404).send({ message: `User not found ${id}.` });
                    } else {
                        res.send(data);
                    }
                })
                .catch(err => {
                    res.status(500).send({ message: `Error updating user ${id}.` });
                });
        }
    }
}

// Delete route
exports.delete = (req, res) => {
    if (req.params.id) {
        const id = req.params.id;
        UserDB
            .findByIdAndDelete(id)
            .then((data) => {
                if (!data) {
                    res.status(404).send({ message: `User not found ${id}` })
                }
                res.send({ message: "User deleted." })
            })
            .catch(err => {
                res.status(500).send({ message: `Error deleting user ${id}` })
            })
    }
}   