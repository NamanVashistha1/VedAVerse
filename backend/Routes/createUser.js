const express = require("express")
const router = express.Router()
const { User , Surdata} = require("../Models/User")
const { body, validationResult } = require('express-validator')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const jwtsecret = "nfc_shanks"


router.post("/createUser", [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password, salt);

    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: secpassword
        });

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});



router.post("/loginUser", [
    body('email').isEmail(),
    body('password', "Incorrect password").isLength({ min: 5 })
], async (req, res) => {
    
    const error = validationResult(req);
    if (!error.isEmpty()) { return res.status(400).json({ errors: error.array() }); }


    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) { return res.status(400).json({ error: "try logging with Correct credentials 1" }); }

        const cmppassword = await bcrypt.compare(req.body.password, userData.password)
        console.log(cmppassword);
        if (!cmppassword) { return res.status(400).json({ error: "try logging with Correct credentials 2" }); }

        const data = {
            user: {
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, jwtsecret)
        res.json({ success: true, authToken: authToken })
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})


// POST route to create a new Surdata entry
router.post('/Surdata', [
    body('Age').isNumeric().withMessage('Age must be a number'),
    body('ongoing_prescrip').isString().withMessage('Ongoing prescription must be a string')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const username = req.body.username;
        const userData = await User.findOne({ username });
        if (!userData) {
            return res.status(400).json({ error: 'User not found' });
        }

        const surdata = new Surdata({
            userId: userData._id,
            Age: req.body.Age,
            ongoing_prescrip: req.body.ongoing_prescrip
        });

        await surdata.save();
        res.json({ success: true });
    } catch (error) {
        console.error('Error creating Surdata:', error);
        res.status(500).json({ error: 'Could not create Surdata' });
    }
});

// router.post('/verifyauth', authToken ,async (req, res) => {

// });


// Get surdata from username
router.post('/userSurveyData', async (req, res) => {
    // const errors = validationResult(req);
    // console.log(req.body);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }

    try {
        const username = req.body.username;
        const userData = await User.findOne({ username });
        if (!userData) {
            return res.status(400).json({ error: 'User not found' });
        }else{
            // console.log(userData);
            const userId = userData._id;
            const surveyData = await Surdata.findOne({ userId });
            // console.log(surveyData);
            return res.json({ surveyData });

        }

        
    } catch (error) {
        console.error('Error finding User', error);
        res.status(500).json({ error: 'Could not find user' });
    }
});




module.exports = router;