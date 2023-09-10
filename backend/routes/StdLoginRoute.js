import express from "express";
import bcrypt from "bcrypt";
const Stud = require('../models/Stdlogin');

const router = express.Router();

router.post('/StudentLogin', async (req, res) => {
    try {
        const {Sid, pass} = re.body;

        const stud = await Stud.findOne({ Sid });

        if(!stud) {
            return res.status(400).json({ message : 'Invalid ID'});
        }

        const password = await bcrypt.compare(pass, stud.password);

        if(!password) {
            return res.status(400).json({ message : 'Invalid Password'});
        }
        res.json({ message : 'Login Successful'});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
});

module.exports = router;