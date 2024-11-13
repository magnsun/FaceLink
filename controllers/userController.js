const User = require('../models/user');

// Opretter en ny bruger
exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const user = await newUser.save();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Henter alle brugere
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Opdaterer en bruger
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err);
    }
};

// Sletter en bruger
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({ message: 'User successfully deleted' });
    } catch (err) {
        return res.status(500).send(err);
    }
};
